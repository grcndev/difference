import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import CartoGrid from './CartoGrid.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function Layout() {
  const { pathname } = useLocation();

  // Cada página nova começa do topo
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <>
      <CartoGrid />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
