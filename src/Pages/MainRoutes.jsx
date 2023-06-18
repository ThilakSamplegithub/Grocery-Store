import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AdminPage from "./AdminPage";
import ProductPage from "./ProductPage";
import AddToCartPage from "./AddToCartPage";
import SingleProductPage from "./SingleProductPage";
import SignIn from "./SignInPage";
import SignUp from "./SignUpPage";
import CheckoutPage from "./CheckoutPage";
export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/addToCart" element={<AddToCartPage />} />
      <Route path="/singleProductPage/:id" element={<SingleProductPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/checkoutPage" element={<CheckoutPage />} />
      <Route path="*" element={<h1>404 PAGE NOT FOUND</h1>} />
    </Routes>
  );
};
