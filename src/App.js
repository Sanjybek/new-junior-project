import {RouterProvider} from "react-router-dom";

import {routers} from "./pages/routers.jsx";

function App() {
  return (
      <RouterProvider router={routers}/>
  );
}

export default App;
