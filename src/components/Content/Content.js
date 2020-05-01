import React, { memo } from 'react'
import { Container, Paper, Box } from '@material-ui/core'

const Content = memo(({ children, title }) => {
  return (
    <Container>
      <Paper m={2}>
        <Box display="flex" flexDirection="column">
          <Box>{title}</Box>
          <Box>{children}</Box>
        </Box>
      </Paper>
    </Container>
  )
})

export default Content
