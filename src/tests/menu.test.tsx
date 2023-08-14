import { NavLink } from "react-router-dom"
import MenuMain from "../components/navbar/index"
import { fireEvent, render, screen } from "@testing-library/react"
import nav from "../hooks/router"

const mockNavigation = jest.fn()
const mockNavLink = jest.fn()
const mockRouterNav = jest.fn()

jest.mock("react-router-dom", () => {
    return {
        useNavigate: () => mockNavigation
    }
})

jest.mock('react-router-dom', () => {
    return {
        NavLink: () => mockNavLink
    }
})

jest.mock('../hooks/router', () => {
    return {
        useRouterNavBar: () => mockRouterNav
    }
})

describe('', () => {
    it('Test router dom in navbar component', () => {
        render(<MenuMain /> )
        fireEvent.click(screen.getByText(/sacola/i))
        expect(mockRouterNav).toHaveBeenCalledTimes(1)
        expect(mockNavigation).toHaveBeenCalledTimes(1)
    })
})