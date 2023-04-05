import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import ProtectedRoute from './utils/ProtectedRoute';
import { UserContextProvider } from './context/UserContextProvider';
import ThemeContextProvider from './context/ThemeContextProvider';


import Board from './pages/board/index';
import Login from './pages/login/index';
import Signup from './pages/signup/index';
import ResetPassword from './pages/resetPassword/index';
import Process from './pages/processes/index';
import NotFound from './pages/notFound/index'

function App() {

  return (
    <ThemeContextProvider >
      <UserContextProvider>
        <Router>
          <Routes>
            <Route element={<><AuthLayout><Outlet /></AuthLayout></>}>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/reset-password" element={<ResetPassword />} />
            </Route>
            <Route element={<><MainLayout><Outlet /></MainLayout></>}>
              <Route path="/board" element={<ProtectedRoute><Board /></ProtectedRoute>} />
              <Route path="/board/:id" element={<ProtectedRoute><Process /></ProtectedRoute>} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </UserContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
