'use client'

import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import { tv } from 'tailwind-variants'

const SkillsStyles = tv({
  slots: {
    container: 'min-h-screen h-full w-full bg-primary-500 flex flex-col justify-center items-center py-16 md:py-0',
    content: 'container mx-auto px-6',
    title: 'text-[50px] md:text-[70px] sm:text-[100px] font-gothic uppercase text-gray-100 tracking-wider pb-24 pt-8',
    itemTitleDark: 'text-[40px] md:text-[50px] whitespace-nowrap text-gray-200 uppercase font-gothic tracking-wider',
    itemTitleLight: 'text-[40px] md:text-[50px] whitespace-nowrap text-gray-100 uppercase font-gothic tracking-wider',
  }
})

const threeItemsSettings: Settings = {
  dots: false,
  infinite: true,
  speed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplaySpeed: 0,
  autoplay: true,
  pauseOnHover: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
}

const fourItemsSettings: Settings = {
  dots: false,
  infinite: true,
  speed: 4000,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplaySpeed: 0,
  autoplay: true,
  pauseOnHover: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
}

const fiveItemsSettings: Settings = {
  dots: false,
  infinite: true,
  speed: 6000,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplaySpeed: 0,
  autoplay: true,
  pauseOnHover: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
}

const tecnologies = {
  first: ['tailwind', 'hook form', 'material ui', 'typescript'],
  second: ['graphql', 'nextjs', 'nodejs', 'cypress', 'jest'],
  third: ['api rest', 'reactjs', 'javascript', 's3', 'vitejs'],
  fourth: ['figma', 'grid', 'adobe xd', 'cores', 'tipografia', 'wireframe'],
  fifith: ['apollo', 'aws', 'sentry', 'eslint', 'animation'],
  sixth: ['xss', 'csrf', 'copilot', 'ia', 'prismic'],
  eighth: ['storybook', 'adonisjs', 'prismic cms', 'sonarqube'],
}

const { container, content, title, itemTitleDark, itemTitleLight } = SkillsStyles()

export const Skills: React.FC = () => {
  return (
    <section className={container()}>
      <div className={content()}>
        <h1 className={title()}>habilidades</h1>
      </div>

      <div className='w-full bg-primary-600 py-8'>
        <Slider {...threeItemsSettings}>
          {tecnologies.first.map((item) => (
            <div className={itemTitleDark()} key={item}>
              {item}
            </div>
          ))}
        </Slider>
      </div>
      <div className='w-full bg-primary-500 py-8'>
        <Slider {...fiveItemsSettings}>
          {tecnologies.second.map((item) => (
            <div className={itemTitleLight()} key={item}>
              {item}
            </div>
          ))}
        </Slider>
      </div>
      <div className='w-full bg-primary-600 py-8'>
        <Slider {...fourItemsSettings}>
          {tecnologies.third.map((item) => (
            <div className={itemTitleDark()} key={item}>
              {item}
            </div>
          ))}
        </Slider>
      </div>
      <div className='w-full bg-primary-500 py-8'>
        <Slider {...fiveItemsSettings}>
          {tecnologies.fifith.map((item) => (
            <div className={itemTitleLight()} key={item}>
              {item}
            </div>
          ))}
        </Slider>
      </div>
      <div className='w-full bg-primary-600 py-8'>
        <Slider {...fourItemsSettings}>
          {tecnologies.fourth.map((item) => (
            <div className={itemTitleDark()} key={item}>
              {item}
            </div>
          ))}
        </Slider>
      </div>
      <div className='w-full bg-primary-500 py-8'>
        <Slider {...fourItemsSettings}>
          {tecnologies.sixth.map((item) => (
            <div className={itemTitleLight()} key={item}>
              {item}
            </div>
          ))}
        </Slider>
      </div>
      <div className='w-full bg-primary-600 py-8'>
        <Slider {...threeItemsSettings}>
          {tecnologies.eighth.map((item) => (
            <div className={itemTitleDark()} key={item}>
              {item}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
