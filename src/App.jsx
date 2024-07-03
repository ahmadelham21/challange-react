import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { GlobalProvider } from "./state/GlobalState";

const App = () => {
  return (
    <>
      <GlobalProvider>
        <Navbar />
        <Outlet />
      </GlobalProvider>
    </>
  );
};

export default App;
