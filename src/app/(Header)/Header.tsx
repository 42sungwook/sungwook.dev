import HeaderCategory from './HeaderCategory'

function Header() {
  //todo: link 수정
  return (
    <div className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center cursor-pointer w-30 h-12">SUNGWOOK</div>
      <div className="flex">
        <HeaderCategory
          link="./"
          label="HOME"
        />
        <HeaderCategory
          link="./"
          label="ABOUT"
        />
        <HeaderCategory
          link="./"
          label="PROJECTS"
        />
        <HeaderCategory
          link="./"
          label="CONTACT"
        />
      </div>
    </div>
  )
}

export default Header
