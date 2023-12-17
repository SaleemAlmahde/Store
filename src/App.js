import AdminDashboard from './pages/dashboard/AdminDashboard';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<AdminDashboard />} />
        {/* <Route path="/products" element={<ProductsPage />} /> */}
        {/* <Route path="/admin" element={<AdminPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
