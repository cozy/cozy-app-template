import React from 'react'
import { Outlet } from 'react-router-dom'

import { BarComponent, BarCenter } from 'cozy-bar'
import { useClient } from 'cozy-client'
import BarTitle from 'cozy-ui/transpiled/react/BarTitle'
import { Layout, Main, Content } from 'cozy-ui/transpiled/react/Layout'
import Typography from 'cozy-ui/transpiled/react/Typography'
import Alerter from 'cozy-ui/transpiled/react/deprecated/Alerter'
import useBreakpoints from 'cozy-ui/transpiled/react/providers/Breakpoints'
import { useI18n } from 'twake-i18n'

import Sidebar from '@/components/Sidebar'

const AppLayout = () => {
  const { t } = useI18n()
  const { isMobile } = useBreakpoints()
  const client = useClient()

  return (
    <Layout>
      <BarCenter>
        <BarTitle>App Template</BarTitle>
      </BarCenter>
      <BarComponent searchOptions={{ enabled: false }} />
      <Sidebar />
      <Main>
        <Content>
          {isMobile && (
            <BarCenter>
              <Typography variant="h5">{client.appMetadata.slug}</Typography>
            </BarCenter>
          )}
          <Outlet />
        </Content>
      </Main>
      <Alerter t={t} />
    </Layout>
  )
}

export default AppLayout
