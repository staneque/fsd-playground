import { useState } from 'react'
import styles from './Sidebar.module.scss'
import { cn } from 'shared/libs/classNames'

interface SidebarProps {}

export const Sidebar = (props: SidebarProps) => {
  const [isCollapsed, setCollapsed] = useState(false)

  return (
    <div className={cn(styles.sidebar, isCollapsed && styles.sidebarCollapsed)}>
      <button
        onClick={() => setCollapsed(isCollapsed => !isCollapsed)}
        className={styles.toggleSidebar}
      >
        {isCollapsed ? '🗃️' : '🙅🏼‍♀️'}
      </button>
    </div>
  )
}
