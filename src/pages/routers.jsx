import { createBrowserRouter } from 'react-router-dom';
import Layoud from "@components/Layout/Layout";

// @ts-ignore
export const routers = createBrowserRouter([
  {
    path: '',
    element: (
      <>
        <Layoud/>
      </>
    ),
  },
]);
