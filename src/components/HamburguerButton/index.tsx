'use client'

import { useCursor } from '@/contexts'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { tv } from 'tailwind-variants'

const hamburguerButtonStyles = tv({
  base: 'w-full min-h-screen h-full bg-primary-500 fixed left-0 transition-all duration-[800ms] z-10',
  variants: {
    isOpen: {
      true: 'left-0 top-0 shadow-lg shadow-current',
      false: 'left-full top-0'
    }
  },
  slots: {
    closedButton: 'flex w-9 h-6 flex-col justify-between group',
    closedLine: 'bg-white w-full h-0.5 group-hover:bg-slate-400 cursor-pointer',
    containerNav: 'max-w-screen-xl flex items-center justify-between h-20 mx-auto px-4',
    openedButton: 'flex w-9 h-6 flex-col justify-between group',
    openedFirstLine: 'bg-white w-full h-0.5 group-hover:bg-slate-400 rotate-45 mt-3 -ml-1',
    openedSecondLine: 'bg-white w-full h-0.5 group-hover:bg-slate-400 rotate-[135deg] mb-2.5 -ml-1'
  }
})

const { base, closedButton, closedLine, containerNav, openedButton, openedFirstLine, openedSecondLine } = hamburguerButtonStyles()

export const HamburguerButton: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const { setCursorVariant } = useCursor()

  return (
    <>
      <button onMouseLeave={() => setCursorVariant('default')} onMouseEnter={() => setCursorVariant('sm')} onClick={() => setMenuIsOpen(true)} className={closedButton()}>
        <div className={closedLine()} />
        <div className={closedLine()} />
        <div className={closedLine()} />
      </button>

      <section className={base({ isOpen: menuIsOpen })}>
        <nav>
          <div className={containerNav()}>
            <Link onMouseLeave={() => setCursorVariant('default')} onMouseEnter={() => setCursorVariant('sm')} href='#intro'>
              <Image style={{ cursor: 'pointer' }} src='/images/logo/white-logo.svg' alt='Logo marolla' width={120} height={16} />
            </Link>
            <button onMouseLeave={() => setCursorVariant('default')} onMouseEnter={() => setCursorVariant('sm')} onClick={() => setMenuIsOpen(false)} className={openedButton()}>
              <div className={openedFirstLine()} />
              <div className={openedSecondLine()} />
            </button>
          </div>
        </nav>
        
      </section>
    </>
  )
}
