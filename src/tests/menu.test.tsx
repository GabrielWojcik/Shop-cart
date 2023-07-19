import { fireEvent, render, screen } from "@testing-library/react"
import MenuMobile from "../components/menu/menu"

describe('', () => {
    it('Menu Component', () => {
        render(<MenuMobile menuActive />)

        const button = screen.getByText('X')

        fireEvent.click(button)
    })
})