import {render, screen } from '@testing-library/react'

it('loads and display greeting', async () => {
    render(<Fetch url="/sacola" />)

    await screen.findAllByRole('sacola')
})