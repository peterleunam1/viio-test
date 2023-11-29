import { render } from '@testing-library/react'
import Container from './container.component'

describe('Container component', () => {
  test('Should render', () => {
    const text = 'This is a text'
    const { getByText } = render(<Container>{text}</Container>)

    expect(getByText(text)).toBeDefined()
  })
})
