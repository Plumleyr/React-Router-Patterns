import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import ColorsList from "./ColorsList";
import ColorDetails from "./ColorDetails";
import AddColorForm from "./AddColorForm";

const MainRoutes = ({ colors, addColors }) => {
  const router = createBrowserRouter([
    {
      path: "/colors",
      element: <ColorsList colors={colors} />,
    },
    {
      path: "/colors/:color",
      element: <ColorDetails colors={colors} />,
    },
    {
      path: "/colors/new",
      element: <AddColorForm colors={colors} addColors={addColors} />,
    },
    {
      path: "*",
      element: <Navigate to={"/colors"} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MainRoutes;
