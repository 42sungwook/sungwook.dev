import HeaderCategory from './HeaderCategory'

function Header() {
  return (
    <div className="fixed w-full">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center cursor-pointer w-30 h-12">
          SUNGWOOK
        </div>
        <div className="flex">
          <HeaderCategory
            link="./"
            label="HOME"
          />
          <HeaderCategory
            link="./#ABOUT"
            label="ABOUT"
          />
          <HeaderCategory
            link="./#PROJECTS"
            label="PROJECTS"
          />
          <HeaderCategory
            link="./#CONTACT"
            label="CONTACT"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
