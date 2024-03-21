import { classNames } from 'shared/libs/classNames/classNames'

describe('Class names util', () => {
  test('it merges classes', () => {
    const classes = classNames('lol', { kek: true }, 'pep')

    expect(classes).toBe('lol kek pep')
  })

  test("it doesn't merge falsy classes", () => {
    const classes = classNames('lol', { kek: false, pep: false }, 'pep')

    expect(classes).toBe('lol pep')
  })

  test('it handles arrays as argument', () => {
    const classes = classNames(
      'lol',
      ['foo', 'bar'],
      { kek: false, pep: false },
      'kek'
    )

    expect(classes).toBe('lol foo bar kek')
  })
})
