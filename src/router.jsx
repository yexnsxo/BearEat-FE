import { createBrowserRouter } from "react-router-dom";
import StartPage from "./pages/Onboarding/StartPage";
import NavigatePage from "./pages/Onboarding/NavigatePage";
import Onboarding1 from "./pages/Onboarding/Onboarding1.jsx";
import Onboarding2 from "./pages/Onboarding/Onboarding2";
import Onboarding3 from "./pages/Onboarding/Onboarding3";
import Onboarding4 from "./pages/Onboarding/Onboarding4";
import Onboarding5 from "./pages/Onboarding/Onboarding5";
import Loading from "./pages/Loading";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <StartPage /> },
      { path: "navigate", element: <NavigatePage /> },
      { path: "onboarding1", element: <Onboarding1 /> },
      { path: "onboarding2", element: <Onboarding2 /> },
      { path: "onboarding3", element: <Onboarding3 /> },
      { path: "onboarding4", element: <Onboarding4 /> },
      { path: "onboarding5", element: <Onboarding5 /> },
      { path: "loading", element: <Loading /> },
    ],
  },
]);

export default router;
