import { useCursor } from '@/contexts'
import Image from 'next/image'
import { tv } from 'tailwind-variants'

const initialShowcaseStyle = tv({
  slots: {
    container: 'animation-panel w-screen min-h-screen h-full bg-gray-100 flex items-center justify-center',
    content: 'flex flex-col gap-4 items-center px-6',
    title: 'text-[40px] sm:text-[80px] lg:text-[120px] font-semibold text-primary-600 uppercase tracking-widest font-roboto',
    description: 'text-2xl md:text-3xl font-gothic text-center',
  }
})

const { container, content, description, title } = initialShowcaseStyle()

export const InitialShowcase: React.FC = () => {

  const { setCursorVariant } = useCursor()

  return (
    <section className={container()}>
      <div className={content()}>
        <Image onMouseLeave={() => setCursorVariant('default')} onMouseEnter={() => setCursorVariant('md')} src='/images/logo/dark-logo.svg' alt='Logo escura da marca Marolla' width={400} height={65} />
        <h1 onMouseLeave={() => setCursorVariant('default')} onMouseEnter={() => setCursorVariant('lg')} className={title()}>Destaques</h1>
        <p className={description()}>Demonstrações de projetos e trabalhos em destaque!</p>
      </div>
    </section>
  )
}
