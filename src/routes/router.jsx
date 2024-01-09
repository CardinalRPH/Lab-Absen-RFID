import { Navigate, createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import HomePage from "../pages/HomePage";
import AssistantPage from "../pages/AssistantPage";
import CALASPage from "../pages/CALASPage";
import AssistantAttendancePage from "../pages/AssistantAttendancePage";
import CALASAttendancePage from "../pages/CALASAttendancePage";

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to='/home' replace />
    },
    {
        path: '/presensi',
        element: <Navigate to='/presensi/asisten' replace />
    },
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: 'home',
                element: <HomePage />
            },
            {
                path: 'asisten',
                element: <AssistantPage />
            },
            {
                path: 'calas',
                element: <CALASPage />
            },
            {
                path: 'presensi',
                children: [
                    {
                        path: 'asisten',
                        element: <AssistantAttendancePage />
                    },
                    {
                        path: 'calas',
                        element: <CALASAttendancePage />
                    }
                ]
            }
        ]
    }
])

export default AppRouter