/* eslint-disable no-console */
import React from 'react'

import Button from 'cozy-ui/transpiled/react/Buttons'
import Typography from 'cozy-ui/transpiled/react/Typography'
import IntentDialogOpener from 'cozy-ui-plus/dist/Intent/IntentDialogOpener'

export const Intents = () => {
  return (
    <div className="u-p-1">
      <div className="u-ml-1">
        <Typography variant="h3">Intents</Typography>
      </div>
      <IntentDialogOpener
        action="PICK"
        doctype="io.cozy.files"
        classes={{ paper: 'u-h-100' }}
        fullWidth
        maxWidth="md"
        iframeProps={{ spinnerProps: { middle: true } }}
        onComplete={res => console.log('onComplete', res)}
        onDismiss={() => console.log('onDismiss')}
      >
        <Button label="Launch intent PICK for doctype io.cozy.files" />
      </IntentDialogOpener>
    </div>
  )
}
