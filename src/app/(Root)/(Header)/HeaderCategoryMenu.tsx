'use client'

import { useMemo } from 'react'
import { useDeviceType } from '@/hooks/device'
import HeaderCategoryItem from './HeaderCategoryItem'
import { CATEGORIES } from '@/constants/category'
import Image from 'next/image'

function HeaderCategoryMenu({
  isMenuOpen,
  toggleMenu
}: {
  isMenuOpen: boolean
  toggleMenu: () => void
}) {
  const device = useDeviceType()

  const categories = useMemo(
    () =>
      CATEGORIES.map(({ link, label }) => (
        <div
          key={label}
          className="p-4"
        >
          <HeaderCategoryItem
            link={link}
            label={label}
            onClick={toggleMenu}
          />
        </div>
      )),
    [toggleMenu]
  )

  if (device !== 'mobile') {
    return <nav className="flex">{categories}</nav>
  }

  return (
    <>
      <div
        className="flex items-center cursor-pointer w-30 h-12"
        onClick={toggleMenu}
      >
        <Image
          src="/hamburger.svg"
          alt="menu"
          width={24}
          height={24}
        />
      </div>
      <nav
        className={`
          absolute top-24 left-0 right-0 bg-white dark:bg-gray-900 backdrop-blur-md
          ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
          overflow-hidden transition-all duration-300 ease-in-out
        `}
      >
        {categories}
      </nav>
    </>
  )
}

export default HeaderCategoryMenu
