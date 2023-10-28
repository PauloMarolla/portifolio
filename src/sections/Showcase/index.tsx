'use client'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

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
      <div ref={slider} style={{ width: '400vw' }} className='h-screen flex flex-wrap'>
        <div className='animation-panel w-screen h-screen text-right bg-blue-100'>One</div>
        <div className='animation-panel w-screen h-screen bg-red-300'>TWO</div>
        <div className='animation-panel w-screen h-screen bg-red-600'>THREE</div>
        <div className='animation-panel w-screen h-screen bg-red-900'>Four</div>
      </div>
    </div>
  )
}
