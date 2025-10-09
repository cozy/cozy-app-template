import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from 'cozy-ui/transpiled/react/Buttons'
import Typography from 'cozy-ui/transpiled/react/Typography'

export const Welcome = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate('/contacts')
  }

  return (
    <div className="u-p-1">
      <div className="u-ml-1">
        <Typography variant="h3">Bienvenue</Typography>
        <Button label="Voir les contacts" onClick={onClick}></Button>
      </div>
    </div>
  )
}
