'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { tv } from 'tailwind-variants'

const sidebar = tv({
  base: 'w-full min-h-screen h-full bg-primary-500 fixed left-0 transition-all duration-[800ms] z-10',
  variants: {
    isOpen: {
      true: 'left-0 top-0 shadow-lg shadow-current',
      false: 'left-full top-0'
    }
  }
})

export const HamburguerButton: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setMenuIsOpen(true)} className='flex w-9 h-6 flex-col justify-between group'>
        <div className='bg-white w-full h-0.5 group-hover:bg-slate-400' />
        <div className='bg-white w-full h-0.5 group-hover:bg-slate-400' />
        <div className='bg-white w-full h-0.5 group-hover:bg-slate-400' />
      </button>

      <section className={sidebar({ isOpen: menuIsOpen })}>
        <header>
          <div className='max-w-screen-xl flex items-center justify-between h-20 mx-auto px-4'>
            <Link href='#intro'>
              <Image src='/images/logo/white-logo.svg' alt='Logo marolla' width={120} height={16} />
            </Link>
            <button onClick={() => setMenuIsOpen(false)} className='flex w-9 h-6 flex-col justify-between group'>
              <div className='bg-white w-full h-0.5 group-hover:bg-slate-400 rotate-45 mt-3 -ml-1' />
              <div className='bg-white w-full h-0.5 group-hover:bg-slate-400 rotate-[135deg] mb-2.5 -ml-1' />
            </button>
          </div>
        </header>
        
      </section>
    </>
  )
}
