import React, { useCallback } from 'react'

import { useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import GridList from '@material-ui/core/GridList'

import { HorizontalListItem } from './HorizontalListItem'

const useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: '20px'
  },
  itens: {
    display: 'flex',
    flexDirection: 'row'
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)'
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  }
}))

export const HorizontalList = ({ items }) => {
  const classes = useStyles()

  const history = useHistory()

  const handleClickItem = useCallback(
    (id) => {
      history.push(`/journey/consumer/marketplace/product/${id}`)
    },
    [history]
  )

  return (
    <Box>
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          {items.map((item, index) => (
            <HorizontalListItem key={index} item={item} onClick={() => handleClickItem(item.id, item.type)} />
          ))}
        </GridList>
      </div>
    </Box>
  )
}
