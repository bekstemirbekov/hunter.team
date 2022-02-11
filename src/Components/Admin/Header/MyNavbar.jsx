import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useSearchParams } from 'react-router-dom';
import { productContext } from '../../../Contexts/ProductsContext';
import { Button } from '@mui/material';
import Sidebar from '../../Home/Sidebar/Sidebar';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function MyNavbar() {
  const { cartLength, getProducts, useAuth, logout} = React.useContext(productContext)
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchVal, setSearchVal] = React.useState(searchParams.get('q') ? searchParams.get('q') : '')

  const currentUser = useAuth()

  async function handleLogout() {
    try {
      await logout()
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    setSearchParams({
      'q' : searchVal,
      '_limit' : 3,
      '_page' : 1
    })
  }, [searchVal])

  const handleValue =(e) => {
    const search = new URLSearchParams(window.location.search)
    search.set('q', e.target.value)
    setSearchVal(e.target.value)
    setSearchParams({
      'q': searchVal,
      '_limit': 3,
      '_page' : 1
    })
    getProducts()
  }


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to='/login'>
      <MenuItem style={{backgroundColor: 'green', color: 'white'}} onClick={handleMenuClose}>Войти</MenuItem>
      </Link>
      <Link to='/register'>
      <MenuItem style={{backgroundColor: 'green', color: 'white'}} onClick={handleMenuClose}>Зарегистрироваться</MenuItem>
      </Link>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

        <Link to='/cart' style={{color: 'white'}}>
            <IconButton color='inherit'>
                <Badge badgeContent={cartLength} color="secondary">
                    <ShoppingCartIcon/>
                </Badge>
            </IconButton>
        </Link>
     <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
   

  return (
    <Box fullWidth sx={{ flexGrow: 1 }}>
      <AppBar position="static" fullWidth style={{ background: 'transparent', boxShadow: 'none', backgroundAttachment: 'fixed', backgroundImage: 'url(http://autodealer39.ru/wp-content/uploads/2021/04/P90413073_highRes_the-first-ever-bmw-i-1024x683.jpg)'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon /> 
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Evening store
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchVal}
              onChange={handleValue}
            />
          </Search>
          <Link to='/add'>
              <Button style={{backgroundColor: 'alpha', color: 'white'}}>Добавить</Button>
            </Link>
          <Box sx={{ flexGrow: 1 }} />
          {currentUser?.email === 'admin1@gmail.com' ? (
            <Link to='/add'>
              <Button style={{backgroundColor: 'alpha', color: 'white'}}>Добавить</Button>
            </Link>
          ): null}
          {currentUser?.email}
          {
            currentUser ? (
              <Button variant='success' disabled={!currentUser} onClick={handleLogout} >Выйти</Button>
            ) : null
          }
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Link to='/cart' style={{color: 'white'}}>
              <IconButton>
                <Badge badgeContent={cartLength} color='secondary'>
                  <ShoppingCartIcon sx={{color: 'white'}}/>
                </Badge>
              </IconButton>

          </Link>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}