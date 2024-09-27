'use client'

import { useEffect, useState } from 'react'

function DarkLightToggleButton() {
  const isDark =
    document.cookie.split('; ').find((row) => row.startsWith('mode=')) ===
    'mode=true'
  const [mode, setMode] = useState(isDark)

  useEffect(() => {
    if (mode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    document.cookie = `mode=${mode}; path=/; max-age=${
      30 * 24 * 60 * 60
    }; SameSite=Lax`
  }, [mode])

  const toggleMode = () => {
    setMode(!mode)
  }

  return (
    <button
      onClick={toggleMode}
      className="px-4 py-4 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
    >
      {mode ? '라이트 모드' : '다크 모드'}
    </button>
  )
}

export default DarkLightToggleButton
