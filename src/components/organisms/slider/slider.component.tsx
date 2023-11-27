import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Container } from 'components/atoms'
import './slider.styled.scss'

interface SliderProps {
  images: string[]
}

export default function Slider ({ images }: SliderProps) {
  return (
    <Container>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="slider"
        autoplay
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`${index}-slide`} className='slider__img'/>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}
