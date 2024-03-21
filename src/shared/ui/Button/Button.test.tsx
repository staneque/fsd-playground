import { render, screen } from '@testing-library/react'
import { Button } from 'shared/ui/Button'

describe('Button', () => {
  test('should render', () => {
    render(<Button>Dummy</Button>)

    expect(screen.getByText('Dummy')).toBeInTheDocument()
  })
})
