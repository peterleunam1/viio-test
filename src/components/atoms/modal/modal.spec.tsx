import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Modal from './modal.component'

describe('Modal component', () => {
  const mockOnClose = vitest.fn()

  const setup = () => {
    const defaultProps = {
      status: true,
      onClose: mockOnClose
    }
    render(<Modal {...defaultProps}>Modal Content</Modal>)
  }

  test('renders Modal component with default props', () => {
    setup()
    const modalElement = screen.getByText('Modal Content')
    expect(modalElement).toBeInTheDocument()
  })

  test('calls onClose function when close button is clicked', () => {
    setup()
    const closeButton = screen.getByRole('button')
    fireEvent.click(closeButton)
    expect(mockOnClose).toHaveBeenCalled()
  })

  test('does not render Modal when status is false', () => {
    render(
      <Modal status={false} onClose={mockOnClose}>
        Modal Content
      </Modal>
    )

    const modalElement = screen.queryByText('Modal Content')
    expect(modalElement).not.toBeInTheDocument()
  })
})
