import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'

const StyledButton = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.main
  }
}))(Button)

export const MambaButton = ({ ...props }) => {
  return <StyledButton {...props} />
}
