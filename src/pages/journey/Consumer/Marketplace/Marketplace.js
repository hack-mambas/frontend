import React, { memo } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import { MarketplaceFilters } from './MarketplaceFilters'
import { MarketplaceList } from './MarketplaceList'

const useStyles = makeStyles((theme) => ({
  boxes: {
    marginTop: theme.spacing(2)
  }
}))

const Marketplace = memo(() => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.boxes}>
        <Typography variant="h6">O que você procura hoje?</Typography>
        <MarketplaceFilters />
      </Box>

      <Box className={classes.boxes}>
        <MarketplaceList />
      </Box>
    </>
  )
})

export default Marketplace
