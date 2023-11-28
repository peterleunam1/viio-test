import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from './button.component'

describe('Button component', () => {
  test('renders correctly with default props', () => {
    render(<Button onClick={() => {}} variant="default">Click me</Button>)

    const buttonElement = screen.getByText('Click me')

    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).not.toHaveClass('button--loading')
    expect(buttonElement).toHaveAttribute('type', 'button')
    expect(buttonElement).not.toBeDisabled()
  })

  test('renders correctly with loading state', () => {
    render(<Button onClick={() => {}} variant="default" isLoading>Loading...</Button>)

    const buttonElement = screen.getByText('Loading ...')

    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('button--loading')
    expect(buttonElement).toHaveAttribute('type', 'button')
  })

  test('calls the onClick function when clicked', () => {
    const mockOnClick = vitest.fn()
    render(<Button onClick={mockOnClick} variant="default">Click me</Button>)

    const buttonElement = screen.getByText('Click me')
    fireEvent.click(buttonElement)

    expect(mockOnClick).toHaveBeenCalled()
  })

  test('handles different button types', () => {
    render(<Button onClick={() => {}} variant="default" type="submit">Submit</Button>)

    const buttonElement = screen.getByText('Submit')

    expect(buttonElement).toHaveAttribute('type', 'submit')
  })

  test('disables the button when disabled prop is true', () => {
    render(<Button onClick={() => {}} variant="default" disabled>Click me</Button>)

    const buttonElement = screen.getByText('Click me')

    expect(buttonElement).toBeDisabled()
  })
})
