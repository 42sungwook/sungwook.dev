import ProjectLayout from '@/app/(project)/ProjectLayout'
import Image from 'next/image'

export default function FtStat() {
  return (
    <ProjectLayout>
      <div className="flex w-full text-title mb-12 gap-6">
        <h1 className="font-extrabold text-5xl">42STAT</h1>
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
    </ProjectLayout>
  )
}
