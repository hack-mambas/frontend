import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Icon from '@material-ui/core/Icon'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    marginBottom: theme.spacing(2),

    '& img': {
      width: '185px',
      height: '145px',
      borderRadius: '10px'
    }
  },
  title: {
    fontWeight: theme.typography.fontWeightBold
  },
  boxInfos: {
    marginLeft: theme.spacing(2)
  },
  badges: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  text: {
    display: 'flex',
    justifyContent: 'center'
  }
}))

export const VerticalList = ({ items, onClick }) => {
  const classes = useStyles()

  return items.map((item, index) => (
    <Box key={index} className={classes.main} onClick={() => onClick(item.id)}>
      <Box>
        <img alt={item.description} src={item.image} />
      </Box>

      <Box className={classes.boxInfos}>
        <Box>
          <Typography variant="subtitle2" className={classes.title}>
            {item.description}
          </Typography>
          <Typography variant="subtitle2">{item.location}</Typography>
          <Typography variant="subtitle2">{item.city}</Typography>
        </Box>

        <Box className={classes.badges}>
          <Typography variant="subtitle2" className={classes.text}>
            <Icon color="secondary">emoji_events</Icon> Menores Preços
          </Typography>
          <Typography variant="subtitle2" className={classes.text}>
            <Icon color="primary">two_wheeler</Icon> Entrega hoje
          </Typography>
          <Box></Box>
        </Box>
      </Box>
    </Box>
  ))
}
