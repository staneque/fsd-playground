interface Post {
  title: string
  description: string
  id: number
  rating: number
  created: Date
  updated: Date
  isSpecialCard: boolean
}

function getTimestamp() {
  return new Date(+new Date() - Math.floor(Math.random() * 10000000000))
}

export const posts: Array<Post> = [
  {
    title: 'wer  efr ewrwq',
    description: 'ser aeakk eare ',
    id: 1,
    rating: 10,
    created: getTimestamp(),
    updated: getTimestamp(),
    isSpecialCard: false,
  },
  {
    title: 'kaere qera',
    description: 'aer e aerewr ',
    id: 2,
    rating: 7,
    created: getTimestamp(),
    updated: getTimestamp(),
    isSpecialCard: true,
  },
  {
    title: 'lorem porem',
    description: 'akdkf aldsdf l ds   lsdfa',
    id: 3,
    rating: 4,
    created: getTimestamp(),
    updated: getTimestamp(),
    isSpecialCard: false,
  },
  {
    title: 'ajskdfj kjsdkafjaksdjf',
    description: 'ajfsdjf dsk jjksdjkd',
    id: 4,
    rating: 6,
    created: getTimestamp(),
    updated: getTimestamp(),
    isSpecialCard: false,
  },
  {
    title: 'W wrker k eraer ',
    description: 'akjfadsjfsdj aasjaskjf',
    id: 5,
    rating: 10,
    created: getTimestamp(),
    updated: getTimestamp(),
    isSpecialCard: false,
  },
  {
    title: 'X',
    description: 'X',
    id: 6,
    rating: 10,
    created: getTimestamp(),
    updated: getTimestamp(),
    isSpecialCard: false,
  },
  {
    title: 'Y',
    description: 'Y',
    id: 7,
    rating: 9,
    created: getTimestamp(),
    updated: getTimestamp(),
    isSpecialCard: false,
  },
  {
    title: 'Z',
    description: 'Z',
    id: 8,
    rating: 1,
    created: getTimestamp(),
    updated: getTimestamp(),
    isSpecialCard: true,
  },
  {
    title: 'A',
    description: 'A',
    id: 9,
    rating: 6,
    created: getTimestamp(),
    updated: getTimestamp(),
    isSpecialCard: false,
  },
  {
    title: 'B',
    description: 'B',
    id: 10,
    rating: 0,
    created: getTimestamp(),
    updated: getTimestamp(),
    isSpecialCard: false,
  },
  {
    title: 'C',
    description: 'C',
    id: 11,
    rating: 3,
    created: getTimestamp(),
    updated: getTimestamp(),
    isSpecialCard: false,
  },
  {
    title: '',
    description: 'missing title',
    id: 12,
    rating: 5,
    created: getTimestamp(),
    updated: getTimestamp(),
    isSpecialCard: false,
  },
  {
    title: 'missing description',
    description: '',
    id: 13,
    rating: 5,
    created: getTimestamp(),
    updated: getTimestamp(),
    isSpecialCard: false,
  },
]
