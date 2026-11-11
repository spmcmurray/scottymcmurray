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
  lede: 'I’m Scott. I build iPhone and web apps in Ohio: a ten-minute workout, a golf scorecard you can talk to, a reaction game.',
  primaryCta: { label: 'Explore my apps', href: '#apps' },
  secondaryCta: { label: 'Read the guide', href: '/guides/ai-analyst-agent' },
} as const

export const signOff = 'Designed by Scott McMurray in Ohio'

export const heroNotes = [
  {
    title: 'Ten minutes, no gear',
    body: 'A full workout in your living room, or a hotel room.',
    icon: 'tenfold',
  },
  {
    title: 'Voice Scoring',
    body: 'Say “bogey, two putts.” Score and putts fill in.',
    icon: 'golf',
  },
  {
    title: 'Small on purpose',
    body: 'Each app does one job and stays out of your way.',
    icon: 'shield',
  },
  {
    title: 'One mistake and you’re out',
    body: 'Six gestures, and the pace keeps picking up.',
    icon: 'rr',
  },
] as const

export const highlights = [
  {
    title: 'Small on purpose',
    body: 'One job per app',
    icon: 'shield',
  },
  {
    title: 'iOS and web apps',
    body: 'React Native, Expo, Next.js',
    icon: 'phone',
  },
  {
    title: 'Built with AI tools',
    body: 'Claude, Cursor, Expo',
    icon: 'spark',
  },
  {
    title: 'Analytics with AI',
    body: 'Analyst agents and semantic models',
    icon: 'book',
  },
] as const

export const appsIntro = {
  eyebrow: 'The apps',
  titleLead: 'What I’ve built so far:',
  titleEmphasis: 'a workout, a golf card, a game, and two AI tools.',
  sub: 'Tap any of them to see more.',
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
  body: 'A workout that takes ten minutes and needs no equipment. Follow a training plan or just start, and watch your streak and Strength Score climb.',
  pills: ['No equipment', 'Training plans', 'Strength Score'],
} as const

export const radicalRush = {
  href: '/apps/app3',
  name: 'RADICAL RUSH',
  tag: 'iOS Game',
  body: 'A reaction game with six gestures: tap, hold, and swipe in four directions. Get one wrong and the run is over.',
  pills: ['Classic and Zen modes', 'Game Center leaderboards', 'Haptics'],
} as const

export const churchExplorer = {
  href: '/apps/app2',
  name: 'Church Explorer',
  tag: 'Web · churchexplorer.org',
  external: 'https://churchexplorer.org',
  body: 'Short lessons on Christian church history and theology, powered by AI.',
} as const

export const nexus = {
  href: '/apps/app4',
  name: 'Nexus AI',
  tag: 'Web · getnexus.us',
  external: 'https://getnexus.us',
  body: 'ChatGPT, Claude, Gemini and Grok in one place, so you don’t need four tabs.',
} as const

export const about = {
  eyebrow: 'About Me',
  statementLead: 'I build small apps for ordinary days,',
  statementRest: 'like a quick workout, a round of golf, or a few minutes of reading.',
  columns: [
    {
      title: 'Background',
      parts: [
        {
          text: 'I taught myself to code. I’m a husband and a dad, so I care about apps that respect people’s time: open it, do the thing, close it.',
        },
      ],
    },
    {
      title: 'Approach',
      parts: [
        { text: 'I come at it from the ' },
        { strong: 'business side as much as the code' },
        { text: '. Before I build anything I ask who it’s for and what they do today without it.' },
      ],
    },
    {
      title: 'AI-first',
      parts: [
        { text: 'I build with ' },
        { strong: 'AI coding tools' },
        { text: ' every day. They get me to a working version faster, and then my time goes to the parts that need a human call.' },
      ],
    },
  ],
  stats: [
    { number: '5', label: 'Apps built' },
    { number: '100%', label: 'Self-Taught' },
    { number: '10', label: 'Minutes in a TENFOLD workout' },
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
  titleLead: 'Questions about an app?',
  titleEmphasis: 'Or just want to say hi?',
  primary: { label: 'Contact me', href: '/support' },
  linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/scottymcmurray/' },
  github: { label: 'GitHub', href: 'https://github.com/spmcmurray' },
} as const

export const assets = {
  tenfoldHome: '/afterglow/tenfold-onboarding.jpg',
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
