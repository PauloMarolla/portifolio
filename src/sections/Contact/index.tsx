'use client'

import { useCursor } from '@/contexts'
import Link from 'next/link'
import { tv } from 'tailwind-variants'
import { AnimatedText } from '@/components'

const contactStyles = tv({
  slots: {
    container: 'bg-primary-500 min-h-screen h-full w-full',
    content: 'container mx-auto items-center min-h-screen h-full px-6 grid',
    socialContainer: 'md:col-span-4 pt-6 md:pt-0 xl:col-span-10',
    gridContainer: 'grid grid-cols-1 md:grid-cols-6 xl:grid-cols-12 items-center',
    title: 'md:col-span-2 xl:col-span-2 text-gray-100 uppercase font-gothic text-6xl md:text-[90px] md:tracking-[-1rem] md:[writing-mode:vertical-lr] md:[text-orientation:upright]',
    ul: '',
    subtitle: 'text-3xl sm:text-[40px] text-gray-300 uppercase font-roboto tracking-wide pb-6',
    li: 'w-full max-w-full',
    a: 'text-2xl sm:text-3xl flex w-full items-center justify-between uppercase text-gray-300 border-gray-300 border-b-[2px] pt-6 pb-4 font-roboto tracking-widest transition-all hover:text-gray-100 hover:border-gray-100'
  }
})

const links = [
  {
    title: 'linkedin',
    url: 'https://www.linkedin.com/in/paulomarolla/'
  },
  {
    title: 'instagram',
    url: 'https://www.instagram.com/paulomarolla/'
  },
  {
    title: 'github',
    url: 'https://github.com/paulomarolla'
  },
  {
    title: 'dribbble',
    url: 'https://dribbble.com/PauloMarolla'
  },
  {
    title: 'whatsapp',
    url: 'https://wa.me/+5519996489155'
  },
  {
    title: 'e-mail',
    url: 'mailto:paulo.ricardo.marolla@hotmail.com'
  },
]

const { container, content, title, subtitle, li, ul, socialContainer, a, gridContainer } = contactStyles()

export const Contact: React.FC = () => {
  const { setCursorVariant } = useCursor()

  if (typeof window !== 'undefined') {
    window.onmessage = function(e) {
      if (e.data == 'teste paulo marolla') {
        // alert('It works!')
        const element = document.getElementById('contact')
        window.scroll({
          top: (element?.clientTop || 0) + window.scrollY,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <>
      <section id='contact' className={container()}>
        <div className={content()}>
          <div className={gridContainer()}>
            <h1 className={title()}>contato</h1>
            <div className={socialContainer()}>
              <h1 className={subtitle()}>vamos conversar</h1>
              <ul className={ul()}>
                {links.map((link) => {
                  return (
                    <li onMouseEnter={() => setCursorVariant('md')} onMouseLeave={() => setCursorVariant('default')} className={li()} key={link.title}>
                      <Link className={a()} target='_blank' href={link.url}>
                        <AnimatedText
                          cursor='pointer'
                          onMouseLeave={() => setCursorVariant('default')}
                          onMouseEnter={() => setCursorVariant('md')}
                          text={[link.title]}
                          // className={title()}
                          animation={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
                          }}
                        />
                        <svg style={{ cursor: 'pointer' }} width='36' height='39' viewBox='0 0 36 39' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <g style={{ cursor: 'pointer' }} clipPath='url(#clip0_36_292)'>
                            <path style={{ cursor: 'pointer' }} d='M25.5 11.375L10.5 27.625' stroke='#989898' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                            <path style={{ cursor: 'pointer' }} d='M12 11.375H25.5V26' stroke='#989898' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
                          </g>
                          <defs style={{ cursor: 'pointer' }}>
                            <clipPath id='clip0_36_292'>
                              <rect width='36' height='39' fill='white'/>
                            </clipPath>
                          </defs>
                        </svg>

                      </Link>
                    </li>
                  )
                })}
         
              </ul>
            </div>
          </div>
        </div>
      </section>

      <iframe 
        style={{ minHeight: '900px', width: '900px' }} 
        src='https://alpha--desperta-landing.netlify.app/simulador-economia?lp_target=teste' id='calculator' className='calculator'>
      </iframe>
      <button>Teste</button>

      <div style={{ minHeight: '200vh' }}>
      </div>
      <section id='teste'>
    teste
      </section>
    </>
  )
}
