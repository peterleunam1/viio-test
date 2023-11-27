import { NavBar } from 'components/molecules'
import { type ChildrenModel } from 'models'
import './app-layout.styled.scss'

export default function AppLayout ({ children }: ChildrenModel) {
  return (
    <main className='app-container'>
      <NavBar />
      <div className='app-container__content'>
        {children}
      </div>
    </main>
  )
}
