'use client'
// import { Cursor } from '@/components'
import { Contact, Copyright, Intro, Showcase } from '@/sections'
import dynamic from 'next/dynamic'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
})

export default function Home() {
  return (
    <main>
      {/* <Cursor /> */}
      <div className='App'>
        <AnimatedCursor
          innerSize={10}
          outerSize={80}
          innerScale={1}
          outerScale={1.6}
          innerStyle={{
            background: '#262626'
          }}
          outerStyle={{
            mixBlendMode: 'exclusion',
            background: '#EAEBEB',
          }}
        />

      </div>
      <Intro />
      <Showcase />
      <Contact />
      <Copyright />
    </main>
  )
}
