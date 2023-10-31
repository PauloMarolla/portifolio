'use client'

import { tv } from 'tailwind-variants'

const copyright = tv({
  slots: {
    footer: 'bg-gray-100 py-6 2',
    container: 'flex items-center justify-between gap-2 container mx-auto',
    text: 'text-primary-600 font-roboto text-base font-semibold',
    button: 'bg-primary-600 hover:bg-gray-900 transition-colors w-12 h-12 flex items-center justify-center rounded-sm',
  }
})

const { button, container, footer, text } = copyright()

export const Copyright: React.FC = () => {
  return (
    <footer className={footer()}>
      <div className={container()}>
        <p className={text()}>Design e desenvolvimento por Paulo Marolla. Copyright © 2023</p>
        <button onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} className={button()}>
          <svg width={20} viewBox='0 0 16 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M0 8.01433L1.98213 10L8 3.97135L14.0179 10L16 8.01433L8 0L0 8.01433Z' fill='#EAEBEB'/>
          </svg>
        </button>
      </div>
    </footer>
  )
}
