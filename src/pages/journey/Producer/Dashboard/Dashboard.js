import React, { memo, useCallback } from 'react'

import { useHistory } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { makeStyles } from '@material-ui/core/styles'

import { Container, Box, Typography, Grid, CardActionArea, Card, CardContent } from '@material-ui/core'

import Icon from '@material-ui/core/Icon'

import { routesProducer } from '../../../../constants/routes'

const useStyles = makeStyles((theme) => ({
  cardAtalhos: {
    height: 100,
    maxWidth: 200
  }
}))

const mockIndicadoresPedidosEntregues = {
  series: [
    {
      name: 'Total',
      data: [0, 5, 9, 14, 15, 36]
    },
    {
      name: 'Entregues',
      data: [0, 4, 7, 14, 10, 25]
    }
  ],
  options: {
    chart: {
      width: '100%',
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: ['Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    }
  }
}

const mockIndicadoresPedidosCancelados = {
  series: [
    {
      name: 'Total',
      data: [0, 5, 9, 14, 15, 36]
    },
    {
      name: 'Cancelados',
      data: [0, 1, 2, 14, 5, 9]
    }
  ],
  options: {
    chart: {
      width: '100%',
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: ['Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    }
  }
}

const Dashboard = memo(() => {
  const classes = useStyles()

  const history = useHistory()

  const handleRoute = useCallback(
    (route) => {
      history.push(`${route}`)
    },
    [history]
  )

  return (
    <Container>
      <Box display="flex" flexDirection="column" my={2}>
        <Box my={1}>
          <Box my={1}>
            <Typography>ATALHOS</Typography>
          </Box>
          <Box my={1}>
            <Grid container spacing={2}>
              {routesProducer &&
                routesProducer.map((route, index) => (
                  <Grid item xs={6} sm={4} md={3} lg={2} xl={1} key={index}>
                    <Card className={classes.cardAtalhos}>
                      <CardActionArea className={classes.cardAtalhos} onClick={() => handleRoute(route.path)}>
                        <Box display="flex" alignItems="center" textAlign="center" flexDirection="column" my={2}>
                          <Icon color="primary">{route.icon}</Icon>
                          <Typography>{route.name}</Typography>
                        </Box>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Box>
        <Box>
          <Box my={1}>
            <Typography>INDICADORES</Typography>
          </Box>
          <Box my={1}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Card className={classes.card}>
                  <CardContent>
                    <Box display="flex" alignItems="center" textAlign="center" flexDirection="column" my={2} width={1}>
                      <Typography>Pedidos entregues</Typography>
                      <Box width={1}>
                        <Chart
                          options={mockIndicadoresPedidosEntregues.options}
                          series={mockIndicadoresPedidosEntregues.series}
                          type="area"
                        />
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card className={classes.card}>
                  <CardContent>
                    <Box
                      width="100%"
                      display="flex"
                      alignItems="center"
                      textAlign="center"
                      flexDirection="column"
                      my={2}
                    >
                      <Typography>Pedidos cancelados</Typography>
                      <Box width={1}>
                        <Chart
                          options={mockIndicadoresPedidosCancelados.options}
                          series={mockIndicadoresPedidosCancelados.series}
                          type="line"
                        />
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Container>
  )
})

export default Dashboard
