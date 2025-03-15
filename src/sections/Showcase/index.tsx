'use client'

import { InitialShowcase, ShowcaseItem, ModalShowcase } from '@/components'
import { ProjectTypes, ShowcaseItemProps } from '@/components/ShowcaseItem'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useMediaQuery } from 'react-responsive'

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
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [selectProjectType, setSelectProjectType] = useState<ProjectTypes>('marolla')
  const isSm = useMediaQuery({ minWidth: 840 })
  const component = useRef<HTMLDivElement>(null)
  const slider = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if(isSm) {
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
    }

  }, [isSm])
  
  return (
    <>
      {!isSm ? (
        <>
          <InitialShowcase />
          {items.map((item, i) => {
            return <ShowcaseItem setSelectProjectType={setSelectProjectType} setIsVisible={setModalIsVisible} key={i} item={item} />
          })}
        </>
      ) : (
        <>
          <section id='showcase' style={{ overflowX: 'hidden' }} ref={component}>
            <div ref={slider} style={{ width: '600vw' }} className='h-screen flex flex-wrap'>
              <InitialShowcase />
              {items.map((item, i) => {
                return <ShowcaseItem setSelectProjectType={setSelectProjectType} setIsVisible={setModalIsVisible} key={i} item={item} />
              })}
            </div>
          </section>
        </>
      )}
      <ModalShowcase selectProjectType={selectProjectType} isVisible={modalIsVisible} setIsVisible={setModalIsVisible} />
    </>
  )
}
