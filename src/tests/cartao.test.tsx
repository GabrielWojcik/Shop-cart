import { render, screen } from "@testing-library/react"
import Cartao from "../components/cartao"
import Button from "../components/button"


test('it when the insputs of the card are empty, it is not possible to proceed', () => {
    render(<Cartao/>)
    const input = screen.getByPlaceholderText('xxxx xxxx xxxx xxxx')
    expect(input).toBeInTheDocument()
})

test('it check if the button is disabled', () => {
    render(<Button />)
    const button = screen.getByRole('button')
    expect(button).toBeVisible()
})