import HeaderCategory from './HeaderCategory'
import { CATEGORIES } from '@/constants/category'

function Header() {
  return (
    <header className="fixed w-full bg-white bg-opacity-70 backdrop-blur-md">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center cursor-pointer w-30 h-12">
          SUNGWOOK
        </div>
        <nav className="flex">
          {CATEGORIES.map(({ link, label }) => (
            <HeaderCategory
              key={label}
              link={link}
              label={label}
            />
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
