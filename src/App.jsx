import React from "react";
import Home from "./pages/Home/Home";
import { Route, Routes, BrowserRouter, Navigate } from "react-router";
import SharedLayout from "./routes/SharedLayout";
import Movies from "./pages/movies/Movies";
import MovieDetail from "./pages/movies/MovieDetail";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import AuthLayout from "./routes/AuthLayout";
import Order from "./pages/order/Order";
import Payment from "./components/ui/payment/Payment";
import Ticket from "./pages/order/Ticket";
import OrderHistory from "./pages/profile/OrderHistory";
import ListMovie from "./pages/admin/ListMovie";
import NewMovie from "./pages/admin/NewMovie";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route element={<SharedLayout />}>
                <Route path="/home" element={<Navigate to="/" replace />} />
                <Route index element={<Home />} />

                <Route path="movies">
                  <Route index element={<Movies />} />
                  <Route
                    path="detail/:movieId"
                    element={
                      <ProtectedRoute>
                        <MovieDetail />
                      </ProtectedRoute>
                    }
                  />
                </Route>

                <Route path="order">
                  <Route index element={<Order />} />
                  <Route path=":movieId" element={<Order />} />
                  <Route path=":movieId/:orderId" element={<Order />} />
                  <Route path="payment" element={<Payment />} />
                  <Route path="ticket" element={<Ticket />} />
                </Route>

                <Route path="profile">
                  <Route
                    index
                    element={<Navigate to="/profile/order" replace />}
                  />
                  <Route path="order" element={<Order />} />
                  <Route path="order/history" element={<OrderHistory />} />
                </Route>
                <Route path="admin">
                  <Route
                    index
                    element={<Navigate to="/admin/dashboard" replace />}
                  />
                  <Route path="movie/list" element={<ListMovie />} />
                  <Route path="movie/add" element={<NewMovie />} />
                </Route>
              </Route>
              <Route path="/auth" element={<AuthLayout />}>
                e
                <Route index element={<Navigate to="/auth/signin" rplace />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />
              </Route>
              /*{" "}
              <Route
                path="*"
                element={
                  <h1 className="text-blue-500 text-5xl text-center font-bold flex justify-center items-center h-screen">
                    <br />
                    404 Page Not Found
                  </h1>
                }
              />{" "}
              */
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
