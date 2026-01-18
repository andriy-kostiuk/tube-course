'use client'

import { HiClock, HiCog, HiCollection, HiHeart, HiHome } from 'react-icons/hi'

import { useMyChannels } from '@/modules/channels/hooks/use-channels'
import { Avatar } from '@/common/components/ui/avatar/avatar'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FC } from 'react'

const mainNavItems = [
  { href: '/', label: 'Home', icon: HiHome },
  { href: '/subscriptions', label: 'Subscriptions', icon: HiCollection, auth: true },
]

const libraryItems = [
  { href: '/history', label: 'History', icon: HiClock, auth: true },
  { href: '/liked', label: 'Liked videos', icon: HiHeart, auth: true },
]

interface SidebarProps {
  isCollapsed: boolean
}

export const Sidebar: FC<SidebarProps> = ({ isCollapsed }) => {
  const pathname = usePathname()
  const { data: channels } = useMyChannels()

  return (
    <aside
      className={clsx('sidebar', {
        'sidebar--collapsed': isCollapsed,
      })}
    >
      <div className="sidebar__content">
        <nav className="sidebar__section">
          <div className="sidebar__nav">
            {mainNavItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <Link
                  href={item.href}
                  key={item.href}
                  className={clsx('sidebar__item', {
                    'sidebar__item--active': isActive,
                  })}
                >
                  <Icon className="sidebar__item-icon" />
                  <span className="sidebar__item-text">{item.label}</span>
                </Link>
              )
            })}
          </div>
        </nav>

        <nav className="sidebar__section">
          <h3 className="sidebar__section-title">Library</h3>

          <div className="sidebar__nav">
            {libraryItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <Link
                  href={item.href}
                  key={item.href}
                  className={clsx('sidebar__item', {
                    'sidebar__item--active': isActive,
                  })}
                >
                  <Icon className="sidebar__item-icon" />
                  <span className="sidebar__item-text">{item.label}</span>
                </Link>
              )
            })}
          </div>
        </nav>

        {channels.length > 0 && (
          <nav className="sidebar__section">
            <h3 className="sidebar__section-title">Subscriptions</h3>

            <div className="sidebar__nav">
              {channels.slice(0, 5).map((channel) => {
                const title = channel.owner.name || channel.handle
                const isActive = pathname === `/channel/${channel.handle}`

                return (
                  <Link
                    href={`/channel/${channel.handle}`}
                    key={channel.id}
                    className={clsx('sidebar__subscription', {
                      'sidebar__subscription--active': isActive,
                    })}
                  >
                    <Avatar src={channel.avatarPath} alt={title} size="xs" />

                    <span className="sidebar__subscription-name">{title}</span>
                  </Link>
                )
              })}
            </div>
          </nav>
        )}

        <nav className="sidebar__section">
          <div className="sidebar__nav">
            <Link
              href="/studio/settings"
              className={clsx('sidebar__item', {
                'sidebar__item--active': pathname === `/studio/settings`,
              })}
            >
              <HiCog className="sidebar__item-icon" />
              <span className="sidebar__item-text">Settings</span>
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  )
}
