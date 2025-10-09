import React from 'react'

import { useQuery } from 'cozy-client'
import Icon from 'cozy-ui/transpiled/react/Icon'
import Right from 'cozy-ui/transpiled/react/Icons/Right'
import SpinnerIcon from 'cozy-ui/transpiled/react/Icons/Spinner'
import List from 'cozy-ui/transpiled/react/List'
import ListItem from 'cozy-ui/transpiled/react/ListItem'
import ListItemIcon from 'cozy-ui/transpiled/react/ListItemIcon'
import ListItemText from 'cozy-ui/transpiled/react/ListItemText'
import ListSubheader from 'cozy-ui/transpiled/react/ListSubheader'
import Typography from 'cozy-ui/transpiled/react/Typography'

import { buildContactsQuery } from '@/queries/queries'

export const Contacts = () => {
  const contactQuery = buildContactsQuery()

  const { fetchStatus, data } = useQuery(
    contactQuery.definition,
    contactQuery.options
  )

  if (fetchStatus !== 'loaded') {
    return (
      <div className="u-p-1">
        <Icon icon={SpinnerIcon} spin />
      </div>
    )
  }

  return (
    <div className="u-p-1">
      <div className="u-ml-1">
        <Typography variant="h3">Contacts</Typography>
      </div>
      <List
        className="u-m-1"
        subheader={<ListSubheader>Section 1</ListSubheader>}
      >
        {data.map(contact => (
          <ListItem key={contact._id} button>
            <ListItemText primary={contact.fullname} />
            <ListItemIcon>
              <Icon icon={Right} />
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </div>
  )
}
