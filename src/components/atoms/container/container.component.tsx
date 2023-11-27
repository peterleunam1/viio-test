import { type ChildrenModel } from 'models'
import './container.styled.scss'

export default function Container ({ children }: ChildrenModel) {
  return <section className="general-container">{children}</section>
}
