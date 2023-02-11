import Appbar from 'components/Appbar/Appbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Appbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
