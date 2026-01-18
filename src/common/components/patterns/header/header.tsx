'use client'

import { HiBell, HiMenu, HiPlus, HiSearch } from 'react-icons/hi'

import { FaPlay } from 'react-icons/fa'
import { Avatar } from '@/common/components/ui/avatar/avatar'
import { FC, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'

interface HeaderProps {
  onMenuClick: () => void
}

export const Header: FC<HeaderProps> = ({ onMenuClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleDropdownCLick = () => {
    setIsDropdownOpen((prev) => !prev)
  }

  const handleDropdownClose = () => {
    setIsDropdownOpen(false)
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node))
        handleDropdownClose()
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  return (
    <header className={'header'}>
      <div className="header__container">
        <div className="header__left">
          <button className={'header__menu-btn'} onClick={onMenuClick}>
            <HiMenu />
          </button>

          <Link className={'header__logo'} href={'/'}>
            <FaPlay className="header__logo-icon" />
            <span>TubeCourse</span>
          </Link>
        </div>

        <div className="header__center">
          <form className={'search-field'}>
            <HiSearch className="search-field__icon" />
            <input placeholder={'Search videos, channels...'} className={'search-field__input'} />
          </form>
        </div>

        <div className="header__right">
          <Link href={'/studio'} className={'header__action'}>
            <HiPlus />
          </Link>

          <button className={'header__action'}>
            <HiBell />
          </button>

          <div className="dropdown" ref={dropdownRef}>
            <button className="header__profile" onClick={handleDropdownCLick}>
              <Avatar size={'sm'} src={'https://cdn-icons-png.flaticon.com/512/6858/6858504.png'} />
            </button>

            <div
              className={clsx('dropdown__content', {
                'dropdown__content--open': isDropdownOpen,
              })}
            >
              <div className="dropdown__header">
                <Avatar
                  size={'lg'}
                  src={'https://cdn-icons-png.flaticon.com/512/6858/6858504.png'}
                  alt={'User'}
                />

                <div>
                  <div>User name</div>
                  <div>@username</div>
                </div>
              </div>

              <div className="dropdown-body">
                <Link
                  href={'/channel/username'}
                  className={'dropdown__item'}
                  onClick={handleDropdownClose}
                >
                  Your channel
                </Link>

                <Link
                  href={'/studio/dashboard'}
                  className={'dropdown__item'}
                  onClick={handleDropdownClose}
                >
                  Studio
                </Link>

                <Link
                  href={'/studio/settings'}
                  className={'dropdown__item'}
                  onClick={handleDropdownClose}
                >
                  Settings
                </Link>

                <div className="dropdown__divider" />

                <button
                  className={'dropdown__item dropdown__item--danger'}
                  onClick={handleDropdownClose}
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
