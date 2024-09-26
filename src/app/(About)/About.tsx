import { H1, H2 } from '@/ui'
import Skills from './Skills'

function About() {
  return (
    <section id="ABOUT">
      <div className="flex flex-col justify-center w-full py-20 px-10 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="mb-20 text-center">
          <H1>ABOUT ME</H1>
        </div>
        <div className="grid grid-cols-2 gap-40">
          <div>
            <H2 className="mb-8">저는 이런 사람이에요!</H2>
            <p className="break-words overflow-wrap-anywhere">
              소개글 .... .......... ... .......... .................
              ........... ................................................
              ........................... .......... ............ .... .
              .............. ............. ............... ............ .
              ............. .............................................
              ................ ........ .......... ............. ...............
              ..
            </p>
          </div>
          <div>
            <H2 className="mb-8">기술 스택</H2>
            <div className="flex flex-wrap">
              <Skills>HTML</Skills>
              <Skills>CSS</Skills>
              <Skills>JavaScript</Skills>
              <Skills>React</Skills>
              <Skills>Next.JS</Skills>
              <Skills>C</Skills>
              <Skills>C++</Skills>
              <Skills>Docker</Skills>
              <Skills>Tailwind CSS</Skills>
              <Skills>Emotion</Skills>
              <Skills>Zustand</Skills>
              <Skills>Tanstack Query</Skills>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
