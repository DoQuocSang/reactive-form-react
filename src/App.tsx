import Layout from "./components/layout/Layout.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import AddOrUpdateProduct from "./pages/AddOrUpdateProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AddOrUpdateProduct />} />
          <Route path="/product/:id" element={<AddOrUpdateProduct />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
