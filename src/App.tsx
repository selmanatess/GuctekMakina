import React from 'react';

import './App.css';
import ResponsiveAppBar from './components/Appbar';
import Footer from './components/Footer';
import SlideShow from './components/SlideShow';
import Products from './components/Products';
import Mark from './components/Mark';
import { Drawer } from '@mui/material';
import DrawerMenu from './components/Drawer';

function App() {
  return (<> 
 
  <ResponsiveAppBar />
 
   <SlideShow />
<Products/>
<Mark/>
<Footer />
    </>

  )
}

export default App;
