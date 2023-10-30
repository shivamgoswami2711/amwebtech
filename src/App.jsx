import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  AuthLayout,
  MainLayout,
  PageLayout,
} from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Material from "./pages/Material";
import Product from "./pages/Product";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      {/* All pages  */}
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="/material" element={<Material />} />
        <Route path="/product" element={<Product />} />
      </Route>

      {/* All auth pages */}
      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="Registration" element={<Home />} />
      </Route>
    </Route>
  )
);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
