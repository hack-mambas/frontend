import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  image: {
    width: '150px',
    height: '150px',
    borderRadius: '10px',
    marginBottom: '10px',
    boxShadow: '-6px 9px 30px 0px rgba(0,0,0,0.17)'
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: theme.spacing(6)
  },
  title: {
    fontWeight: theme.typography.fontWeightBold
  }
}))

export const MarketplaceListItem = ({ item, onClick }) => {
  const classes = useStyles()

  return (
    <Box className={classes.item} onClick={onClick}>
      <img className={classes.image} alt={item.description} src={item.image} />
      <Typography className={classes.title} variant="caption" noWrap>
        {item.description}
      </Typography>
      <Typography variant="caption" noWrap>
        {item.producer}
      </Typography>
      <Typography variant="caption" noWrap>
        {item.value}
      </Typography>
    </Box>
  )
}
