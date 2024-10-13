import React from 'react'
import { Outlet } from 'react-router-dom'
import cx from 'classnames'

import { Layout, Main, Content } from 'cozy-ui/transpiled/react/Layout'
import Sprite from 'cozy-ui/transpiled/react/Icon/Sprite'
import useBreakpoints from 'cozy-ui/transpiled/react/providers/Breakpoints'
import BarTitle from 'cozy-ui/transpiled/react/BarTitle'
import { useClient } from 'cozy-client'
import { BarCenter, BarComponent } from 'cozy-bar'

import Sidebar from 'src/components/Sidebar'

const AppLayout = () => {
  const client = useClient()
  const { isMobile } = useBreakpoints()

  return (
    <Layout>
      <BarComponent />
      {isMobile && (
        <BarCenter>
          <BarTitle>{client.appMetadata.slug}</BarTitle>
        </BarCenter>
      )}
      <Sidebar />
      <Main>
        <Content
          className={cx({
            'u-mh-half u-mv-1': isMobile,
            'u-mh-2 u-mv-1': !isMobile
          })}
        >
          <Outlet />
        </Content>
      </Main>
      <Sprite />
    </Layout>
  )
}

export default AppLayout
