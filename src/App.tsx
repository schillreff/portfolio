import { AnimatePresence } from "framer-motion";
import { BrowserRouter } from "react-router-dom";
import RoutesMain from "./routes";
import Header from "./components/Header";

function App() {
  return (
    <AnimatePresence>
      <div className="bg-secondary-light transition duration-300 dark:bg-primary-dark">
        <BrowserRouter>
          <Header />
          <div className="">
            <RoutesMain />
          </div>
        </BrowserRouter>
      </div>
    </AnimatePresence>
  );
}

export default App;
