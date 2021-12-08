import { Outlet } from 'react-router-dom';

import { Footer } from '../Footer';
import { Navigation } from '../Navigation';

export const Layout = () => (
  <div>
    <Navigation />

    <div className="container w-full mx-auto my-10 md:max-w-3xl">
      <Outlet />
    </div>

    <Footer />
  </div>
);
