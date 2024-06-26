import Create from "./components/create";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./components/read";
import Update from "./components/update";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Create />} />
            <Route path="/read" element={<Read />} />
            <Route path="/update" element={<Update />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;