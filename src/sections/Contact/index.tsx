import { tv } from 'tailwind-variants'

const contact = tv({
  slots: {
    container: 'bg-primary-500 min-h-screen h-full w-full',
    content: 'container mx-auto',
    title: 'text-gray-300 uppercase font-roboto text-[40px] tracking-wide'
  }
})

const { container, content, title } = contact()

export const Contact: React.FC = () => {
  return (
    <section className={container()}>
      <div className={content()}>
        <h1 className={title()}>vamos conversar</h1>
      </div>
    </section>
  )
}
