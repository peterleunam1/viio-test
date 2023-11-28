import { HomeHeader, SkeletonProducts } from 'components/molecules'
import { SliderPerView } from 'components/molecules/slider-per-view'
import { ListOfProducts, Slider } from 'components/organisms'
import { AppLayout } from 'components/templates'
import { banners, categoriesTag, roomIdeas } from 'constant'
import { useProducts } from 'hooks'

export default function Home () {
  const { products, loading, error } = useProducts()
  const recommendedProducts = products.slice(0, 8)
  return (
    <AppLayout>
      <HomeHeader />
      <Slider images={banners} />
      <SliderPerView type='image'values={roomIdeas} title='Room Ideas'/>
      <SliderPerView type='text'values={categoriesTag} title='Shop By Room'/>
      {loading && <SkeletonProducts />}
     <ListOfProducts products={recommendedProducts} label='Recommended for you'/>
      {error && <p>Error</p>}
    </AppLayout>
  )
}
