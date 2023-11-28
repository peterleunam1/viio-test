import { XMarkIcon } from '@heroicons/react/24/outline'
import { type ChildrenModel } from 'models'
import './modal.styled.scss'
interface ModalProps extends ChildrenModel {
  status: boolean
  onClose: () => void
}
export default function Modal ({ children, status, onClose }: ModalProps) {
  const handleClose = () => {
    onClose()
  }
  return (
    <>
      {status && (
        <div className="overlay">
          <div className="containerModal">
            <button className="containerModal__close" onClick={handleClose}>
                <XMarkIcon className='containerModal__icon'/>
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  )
}
