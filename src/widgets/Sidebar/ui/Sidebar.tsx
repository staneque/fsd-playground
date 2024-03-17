import { useState } from 'react'
import styles from './Sidebar.module.scss'
import { cn } from 'shared/libs/classNames'
import { useTranslation } from 'react-i18next'

interface SidebarProps {}

export const Sidebar = (props: SidebarProps) => {
  const { t } = useTranslation('pdp')

  const [isCollapsed, setCollapsed] = useState(false)

  return (
    <div className={cn(styles.sidebar, isCollapsed && styles.sidebarCollapsed)}>
      <button
        onClick={() => setCollapsed(isCollapsed => !isCollapsed)}
        className={styles.toggleSidebar}
      >
        {isCollapsed ? '🗃️' : '🙅🏼‍♀️'}
      </button>

      <ul>
        <li>{t('pdp-product-quality')}</li>
      </ul>
    </div>
  )
}
