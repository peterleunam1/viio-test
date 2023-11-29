import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Input from './input.component'
import { regexs } from 'constant'

describe('Input component', () => {
  const setup = () => {
    const mockOnChange = vitest.fn()
    const defaultProps = {
      name: 'test',
      placeholder: 'Enter text',
      type: 'text',
      regex: {
        pattern: regexs.TEXT.pattern,
        message: 'Invalid input'
      },
      onChange: mockOnChange
    }
    render(<Input {...defaultProps}>x</Input>)
    const inputElement = screen.getByPlaceholderText('Enter text')
    return { inputElement, mockOnChange }
  }

  test('renders Input component with default props', () => {
    const { inputElement } = setup()
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveAttribute('type', 'text')
  })

  test('calls onChange function when input value is valid', () => {
    const { inputElement, mockOnChange } = setup()
    fireEvent.change(inputElement, { target: { value: 'ValidInput' } })
    expect(mockOnChange).toHaveBeenCalled()
  })

  test('displays error message when input value is invalid', () => {
    const { inputElement } = setup()
    fireEvent.change(inputElement, { target: { value: `InvalidInput${9}` } })
    const errorMessage = screen.getByText('Invalid input')
    expect(errorMessage).toBeInTheDocument()
  })
})
