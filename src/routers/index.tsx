import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import MyPage from "@/pages/MyPage";
import LoginPage from "@/pages/LoginPage";
import InvoicesPage from "@/pages/InvoicesPage";
import HometaxPage from "@/pages/HometaxPage";
import RequestsPage from "@/pages/RequestsPage";
import ApprovalsPage from "@/pages/ApprovalsPage";
import EmployeesPage from "@/pages/EmployeesPage";
import ListsPage from "@/pages/ListsPage";
import CertificatesPage from "@/pages/CertificatesPage";

export const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "invoices",
        element: <InvoicesPage />,
      },
      {
        path: "hometax",
        element: <HometaxPage />,
      },
      {
        path: "requests",
        element: <RequestsPage />,
      },
      {
        path: "approvals",
        element: <ApprovalsPage />,
      },
      {
        path: "employees",
        element: <EmployeesPage />,
      },
      {
        path: "lists",
        element: <ListsPage />,
      },
      {
        path: "certificates",
        element: <CertificatesPage />,
      },
      { path: "my", element: <MyPage /> },
    ],
  },
]);
