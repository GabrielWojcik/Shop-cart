import {render, screen } from '@testing-library/react'

test('loads and display greeting', async () => {
    render(<Fetch url="/sacola" />)

    await screen.findAllByRole('sacola')
})