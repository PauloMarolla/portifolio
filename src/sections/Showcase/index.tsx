'use client'

import { InitialShowcase, ShowcaseItem } from '@/components'
import { ShowcaseItemProps } from '@/components/ShowcaseItem'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const items: ShowcaseItemProps[] = [
  {
    originalTitle: 'the last of us',
    title: `the\nlast\nof us`,
    imageSrc: '/images/showcase/tlou.webp',
    type: 'tlou',
    animatedText: ['the', 'last', 'of us'],
  },
  {
    originalTitle: 'pokedex',
    title: `poke\ndex`,
    imageSrc: '/images/showcase/pokedex.webp',
    type: 'pokedex',
    animatedText: ['poke', 'dex'],
  },
  {
    originalTitle: 'nooven',
    title: `noo\nven`,
    imageSrc: '/images/showcase/nooven.webp',
    type: 'nooven',
    animatedText: ['noo', 'ven'],
  },
  {
    originalTitle: 'talklink',
    title: `talk\nlink`,
    imageSrc: '/images/showcase/talklink.webp',
    type: 'talklink',
    animatedText: ['talk', 'link'],
  },
  {
    originalTitle: 'marolla',
    title: `ma\nro\nlla`,
    imageSrc: '/images/showcase/marolla.webp',
    type: 'marolla',
    animatedText: ['ma', 'ro', 'lla'],
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
    <section id='showcase' style={{ overflowX: 'hidden' }} ref={component}>
      <div ref={slider} style={{ width: '600vw' }} className='h-screen flex flex-wrap'>
        <InitialShowcase />
        {items.map((item, i) => {
          return <ShowcaseItem key={i} {...item} />
        })}
      </div>
    </section>
  )
}
