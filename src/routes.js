import { Navigate, useRoutes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PatientLoginForm from "./pages/Login"
import DashboardLayout from './Layout/Dashboard';

import LearnWeb3 from "./pages/Learn/LearnWeb3"
import LearnSolidity from "./pages/Learn/LearnSolidity"

export default function Router() {

    const routes = useRoutes([
        {
            path: '/', 
            element:<DashboardLayout />,
            children:[
                { path: '/', element: <HomePage /> },
                { path: '/login', element: <PatientLoginForm /> },
                { path: '/learnweb3', element: <LearnWeb3 /> },
                { path: '/learnsolidity', element: <LearnSolidity /> },
            ]
        },
        
        {
            path: '*',
            element: <Navigate to="/"  />
        }
    ]);

    return routes;
}