import { createBrowserRouter } from "react-router-dom";
import StartPage from "./pages/Onboarding/StartPage";
import NavigatePage from "./pages/Onboarding/NavigatePage";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <StartPage /> },
      { path: "navigate", element: <NavigatePage /> },
    ],
  },
]);

export default router;
