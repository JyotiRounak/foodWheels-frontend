import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@utils/ThemeContext";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import "./index.css";
import Error from "@components/Error";
import  Header  from "@components/Header";
import Footer from "@components/Footer";
import UserClass from "@components/UserClass";
import ErrorBoundary from "@components/ErrorBoundary";
import { UserProvider } from "@utils/UserContext";
import { Provider } from "react-redux";
import store from "./src/store/store";
import Login from "@components/Login";
import ProtectedRoute from "@components/ProtectedRoute";

const Dashboard = lazy(()=> import("@components/Dashboard"));
const RestruantMenu = lazy(()=> import("@components/RestruantMenu"));
const Grocery = lazy(()=> import("@components/Grocery"));
const Contact = lazy(()=> import("@components/Contact"));
const Cart = lazy(()=> import("@components/Cart"));
const RestruantList = lazy(()=> import("@components/RestruantList"));

// create client
const queryClient = new QueryClient();
const App = ()=>{
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
        element: <Suspense fallback="Loading..."><Dashboard/></Suspense>,
        errorElement: <Error/>
        },
        {
            path: "/login",
        element: <Login/>,
        errorElement: <Error/>
        },
        {
        path: "/res",
        element: 
        <Suspense fallback="Loading..."><RestruantList/></Suspense>,
        errorElement: <Error/>
         },
         {
        path: "/contact",
        element: ( <Suspense fallback="Loading..."><Contact/></Suspense>),
        errorElement: <Error/>
         },
         {
        path: "/grocery",
        element: <Suspense fallback="Loading..."><Grocery/></Suspense>,
        errorElement: <Error/>
         },
         {
        path: "/user",
        element: (
            <ProtectedRoute>
                <UserClass/>
            </ProtectedRoute>
        ),
        errorElement: <Error/>
         },
         {
            path: "/res/:resId",
            element: <Suspense fallback="Loading..."><RestruantMenu/></Suspense>,
            errorElement: <Error/>
         },
         {
            path: "/cart",
            element: <Suspense fallback="Loading..."><Cart/></Suspense>,
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
    <UserProvider>
        <QueryClientProvider client={queryClient}>
            <Provider store= {store}>
            <RouterProvider router={appRouter} />
            </Provider>
        </QueryClientProvider>
    </UserProvider>
    </ThemeProvider>
    </ErrorBoundary>
);