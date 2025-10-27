import { createBrowserRouter } from "react-router-dom";
import StartPage from "./pages/Onboarding/StartPage";
import NavigatePage from "./pages/Onboarding/NavigatePage";
import Onboarding1 from "./pages/Onboarding/Onboarding1.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <StartPage /> },
      { path: "navigate", element: <NavigatePage /> },
      { path: "onboarding1", element: <Onboarding1 /> },
    ],
  },
]);

export default router;
