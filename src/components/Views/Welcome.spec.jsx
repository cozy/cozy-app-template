import { render, screen } from '@testing-library/react'
import React from 'react'
import AppLike from 'test/AppLike'

import { Welcome } from '@/components/Views/Welcome'

describe('Welcome', () => {
  it('should render the welcome title', () => {
    render(
      <AppLike>
        <Welcome />
      </AppLike>
    )

    expect(screen.queryByText('Bienvenue')).toBeInTheDocument()
  })
})
