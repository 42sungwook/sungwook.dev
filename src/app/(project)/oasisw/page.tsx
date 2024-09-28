import ProjectLayout from '@/app/(project)/ProjectLayout'
import Image from 'next/image'

export default function Oasisw() {
  return (
    <ProjectLayout>
      <div className="flex w-full text-title mb-12 gap-6">
        <div className="flex flex-col justify-center">
          <h1 className="font-extrabold text-5xl">OasisW GFaaS</h1>
          <p className="text-3xl">Game Frontend as a Service</p>
        </div>
        <p className="flex justify-center items-center text-3xl">(주)핏펀즈</p>
      </div>
      <div className="w-full relative aspect-[16/9]">
        <Image
          src="/oasisw.svg"
          alt="oasisw-project"
          fill
          sizes="90vw"
          priority
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
    </ProjectLayout>
  )
}
