import { render, screen, fireEvent } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar'
import { withI18TestProvider } from 'shared/config/i18n/withI18TestProvider'

describe('Sidebar', () => {
  test('should render', () => {
    const SidebarWithTranslation = withI18TestProvider(Sidebar)

    render(<SidebarWithTranslation />)

    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('should collapse and expand', () => {
    const SidebarWithTranslation = withI18TestProvider(Sidebar)

    render(<SidebarWithTranslation />)

    const toggle = screen.getByTestId('sidebar-toggle')

    fireEvent.click(toggle)
    expect(screen.getByTestId('sidebar')).toHaveClass('sidebarCollapsed')

    fireEvent.click(toggle)
    expect(screen.getByTestId('sidebar')).not.toHaveClass('sidebarCollapsed')
  })
})
