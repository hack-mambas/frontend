import React, { memo, useCallback } from 'react'

import { useHistory } from 'react-router-dom'

import { List, Drawer, ListItem, ListItemText, ListItemIcon, Icon } from '@material-ui/core'

const Sidebar = memo(({ open, onOpen, routes }) => {
  const history = useHistory()

  const handleRoute = useCallback(
    (route) => {
      history.push(`${route}`)
      onOpen(false)
    },
    [history, onOpen]
  )

  return (
    <Drawer anchor="left" open={open} onClose={() => onOpen(!open)}>
      <List>
        {routes &&
          routes.map((route) => (
            <ListItem button key={route.name} onClick={() => handleRoute(route.path)}>
              <ListItemIcon color='primary'>
                <Icon>{route.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={route.name} />
            </ListItem>
          ))}
      </List>
    </Drawer>
  )
})

export default Sidebar
