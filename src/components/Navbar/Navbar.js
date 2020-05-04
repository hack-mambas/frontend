import React, { memo, useState, useCallback } from 'react'

import { useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import { AppBar, Box, Menu, MenuItem } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Logotipo from '.././../assets/relfi-logotipo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  logotipo: {
    height: '2rem'
  }
}))

const Navbar = memo(({ onClickMenu }) => {
  const classes = useStyles()

  const history = useHistory()

  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClickOption = useCallback(() => {
    handleClose()
    history.push('/journey/producer/my-profile')
  }, [history])

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={() => onClickMenu(true)}
        >
          <MenuIcon />
        </IconButton>
        <Box width={1} display="flex" flexDirection="column" alignContent='center' alignItems='center'>
          <img src={Logotipo} alt="Relfi" className={classes.logotipo} />
        </Box>
        <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleClick}>
          <AccountCircle />
        </IconButton>
        <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={() => handleClickOption()}>Perfil</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
})

export default Navbar
