import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { CardCategory, Container } from 'components/atoms'
import './slider-per-view.styled.scss'

interface SliderPerViewProps {
  type: 'text' | 'image'
  values: string[]
  title: string
}

export default function SliderPerView ({ type, values, title }: SliderPerViewProps) {
  const breakpointsTexts = {
    320: {
      slidesPerView: 2.24
    },
    850: {
      slidesPerView: 5.24
    }
  }

  const breakpointsImages = {
    320: {
      slidesPerView: 1.4
    },
    1000: {
      slidesPerView: 3.3,
      spaceBetween: 10
    }
  }

  return (
    <Container>
      <strong>{title}</strong>
      <Swiper
        freeMode={true}
        pagination={{
          clickable: true
        }}
        breakpoints={type === 'text' ? breakpointsTexts : breakpointsImages }
        modules={[FreeMode]}
        className="slider-per-view"
      >
        {type === 'text'
          ? values.map((value, index) => (
              <SwiperSlide key={index}>
                <CardCategory text={value} />
              </SwiperSlide>
          ))
          : values.map((value, index) => (
              <SwiperSlide key={index}>
                <img src={value} alt={`slide-${index}`} className='slider-per-view__img' />
              </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  )
}
