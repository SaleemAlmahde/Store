import AdminPage from './pages/website/AdminPage';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<AdminPage />} />
        {/* <Route path="/products" element={<ProductsPage />} /> */}
        {/* <Route path="/admin" element={<AdminPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
