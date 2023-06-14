import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import AllPatientPage from '../pages/AllPatientPage';
import AddPatientPage from '../pages/AddPatientPage';
import RedirectIfAuthenticated from '../components/RedirectIfAuthenticated';
import PatientPage from '../pages/PatientPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'login',
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: 'register',
    element: <RegisterPage />,
  },
  {
    path: 'allpatient',
    element: <AllPatientPage />,
  },
  {
    path: 'addpatient',
    element: <AddPatientPage />,
  },
  {
    path: 'patient/getpatientbyid/:hnId',
    element: <PatientPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
