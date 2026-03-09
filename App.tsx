import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import Dashboard  from "./src/components/Dashboard";
import { ThemeProvider } from "@utils/ThemeContext";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import "./index.css";
import { RestruantList } from "@components/RestruantList";
import Error from "@components/Error";
import { Header } from "@components/Header";
import Footer from "@components/Footer";
import Contact  from "@components/Contact";
import RestruantMenu from "@components/RestruantMenu";
import UserClass from "@components/UserClass";
import ErrorBoundary from "@components/ErrorBoundary";
const Grocery = lazy(()=> import("@components/Grocery"));

// create client
const queryClient = new QueryClient();
const App: React.FC = ()=>{
    return (
        <>
        <Header />
        <Outlet/>
        <Footer/>
        </>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
        {
            path: "/",
        element: <Dashboard/>,
        errorElement: <Error/>
        },
        {
        path: "/res",
        element: <RestruantList/>,
        errorElement: <Error/>
         },
         {
        path: "/contact",
        element: <Contact/>,
        errorElement: <Error/>
         },
         {
        path: "/grocery",
        element: <Suspense fallback="Loading..."><Grocery/></Suspense>,
        errorElement: <Error/>
         },
         {
        path: "/user",
        element: <UserClass/>,
        errorElement: <Error/>
         },
         {
            path: "/res/:resId",
            element: <RestruantMenu/>,
            errorElement: <Error/>
         }
        ],
        errorElement: <Error/>
    },
    
]);
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    <ErrorBoundary>
    <ThemeProvider>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={appRouter} />
        </QueryClientProvider>
    </ThemeProvider>
    </ErrorBoundary>
);