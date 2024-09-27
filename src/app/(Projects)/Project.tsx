import { H2 } from '@/ui'
import Image from 'next/image'

function OasisWProject() {
  return (
    <>
      <div className="w-full relative aspect-[16/9]">
        <Image
          src="/oasisw.png"
          alt="oasisw-project"
          fill
          sizes="(max-width: 768px) 90vw, 50vw"
          priority
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
      <div className="w-full pt-16">
        <H2 className="mb-8">OasisW - (주)핏펀즈</H2>
        <p>
          웹 브라우저를 이용해 게임 서버 인스턴스를 생성해주고 게임 서버 기능을
          관리 및 운영할 수 있게 도와주는 클라우드 기반 개발도구입니다. 초기
          프로젝트 설정부터 배포까지 Next.JS로 개발하였습니다.
        </p>
      </div>
    </>
  )
}

function FtStatProject() {
  return (
    <>
      <div className="w-full relative aspect-[16/9]">
        <Image
          src="/42stat_w.png"
          alt="42stat-project"
          fill
          sizes="(max-width: 768px) 90vw, 50vw"
          priority
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
      <div className="w-full pt-16">
        <H2 className="mb-8">42STAT</H2>
        <p>
          42서울에서 진행한 프로젝트로, 42서울 교육생들의 통계를 보여주는 반응형
          대시보드 웹서비스입니다. React와 GraphQL을 사용했으며 42서울 교육생
          90% 이상이 사용하는 서비스로 DAU 100명 이상을 기록하고 있습니다.
        </p>
      </div>
    </>
  )
}

function FtGGProject() {
  return (
    <>
      <div className="w-full relative aspect-[16/9]">
        <Image
          src="/42gg.png"
          alt="42gg-project"
          fill
          sizes="(max-width: 768px) 90vw, 50vw"
          priority
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
      <div className="w-full pt-16">
        <H2 className="mb-8">42GG</H2>
        <p>
          42서울에서 진행한 프로젝트로, 42서울 교육생들을 위한 탁구 매칭 및 랭킹
          웹 서비스입니다. Next.JS의 page 기반 라우팅을 사용했으며 관리자
          페이지와 유저 페이지를 구분하여 개발했습니다.
        </p>
      </div>
    </>
  )
}

export { OasisWProject, FtStatProject, FtGGProject }
