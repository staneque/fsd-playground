import { render, screen } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar'
import { withI18TestProvider } from 'shared/config/i18n/withI18TestProvider'

describe('Sidebar', () => {
  test('should render', () => {
    const SidebarWithTranslation = withI18TestProvider(Sidebar)

    render(<SidebarWithTranslation />)

    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
})
