import React from 'react'

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

  const sessions = [
    {
      sessionTitle: 'Destaques da Feira',
      items: [
        {
          description: 'Cesta Diversificada',
          producer: 'Sitio Sapopema',
          value: 'R$18',
          image: 'https://source.unsplash.com/s0fuB1h3yPw',
          type: 'product'
        },
        {
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
          description: 'Sítio Aborígene',
          producer: 'Caxias',
          image: 'https://source.unsplash.com/XemjjFd_4qE',
          type: 'producer'
        },
        {
          description: 'Sítio Aborígene',
          producer: 'Caxias',
          image: 'https://source.unsplash.com/XemjjFd_4qE',
          type: 'producer'
        }
      ]
    }
  ]

  return (
    <Box>
      {sessions.map((session, index) => {
        return (
          <>
            <Typography variant="h6" key={index} className={classes.main}>
              {session.sessionTitle}
            </Typography>

            <Box className={classes.itens}>
              {session.items.map((item, index) => (
                <MarketplaceListItem item={item} />
              ))}
            </Box>
          </>
        )
      })}
    </Box>
  )
}
