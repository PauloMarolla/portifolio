import { HamburguerButton, AnimatedText } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import { useCursor } from '@/contexts'
import { tv } from 'tailwind-variants'

const introStyles = tv({
  slots: {
    container: 'bg-primary-500 min-h-screen h-full',
    header: 'border-b border-gray-300',
    contentHeader: 'max-w-screen-xl flex items-center justify-between h-20 mx-auto px-4',
    contentIntro: 'max-w-screen-xl mx-auto px-4 intro-height flex flex-col justify-center gap-24',
    imageContainer: 'relative w-full h-52',
    title: 'font-gothic max-w-fit uppercase text-[40px] sm:text-[70px] lg:text-[100px] text-gray-100 leading-tight tracking-wider',
  }
})

const { container, contentHeader, header, contentIntro, imageContainer, title } = introStyles()

export const Intro: React.FC = () => {

  const { setCursorVariant } = useCursor()

  return (
    <>
      <section  className={container()}>
        <header className={header()}>
          <div className={contentHeader()}>
            <Link onMouseLeave={() => setCursorVariant('default')} onMouseEnter={() => setCursorVariant('sm')} href='#intro'>
              <Image style={{ cursor: 'pointer' }} src='/images/logo/white-logo.svg' alt='Logo marolla' width={120} height={16} />
            </Link>
            <HamburguerButton />
          </div>
        </header>

        <div className={contentIntro()}>
          <div onMouseLeave={() => setCursorVariant('default')} onMouseEnter={() => setCursorVariant('lg')} className={imageContainer()}>
            <Image src='/images/logo/white-logo.svg' alt='Logo marolla' fill />
          </div>
          <h1>
            <AnimatedText
              onMouseLeave={() => setCursorVariant('default')}
              onMouseEnter={() => setCursorVariant('md')}
              text={['Front-End &', 'UI Designer']}
              className={title()}
              animation={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
              }}
            />
          </h1>
        </div>
        
      </section>
    </>
  )
}
