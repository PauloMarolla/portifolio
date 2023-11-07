'use client'

import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import { tv } from 'tailwind-variants'

const SkillsStyles = tv({
  slots: {
    container: 'min-h-screen h-full w-full bg-primary-500 flex flex-col justify-center items-center',
    content: 'container mx-auto px-6',
    title: 'text-[100px] font-gothic uppercase text-gray-100 tracking-wider pb-12',
  }
})

const fourItemsSettings: Settings = {
  dots: false,
  infinite: true,
  speed: 5000,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplaySpeed: 0,
  autoplay: true,
  pauseOnHover: true,
  cssEase: 'linear'
}

const fiveItemsSettings: Settings = {
  dots: false,
  infinite: true,
  speed: 5000,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplaySpeed: 0,
  autoplay: true,
  pauseOnHover: true,
  cssEase: 'linear'
}

const thirdLineSettings: Settings = {
  dots: false,
  infinite: true,
  speed: 5000,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplaySpeed: 0,
  autoplay: true,
  pauseOnHover: true,
  cssEase: 'linear'
}

const tecnologies = {
  first: ['tailwind', 'hook form', 'styled components', 'material ui', 'typescript'],
  second: ['graphql', 'nextjs', 'nodejs', 'storybook', 'cypress', 'jest'],
  third: ['api rest', 'reactjs', 'javascript', 'framer motion', 'vitejs'],
  fourth: ['figma', 'grid', 'adobe xd', 'cores', 'tipografia', 'wireframe'],
  fifith: ['apollo client', 'clean code', 'aws', 'sentry', 'eslint', 'animation'],
}

const { container, content, title  } = SkillsStyles()

export const Skills: React.FC = () => {
  return (
    <section className={container()}>
      <div className={content()}>
        <h1 className={title()}>tecnologia</h1>
      </div>

      <div className='w-full bg-primary-600 py-8'>
        <Slider {...fourItemsSettings}>
          {tecnologies.first.map((item) => (
            <div className='text-[60px] whitespace-nowrap text-gray-200 uppercase font-gothic tracking-wider' key={item}>
              {item}
            </div>
          ))}
        </Slider>
      </div>
      <div className='w-full bg-primary-500 py-8'>
        <Slider {...fiveItemsSettings}>
          {tecnologies.second.map((item) => (
            <div className='text-[60px] whitespace-nowrap text-gray-100 uppercase font-gothic tracking-wider' key={item}>
              {item}
            </div>
          ))}
        </Slider>
      </div>
      <div className='w-full bg-primary-600 py-8'>
        <Slider {...fourItemsSettings}>
          {tecnologies.third.map((item) => (
            <div className='text-[60px] whitespace-nowrap text-gray-200 uppercase font-gothic tracking-wider' key={item}>
              {item}
            </div>
          ))}
        </Slider>
      </div>
      <div className='w-full bg-primary-500 py-8'>
        <Slider {...fiveItemsSettings}>
          {tecnologies.fifith.map((item) => (
            <div className='text-[60px] whitespace-nowrap text-gray-100 uppercase font-gothic tracking-wider' key={item}>
              {item}
            </div>
          ))}
        </Slider>
      </div>
      <div className='w-full bg-primary-600 py-8'>
        <Slider {...fourItemsSettings}>
          {tecnologies.fourth.map((item) => (
            <div className='text-[60px] whitespace-nowrap text-gray-200 uppercase font-gothic tracking-wider' key={item}>
              {item}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
