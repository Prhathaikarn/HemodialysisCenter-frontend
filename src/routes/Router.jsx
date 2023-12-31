import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import AllPatientPage from '../pages/AllPatientPage';
import AddPatientPage from '../pages/AddPatientPage';
import RedirectIfAuthenticated from '../components/RedirectIfAuthenticated';
import PatientPage from '../pages/PatientPage';
import ProtectRoute from '../components/ProtectRoute';
import Container from '../components/Container';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RedirectIfAuthenticated>
        <HomePage />
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: '/login',
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/patient/',
    element: (
      <ProtectRoute>
        <Container />
      </ProtectRoute>
    ),
    children: [
      {
        path: '/patient/getallpatient/',
        element: <AllPatientPage />,
      },
      {
        path: '/patient/addpatient/',
        element: <AddPatientPage />,
      },
      {
        path: '/patient/getpatientbyid/:hnId',
        element: <PatientPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
