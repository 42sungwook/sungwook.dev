import ProjectLayout from '@/app/(project)/ProjectLayout'
import Image from 'next/image'

export default function FtGG() {
  return (
    <ProjectLayout>
      <div className="flex w-full text-title mb-12 gap-6">
        <h1 className="font-extrabold text-5xl">42GG</h1>
      </div>
      <div className="w-full relative aspect-[16/9]">
        <Image
          src="/42gg.svg"
          alt="42gg-project"
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
