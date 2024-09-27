import { Button } from '@/ui'
import Image from 'next/image'
import Link from 'next/link'

function Home() {
  return (
    <div className="flex items-center justify-center w-full h-[90vh] bg-background-light dark:bg-background-dark">
      <div className="flex flex-col items-center px-8">
        <span className="flex flex-col text-4xl gap-4 lg:text-6xl lg:flex-row font-bold ">
          <p>안녕하세요, </p>
          <p>"성욱" 입니다</p>
        </span>
        <div className="flex flex-col mt-10 text-center">
          <p>
            우연히 접한 42서울에서 다양한 사람들과 개발하면서 개발의 재미를
            깨달았습니다
          </p>
          <p>주로 프론트엔드 개발을 하고 있으며 꾸준히 학습을 하고 있습니다</p>
        </div>
        <div className="mt-8 justify-center items-center flex">
          <Button link="./#PROJECTS">프로젝트 보기</Button>
        </div>
      </div>
      <Link
        href="./#ABOUT"
        className="absolute bottom-[10%] inline-block"
      >
        <Image
          className="animate-bounce-top"
          src="/arrow_down.svg"
          alt="arrow_down"
          width={50}
          height={50}
        />
      </Link>
    </div>
  )
}

export default Home
