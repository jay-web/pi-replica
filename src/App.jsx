import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { Suspense, lazy } from "react";
import Spinner from "./ui/spinner";

const Home = lazy(() => import("./pages/home"));
const Details = lazy(() => import("./pages/details"));
const Conversation = lazy(() => import("./pages/conversation"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details/:id",
    element: <Details />,
  },
  {
    path: "/conversation",
    element: <Conversation />,
  },
]);

function App() {
  return <AnimatePresence>
          <Suspense fallback={<Spinner />}>
            <RouterProvider router={router}></RouterProvider>
          </Suspense>
           </AnimatePresence> 
  
}

export default App;
