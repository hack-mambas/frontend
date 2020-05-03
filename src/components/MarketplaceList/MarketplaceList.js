import React, { useCallback } from 'react'

import { useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import { MarketplaceListItem } from './MarketplaceListItem'

const useStyles = makeStyles((theme) => ({
  main: {
    paddingTop: '20px'
  },
  itens: {
    display: 'flex',
    flexDirection: 'row'
  }
}))

export const MarketplaceList = () => {
  const classes = useStyles()

  const history = useHistory()

  const sessions = [
    {
      sessionTitle: 'Destaques da Feira',
      items: [
        {
          id: '1',
          description: 'Cesta Diversificada',
          producer: 'Sitio Sapopema',
          value: 'R$18',
          image: 'https://source.unsplash.com/s0fuB1h3yPw',
          type: 'product'
        },
        {
          id: '2',
          description: 'Cesta de vegetais e legumes',
          producer: 'Morada dos Sonhos',
          value: 'R$35',
          image: 'https://source.unsplash.com/zeFy-oCUhV8',
          type: 'product'
        }
      ]
    },
    {
      sessionTitle: 'Entregam Hoje',
      items: [
        {
          id: '3',
          description: 'Sítio Aborígene',
          producer: 'Caxias',
          image: 'https://source.unsplash.com/XemjjFd_4qE',
          type: 'producer'
        },
        {
          id: '4',
          description: 'Sítio Aborígene',
          producer: 'Caxias',
          image: 'https://source.unsplash.com/XemjjFd_4qE',
          type: 'producer'
        }
      ]
    }
  ]

  const handleClickItem = useCallback(
    (id, route) => {
      history.push(`/journey/consumer/marketplace/${route}/${id}`)
    },
    [history]
  )

  return sessions.map((session, index) => {
    return (
      <Box key={index}>
        <Typography variant="h6" key={index} className={classes.main}>
          {session.sessionTitle}
        </Typography>

        <Box className={classes.itens}>
          {session.items.map((item, index) => (
            <MarketplaceListItem key={index} item={item} onClick={() => handleClickItem(item.id, item.type)} />
          ))}
        </Box>
      </Box>
    )
  })
}
