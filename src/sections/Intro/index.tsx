import { HamburguerButton } from '@/components'
import Image from 'next/image'
import Link from 'next/link'

export const Intro: React.FC = () => {
  return (
    <>
      <section className='bg-dark-gray min-h-screen h-full'>
        <header className='border-b border-red-200'>
          <div className='max-w-screen-xl flex items-center justify-between h-20 mx-auto px-4'>
            <Link href='#intro'>
              <Image src='/images/logo/white-logo.svg' alt='Logo marolla' width={120} height={16} />
            </Link>
            <HamburguerButton />
          </div>
        </header>

        <div className='max-w-screen-xl mx-auto px-4 intro-height flex flex-col justify-center gap-24'>
          <div className='relative w-full h-52  '>
            <Image src='/images/logo/white-logo.svg' alt='Logo marolla' fill />
          </div>
          <h1 className='text-9xl text-coolGray-50 leading-tight'>Front-End & <br /> UI Designer</h1>
        </div>
        
      </section>
    </>
  )
}
