import React from 'react';
import Footer from './Components/Footer';


function Layout({ children }) {
  return (
    <div className='relative '>
   
      {/* Render the content passed as children */}
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
