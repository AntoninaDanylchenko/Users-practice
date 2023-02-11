import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layour';
import HomePage from './pages/HomePage/HomePage';
import UsersPage from './pages/UsersPage/UsersPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        {/* <Route path="/add" elements={<AddPage />} /> */}
      </Route>
    </Routes>
  );
};
