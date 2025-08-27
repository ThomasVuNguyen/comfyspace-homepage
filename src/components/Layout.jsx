import { Intro, IntroFooter } from '@/components/Intro'
import { StarField } from '@/components/StarField'
import { ThemeToggle } from '@/components/ThemeToggle'
import brainComputerImage from '@/images/brain-computer.png'

function Timeline() {
  return (
    <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-lg lg:overflow-visible">
      {/* Subtle gradient divider line */}
      <div className="absolute top-0 left-[max(0px,calc(50%-18.125rem))] h-full w-1 lg:left-full lg:ml-1 xl:right-1 xl:left-auto xl:ml-0 bg-gradient-to-b from-white/20 via-white/10 to-transparent" />
    </div>
  )
}

function Glow() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-lg">
      {/* Brain-computer background image for left side */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40" style={{ backgroundImage: `url(${brainComputerImage.src})` }} />
      {/* Beautiful gradient background inspired by gradients_8.png */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-500 to-rose-400 opacity-60" />
      {/* Dark overlay to maintain text readability */}
      <div className="absolute inset-0 bg-gray-950/70" />
      {/* Subtle accent line */}
      <div className="absolute inset-x-0 right-0 bottom-0 h-px bg-white/20 mix-blend-overlay lg:top-0 lg:left-auto lg:h-auto lg:w-px" />
    </div>
  )
}

function FixedSidebar({ main, footer }) {
  return (
    <div className="relative flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0">
      <Glow />
      <div className="relative flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-lg lg:overflow-x-hidden lg:overflow-y-auto lg:pl-[max(4rem,calc(50%-38rem))]">
        <div className="mx-auto max-w-lg lg:mx-0 lg:flex lg:w-96 lg:max-w-none lg:flex-col lg:before:flex-1 lg:before:pt-6">
          <div className="pt-20 pb-16 sm:pt-32 sm:pb-20 lg:py-20">
            <div className="relative">
              {main}
            </div>
          </div>
          <div className="flex flex-1 items-end justify-center pb-4 lg:justify-start lg:pb-6">
            {footer}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Layout({ children }) {
  return (
    <>
      <FixedSidebar main={<Intro />} footer={<IntroFooter />} />
      <ThemeToggle />
      <div className="relative flex-auto">
        <Timeline />
        <main className="space-y-20 py-20 sm:space-y-32 sm:py-32">
          {children}
        </main>
      </div>
    </>
  )
}
