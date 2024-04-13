import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import logo1 from '../assets/logo1.png';
import '../styles/appbar.css';
import Button from '../components/Button';
const pages = ['Ana Sayfa', 'Hakkımızda', 'Hizmetlerimiz', 'Ürünler', 'İletişim',];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  }; 
  const handleClick = () => {
    console.log('The link was clicked.');
  };
  return (
   <div className='app-bar'>
     <AppBar position="static" sx={{ backgroundColor: 'rgb(6, 34, 165)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <img src={logo1} alt="logo" style={{ width: 60, padding: 10 }} />
          <div className='appbar_logo'>
            <div className='logo_yazi'>
              <span className='guctek_yazi'>GÜÇTEK</span>
              <span className='makina_yazi'>MAKİNA</span>
            </div></div>

          <div className="box-container">
           {pages.map((page, index) => (



              <Button key={index} onClick={handleClick} text={page}></Button>
            ))}
          
</div>
         </Toolbar>
      </Container>

    </AppBar>

   </div>
  );
}
export default ResponsiveAppBar;