import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

const Navbar: React.FC = () => {
  const location = useLocation()
  const [isDrawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setDrawerOpen(open)
  }

  const menuItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Talleres', path: '/talleres' },
    { name: 'Charlas', path: '/charlas' },
    { name: 'Contáctanos', path: '/contacto' }
  ]

  return (
    <div className="navbar flex justify-center bg-primary text-secondary fixed top-0 z-50 w-full">
      <div className="container flex justify-between items-center py-4 px-4 md:px-8">
        <div className="logo text-2xl font-bold">SantaLocuraProductions</div>
        <div className="md:hidden">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </div>

        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {menuItems.map(({ name, path }) => (
                <ListItem key={name} disablePadding>
                  <ListItemButton component={Link} to={path}>
                    <ListItemText primary={name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`text-lg font-bold ${
                location.pathname === path ? 'text-third' : 'text-secondary'
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
