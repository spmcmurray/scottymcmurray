/**
 * Homepage copy. Edit this file to change the hero headline and the rest of
 * the Afterglow Stage page. The headline is expected to be revisited.
 *
 * "Designed by Scott McMurray in Ohio" is the hero eyebrow and the footer
 * sign-off. It replaces the old Ohio / self-taught hero line and the
 * "Ohio, USA" footer line. The hero feature line is “Simple by design”.
 */

export const heroCopy = {
  eyebrow: 'Designed by Scott McMurray in Ohio',
  /** Text before the lighter middle phrase. */
  headlineLead: 'Simple apps',
  /** Rendered in the lighter weight, as in the approved mockup. */
  headlineEmphasis: 'for a',
  /** Includes the trailing period. */
  headlineTail: 'simpler life.',
  lede: 'Building apps that add value to people’s lives, simple by design.',
  primaryCta: { label: 'Explore my apps', href: '#apps' },
  secondaryCta: { label: 'Read the guide', href: '/guides/ai-analyst-agent' },
} as const

export const signOff = 'Designed by Scott McMurray in Ohio'

export const heroNotes = [
  {
    title: 'Just 10 Minutes',
    body: 'No equipment needed. Work out anywhere, anytime.',
    icon: 'tenfold',
  },
  {
    title: 'Voice Scoring',
    body: 'Say “bogey, two putts.” Score and putts fill in.',
    icon: 'golf',
  },
  {
    title: 'Simple by design',
    body: 'Built to add real value to your daily life.',
    icon: 'shield',
  },
  {
    title: 'One-Mistake Intensity',
    body: 'Six gesture types. One mistake ends the run.',
    icon: 'rr',
  },
] as const

export const highlights = [
  {
    title: 'Simple by design',
    body: 'Apps that add real value',
    icon: 'shield',
  },
  {
    title: 'iOS and web apps',
    body: 'React Native, Expo, Next.js',
    icon: 'phone',
  },
  {
    title: 'AI-first development',
    body: 'Build faster and smarter',
    icon: 'spark',
  },
  {
    title: 'AI-enabled analytics',
    body: 'Analyst agent architecture',
    icon: 'book',
  },
] as const

export const appsIntro = {
  eyebrow: 'My Applications',
  titleLead: 'From fitness to faith,',
  titleEmphasis: 'golf and fast-paced fun.',
  sub: 'Each app is built to add real value to your daily life.',
} as const

export const clubhouse = {
  href: '/apps/app5',
  name: 'Clubhouse Golf',
  tag: 'iOS · In beta',
  body: 'A golf GPS and scorecard for iPhone. See the distance to the green, keep your score, and skip the typing: hold the mic and say how the hole went.',
  captions: [
    { n: '01', title: 'The hole', body: 'Distance to the green, front to back, with the hole drawn out.' },
    { n: '02', title: 'The score', body: 'Score, putts, fairway and a note, right over the map.' },
    { n: '03', title: 'The card', body: 'A real scorecard that fills in as you play.' },
  ],
} as const

export const tenfold = {
  href: '/apps/app1',
  name: 'TENFOLD',
  tag: 'iOS',
  body: '10-minute workouts, no equipment needed—just quick, effective exercises you can do anywhere.',
  pills: ['Just 10 Minutes', 'No Equipment Needed', 'Track Progress'],
} as const

export const radicalRush = {
  href: '/apps/app3',
  name: 'RADICAL RUSH',
  tag: 'iOS Game',
  body: 'An insanely fun reaction game. Master six gesture types with one-mistake intensity—tap, hold, and swipe your way to the top!',
  pills: ['Classic & Zen Modes', 'Apple GameCenter', 'Haptic Feedback'],
} as const

export const churchExplorer = {
  href: '/apps/app2',
  name: 'Church Explorer',
  tag: 'Web · churchexplorer.org',
  external: 'https://churchexplorer.org',
  body: 'Learn Christian church history and theology in bite-sized lessons powered by AI.',
} as const

export const nexus = {
  href: '/apps/app4',
  name: 'Nexus AI',
  tag: 'Web · getnexus.us',
  external: 'https://getnexus.us',
  body: 'Access ChatGPT, Claude, Gemini, and Grok—all from a single unified interface.',
} as const

export const about = {
  eyebrow: 'About Me',
  statementLead: 'I build apps that people actually want to use,',
  statementRest: 'whether it’s a fitness tool, a learning platform, or a fun game.',
  columns: [
    {
      title: 'Background',
      parts: [
        {
          text: 'I’m a self-taught developer with a unique perspective on building software. As a husband and father, I understand the value of time—and the importance of building things that create real value.',
        },
      ],
    },
    {
      title: 'Approach',
      parts: [
        { text: 'My approach combines ' },
        { strong: 'business thinking with technical execution' },
        { text: '. I see problems through the lens of user needs and practical value, not just technical solutions.' },
      ],
    },
    {
      title: 'AI-first',
      parts: [
        { text: 'I embrace ' },
        { strong: 'AI-first development practices' },
        { text: ', leveraging modern tools to build faster and smarter. This allows me to focus on creating apps that solve real problems.' },
      ],
    },
  ],
} as const

export const skills = {
  eyebrow: 'Skills',
  titleLead: 'Product building,',
  titleEmphasis: 'and the architecture behind AI-enabled analytics.',
  groups: [
    {
      title: 'Products',
      items: ['TypeScript', 'React Native and Expo', 'Next.js', 'iOS and web apps'],
    },
    {
      title: 'AI-enabled analytics',
      items: [
        'Analyst agent architecture',
        'Governed semantic models',
        'MCP as a tool boundary',
        'Self-service reporting',
      ],
    },
  ],
} as const

export const guideCard = {
  eyebrow: 'The guide',
  titleLead: 'Building an AI',
  titleRest: 'Analyst Agent',
  body: 'An analyst agent should answer a business question by calling a governed semantic model, then show the measure it used.',
  cta: { label: 'Read the guide', href: '/guides/ai-analyst-agent' },
} as const

export const contactBand = {
  eyebrow: 'Get in Touch',
  titleLead: 'Questions about my apps?',
  titleEmphasis: 'Want to connect?',
  primary: { label: 'Contact me', href: '/support' },
  linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/scottymcmurray/' },
  github: { label: 'GitHub', href: 'https://github.com/spmcmurray' },
} as const

export const assets = {
  tenfoldHome: '/afterglow/tenfold-home.jpg',
  rrSwipe: '/afterglow/rr-swipe.jpg',
  golfScore: '/afterglow/golf-score.jpg',
  golfMap: '/afterglow/golf-map.jpg',
  golfCard: '/afterglow/golf-card.jpg',
  church: '/afterglow/ce.jpg',
  nexusChat: '/afterglow/nexus-chat-sm.jpg',
  iconTenfold: '/afterglow/icon-tenfold.png',
  iconGolf: '/afterglow/icon-golf.png',
  iconRr: '/afterglow/icon-rr.png',
  iconNexus: '/afterglow/icon-nexus.svg',
} as const
