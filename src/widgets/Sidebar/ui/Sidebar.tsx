import { useState } from 'react'
import styles from './Sidebar.module.scss'
import { classNames as cn } from 'shared/libs/classNames/classNames'
import { usePoke } from 'entities/Pokemon/libs/usePoke'
// import { Button } from 'shared/ui/Button'

interface SidebarProps {
  onItemClick: (name: string) => void
}

export const Sidebar = ({ onItemClick }: SidebarProps) => {
  const [isCollapsed, setCollapsed] = useState(false)
  // const [pokeName, setPokeName] = useState('')
  const poke = usePoke('')
  console.log('🚀 ~ Sidebar ~ poke:', poke)

  const handleItemClick = (name: string) => {
    onItemClick(name)
  }

  return (
    <div
      data-testid="sidebar"
      className={cn(styles.sidebar, isCollapsed && styles.sidebarCollapsed)}
    >
      <button
        data-testid="sidebar-toggle"
        onClick={() => setCollapsed(isCollapsed => !isCollapsed)}
        className={styles.toggleSidebar}
      >
        {isCollapsed ? '🗃️' : '🙅🏼‍♀️'}
      </button>

      {poke.isError && <div>error</div>}
      {poke.isLoading && <div>Loading...</div>}

      {/* <Button onClick={() => poke.refetch()}>refetch</Button> */}

      {/* <input
        onChange={e => setPokeName(e.target.value)}
        value={pokeName}
      ></input> */}

      <ul className={cn(styles.sidebarItems)}>
        {poke.data?.results?.map((p: { name: string }) => {
          return (
            <li key={p.name} onClick={() => handleItemClick(p.name)}>
              {p.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
