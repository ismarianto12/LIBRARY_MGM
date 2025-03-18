import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Introscreen from './pages/introscreen'
import LoginScreen from './pages/ListCatalog'
import SignupScreen from './pages/SignupScreen'
import SuccessScreen from './pages/SuccessScreen'
import Order from './pages/Order'
import Payment from './pages/Payment'
import Profile from './pages/Profile'
import Konfirmasi from './pages/Konfirmasi'
import PaymentSuccess from './pages/PaymentSuccess'
import PilihProduct from './pages/PilihProduct'
import ProtectedRoute from './utils/ProtectedRoute'
import Notfound from './pages/notfound'
import ListCatalog from './pages/ListCatalog'
import BookRent from './pages/RentOfbook'
import CreateBook from './pages/CreateBook'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Notfound />} />
          <Route path="/" element={<ListCatalog />} />
          <Route path="/rentbook/:id" element={<BookRent />} />

          <Route path="/Login" element={<ListCatalog />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/createBook" element={<CreateBook />} />
          <Route path="/order" element={<Order />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/konfirmasi" element={<Konfirmasi />} />
          <Route path="/success/login" element={<SuccessScreen />} />
          <Route path="/success" element={<PaymentSuccess />} />
          <Route path="/pilihproduct/:id" element={<PilihProduct />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <PilihProduct />
            </ProtectedRoute>
          } />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
