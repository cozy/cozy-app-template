import React from 'react'
import { NavLink as RouterLink } from 'react-router-dom'

import CategoriesIcon from 'cozy-ui/transpiled/react/Icons/Categories'
import Nav, {
  NavItem,
  NavIcon,
  NavText,
  genNavLink
} from 'cozy-ui/transpiled/react/Nav'
import UISidebar from 'cozy-ui/transpiled/react/Sidebar'
import { useI18n } from 'cozy-ui/transpiled/react/providers/I18n'

const NavLink = genNavLink(RouterLink)

const Sidebar = () => {
  const { t } = useI18n()

  return (
    <UISidebar>
      <Nav>
        <NavItem>
          <NavLink to="/welcome">
            <NavIcon icon={CategoriesIcon} />
            <NavText>{t('nav.welcome')}</NavText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contacts">
            <NavIcon icon={CategoriesIcon} />
            <NavText>{t('nav.contacts')}</NavText>
          </NavLink>
        </NavItem>
      </Nav>
    </UISidebar>
  )
}

export default Sidebar
