import Image from 'next/image'

export const InitialShowcase: React.FC = () => {
  return (
    <section className='animation-panel w-screen min-h-screen h-full bg-gray-100 flex items-center justify-center'>
      <div className='flex flex-col gap-4 items-center'>
        <Image src='/images/logo/dark-logo.svg' alt='Logo escura da amrca Marolla' width={400} height={65} />
        <h1 className='font-semibold text-primary-600 uppercase text-[120px] tracking-widest font-roboto'>Destaques</h1>
        <p className='text-base font-gothic'>Demonstrações de projetos e trabalhos em destaque!</p>
      </div>
    </section>
  )
}
