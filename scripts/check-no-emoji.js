#!/usr/bin/env node
/**
 * Fails if a user-facing source file contains an emoji.
 * Scans src/ and public/. Documentation outside those folders is not the site.
 */
const fs = require('fs')
const path = require('path')

const roots = ['src', 'public']
const extensions = new Set(['.tsx', '.ts', '.jsx', '.js', '.css', '.md', '.json', '.html', '.svg', '.txt'])
const emoji = /\p{Extended_Pictographic}/gu
// Copyright, registered, and trademark marks are not emoji.
const allowed = new Set([0x00a9, 0x00ae, 0x2122])

function hasEmoji(line) {
  emoji.lastIndex = 0
  for (const match of line.matchAll(emoji)) {
    const point = match[0].codePointAt(0)
    if (!allowed.has(point)) return true
  }
  return false
}

function filesIn(dir, found) {
  if (!fs.existsSync(dir)) return
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) filesIn(full, found)
    else if (extensions.has(path.extname(entry.name))) found.push(full)
  }
}

const files = []
for (const root of roots) filesIn(path.join(process.cwd(), root), files)

const hits = []
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8')
  const lines = text.split(/\r?\n/)
  lines.forEach((line, index) => {
    if (hasEmoji(line)) hits.push(`${file}:${index + 1}: ${line.trim()}`)
  })
}

if (hits.length) {
  console.error('Emoji found in user-facing source:')
  for (const hit of hits) console.error('  ' + hit)
  process.exit(1)
}

console.log(`No emoji in ${files.length} user-facing files.`)
