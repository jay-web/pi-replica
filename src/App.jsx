import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/details";
import Conversation from "./pages/conversation";
import { AnimatePresence } from "framer-motion";

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
<RouterProvider router={router}></RouterProvider>
  </AnimatePresence> 
  
}

export default App;
