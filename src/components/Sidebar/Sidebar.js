import React, { memo, useCallback } from 'react'

import { useHistory } from 'react-router-dom'

import { List, Drawer, ListItem, ListItemText } from '@material-ui/core'

const Sidebar = memo(({ open, onOpen, routes }) => {
  const history = useHistory()

  const handleRoute = useCallback(
    (route) => {
      history.push(`${route}`)
    },
    [history]
  )

  return (
    <Drawer anchor="left" open={open} onClose={() => onOpen(!open)}>
      <List>
        {routes &&
          routes.map((route) => (
            <ListItem button key={route.name} onClick={() => handleRoute(route.path)}>
              <ListItemText primary={route.name} />
            </ListItem>
          ))}
      </List>
    </Drawer>
  )
})

export default Sidebar
