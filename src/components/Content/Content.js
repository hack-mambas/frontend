import React, { memo } from 'react'
import { Container, Box } from '@material-ui/core'

const Content = memo(({ children, title }) => {
  return (
    <Container>
      <Box display="flex" flexDirection="column">
        <Box>{title}</Box>
        <Box>{children}</Box>
      </Box>
    </Container>
  )
})

export default Content
