import { useState } from 'react'
import styles from './Sidebar.module.scss'
import { classNames as cn } from 'shared/libs/classNames/classNames'
import { useTranslation } from 'react-i18next'

export const Sidebar = () => {
  const { t } = useTranslation('pdp')

  const [isCollapsed, setCollapsed] = useState(false)

  return (
    <div
      data-testid="sidebar"
      className={cn(styles.sidebar, isCollapsed && styles.sidebarCollapsed)}
    >
      <button
        onClick={() => setCollapsed(isCollapsed => !isCollapsed)}
        className={styles.toggleSidebar}
      >
        {isCollapsed ? '🗃️' : '🙅🏼‍♀️'}
      </button>

      <ul className={cn(styles.sidebarItems)}>
        <li>{t('pdp-product-quality')}</li>
        <li>{t('pdp-product-size')}</li>
        <li>{t('pdp-step-custom')}</li>
        <li>{t('pdp-step-design')}</li>
      </ul>
    </div>
  )
}
