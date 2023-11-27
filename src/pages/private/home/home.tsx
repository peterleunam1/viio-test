import { HomeHeader } from 'components/molecules'
import { SliderPerView } from 'components/molecules/slider-per-view'
import { ListOfProducts, Slider } from 'components/organisms'
import { AppLayout } from 'components/templates'
import { useProducts } from 'hooks'

const texts = ['Living Room', 'Bedroom', 'Bathroom', 'Kitchen', 'Dining Room', 'Office', 'Outdoor']
const images = Array.from({ length: 7 }, () => {
  const number = Math.floor(Math.random() * 100)
  return `https://picsum.photos/id/${number}/200/300`
})
const banners = ['https://images.pexels.com/photos/8106773/pexels-photo-8106773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/9588211/pexels-photo-9588211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/3286817/pexels-photo-3286817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
]

export default function Home () {
  const { products, loading, error } = useProducts()
  const recommendedProducts = products.slice(0, 8)
  return (
    <AppLayout>
      <HomeHeader />
      <Slider images={banners} />
      <SliderPerView type='image'values={images} title='Room Ideas'/>
      <SliderPerView type='text'values={texts} title='Shop By Room'/>
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
     <ListOfProducts products={recommendedProducts} label='Recommended for you'/>
    </AppLayout>
  )
}
