// Elimina la importación no utilizada de React
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import CustomCursor from '../CustomCursor';
import Footer from '../Footer';
import Header from '../Header';

const Layout = ({ headerVariant }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header variant={headerVariant} />
      <Outlet />
      <CustomCursor />
      <Footer />
    </>
  );
};

Layout.propTypes = {
  headerVariant: PropTypes.string, // Puedes ajustar el tipo según tus necesidades
};

export default Layout;
