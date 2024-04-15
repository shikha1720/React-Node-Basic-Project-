import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './components/Root';
import Home from './components/Home/Home';
import Bag from './components/Bag/Bag';
import { Provider } from 'react-redux';
import store from './store/index';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const router = createBrowserRouter([
    {path:"/", element:< Root/>, children: [
      {path:"/", element: <Home />},
      {path:"/bag", element:<Bag /> }
    ]}
  ]);
  return (
    <Provider store={store} >
    <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
