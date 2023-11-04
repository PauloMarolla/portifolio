'use client'

import { motion } from 'framer-motion'
import { Contact, Copyright, Intro, Showcase } from '@/sections'
import { useCursor } from '@/contexts'

export default function Home() {
  const { cursorVariant, variants, cursorRef } = useCursor()

  return (
    <>
      {/* <h1 onMouseEnter={() => setCursorVariant('hover')} onMouseLeave={() => setCursorVariant('default')} className='title'>Hello World</h1> */}
      <main ref={cursorRef} >
        <motion.div
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 28
          }}
          className='cursor'
          variants={variants}
          animate={cursorVariant}
        />
        <Intro />
        <Showcase />
        <Contact />
        <Copyright />
      </main>
    </>
  )
}
