'use client'

import { InitialShowcase, ShowcaseItem } from '@/components'
import { ShowcaseItemProps } from '@/components/ShowcaseItem'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const items: ShowcaseItemProps[] = [
  {
    title: <>the <br /> last <br /> of us</>,
    imageSrc: '/images/logo/dark-logo.svg',
    type: 'tlou',
  },
  {
    title: <>poke <br /> dex</>,
    imageSrc: '/images/logo/dark-logo.svg',
    type: 'pokedex',
  },
  {
    title: <>noo <br /> ven</>,
    imageSrc: '/images/logo/dark-logo.svg',
    type: 'nooven',
  },
  {
    title: <>talk <br /> link</>,
    imageSrc: '/images/logo/dark-logo.svg',
    type: 'talklink',
  },
  {
    title: <>ma <br /> ro <br /> lla</>,
    imageSrc: '/images/logo/dark-logo.svg',
    type: 'marolla',
  },
]

export const Showcase: React.FC = () => {
  const component = useRef<HTMLDivElement>(null)
  const slider = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.animation-panel')
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => '+=' + slider.current?.offsetWidth,
          // markers: true
        }
      })
    }, component)
    return () => ctx.revert()

  }, [])
  
  return (
    <div ref={component}>
      <div ref={slider} style={{ width: '600vw' }} className='h-screen flex flex-wrap'>
        <InitialShowcase />
        {items.map((item, i) => {
          return <ShowcaseItem key={i} {...item} />
        })}
      </div>
    </div>
  )
}
