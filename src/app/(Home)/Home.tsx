import Link from 'next/link'

function Home() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div>
        <h1 className="text-6xl">안녕하세요, 김성욱입니다</h1>
        <div className="flex flex-col mt-10 text-center">
          <p>
            우연히 접한 42서울에서 다양한 사람들과 개발하면서 개발의 재미를
            깨달았습니다
          </p>
          <p>주로 프론트엔드 개발을 하고 있으며 꾸준히 학습을 하고 있습니다</p>
        </div>
        <div className="mt-8 justify-center items-center flex">
          <button className="bg-blue-500 text-white px-16 py-4 rounded-sm shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1">
            <Link href="./#PROJECTS">
              <p>프로젝트 보기</p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
