'use client'

import { ReactNode, useState } from 'react'
import { Header } from '@/common/components/patterns/header/header'
import { Sidebar } from '@/common/components/patterns/sidebar/sidebar'
import clsx from 'clsx'

export default function MainLayout({ children }: { children: ReactNode }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  const handleMenuCLick = () => {
    setIsSidebarCollapsed((prev) => !prev)
  }

  return (
    <div
      className={clsx('main-layout', {
        'main-layout--sidebar-collapsed': isSidebarCollapsed,
      })}
    >
      <Header onMenuClick={handleMenuCLick} />

      <Sidebar isCollapsed={isSidebarCollapsed} />

      <main className={'main-layout__content'}>{children}</main>
    </div>
  )
}
