import Navbar from './Navbar.jsx'
import Body from './Body.jsx'
import About from './About.jsx';
import Cart from './Cart.jsx';
import Contact from './Contact.jsx';
import Error from './Error.jsx';
import appStore from '../Constant/appStore.jsx';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import Restaurant from './RestaurantMenu.jsx';

let Applayout = () => {
  return (
    <Provider store={appStore}>
      <Navbar />
      <Outlet />
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      { path: "/", 
        element: <Body /> 
      },
      { path: "/about", 
        element: <About /> },
      { path: "/contact", 
        element: <Contact /> 
      },
      { path: "/cart", 
        element: <Cart /> 
      },
      { path: "/:id", 
        element: <Restaurant /> 
      },
    ],
    errorElement: <Error />
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;