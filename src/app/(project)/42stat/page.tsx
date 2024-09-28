import ProjectLayout from '@/app/(project)/ProjectLayout'
import { H1, H2 } from '@/ui'
import Image from 'next/image'

export default function FtStat() {
  return (
    <ProjectLayout>
      <div className="flex w-full text-title mb-12 gap-6">
        <H1 className="font-extrabold text-5xl">42STAT</H1>
        <p className="text-3xl flex items-center">(V.0.4.4)</p>
      </div>
      <div className="w-full relative aspect-[16/9]">
        <Image
          src="/42stat.svg"
          alt="42stat-project"
          fill
          sizes="90vw"
          priority
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
      <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div>
          <H2 className="mb-8">서비스 소개</H2>
          <p>
            42서울 교육생들의 통계를 보여주는 반응형 대시보드 웹서비스입니다.
          </p>
          <p>
            42서울 경진대회에서 대상을 받았으며 매일 100명 이상의 트래픽이
            발생합니다.
          </p>
        </div>
        <div>
          <H2 className="mb-8">작업 기간</H2>
          <p>2023. 08. - 2023. 10. 42서울 경진대회 준비</p>
          <p>2023. 11. - 2024. 04. 신규 서비스 개발</p>
          <p>2024. 05. - 진행중 유지 보수</p>
        </div>
        <div>
          <H2 className="mb-8">기술 스택</H2>
          <p>
            React, Apollo Client, Emotion(Styled Component), Apex Charts, Jotai
          </p>
        </div>
        <div>
          <H2 className="mb-8">팀 구성</H2>
          <p>FE 2, BE 2 (총 4명)</p>
          <p>담당: 프론트엔드 개발자(FE)</p>
        </div>
      </div>
      <div className="w-full flex flex-col flex-start mt-16">
        <H2 className="mb-8">역할</H2>
        <p>- 신규 서비스인 블랙홀 계산기 기능 추가</p>
        <p>&emsp;- 반응형 UI/UX 디자인 및 반영</p>
        <p>&emsp;- 다크 테마 추가</p>
        <p>&emsp;- Apex Charts 커스텀해서 사용</p>
        <br />
        <p>- 활동 내역 보기 컴포넌트 추가 (잔디 UI/UX)</p>
        <br />
        <p>- 사용자 피드백 반영</p>
        <p>&emsp;- 프로필 사진 UI 개선</p>
        <p>&emsp;- 필터 조건 추가</p>
        <p>&emsp;- 랭킹 차트 추가</p>
      </div>
    </ProjectLayout>
  )
}
