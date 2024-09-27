'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import DarkLightToggleButton from './DarkLightToggleButton'

const HeaderCategoryMenu = dynamic(() => import('./HeaderCategoryMenu'), {
  ssr: false
})

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 bg-opacity-70 backdrop-blur-md z-50">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center cursor-pointer w-30 h-12">
          SUNGWOOK
        </div>
        <div className="flex gap-4">
          <DarkLightToggleButton />
          <HeaderCategoryMenu
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
