import React, { memo } from 'react'

import {
  Container,
  Grid,
  Icon,
  CardActionArea,
  Box,
  Typography,
  Card,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from '@material-ui/core'

const achievements = [
  {
    name: 'Perfil completo',
    description: 'É necessário completar todos os dados do perfil para ganhar este premio',
    icon: 'emoji_events',
    done: true
  },
  {
    name: 'Primeira venda',
    description: 'É necessário finalizar uma venda para ganhar este premio',
    icon: 'emoji_events',
    done: true
  },
  {
    name: 'Primeira venda',
    description: 'É necessário finalizar uma venda para ganhar este premio',
    icon: 'emoji_events',
    done: false
  }
]

const Achievements = memo(() => {
  return (
    <Container>
      <Box my={2}>
        <Grid container spacing={2}>
          {achievements &&
            achievements.map((achievement, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Card>
                  <CardActionArea>
                    <Box display="flex" alignItems="center" textAlign="center" flexDirection="column" my={2}>
                      <Icon color={achievement.done ? 'secondary' : ''}>{achievement.icon}</Icon>
                      <Typography>
                        <Box display="flex" alignItems="center">
                          {achievement.name} {achievement.done && <Icon color="primary">check</Icon>}
                        </Box>
                      </Typography>
                    </Box>
                  </CardActionArea>
                  {!achievement.done && (
                    <ExpansionPanel>
                      <ExpansionPanelSummary
                        expandIcon={<Icon>expand_more</Icon>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>Saiba como conseguir esta conquista!</Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Typography>{achievement.description}</Typography>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  )}
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Container>
  )
})

export default Achievements
