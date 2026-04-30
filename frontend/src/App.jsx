import {Routes, Route,Navigate} from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Signup from './pages/Signup.jsx'
import Signin from './pages/Signin.jsx'
import Home from './pages/Home'
import AddProduct from './pages/AddProduct.jsx'
import AddCategories from './pages/AddCategories.jsx'
import { useGetCurrentUser } from './hooks/useGetCurrentUser.jsx'
import { useSelector } from 'react-redux'
import UserProfile from './pages/UserProfile.jsx'
import CategoryWiseProducts from './components/CategoryWiseProducts.jsx'
import UpdateProduct from './pages/UpdateProduct.jsx'
import SearchResults from './pages/SearchResults.jsx'
import AddToCart from './pages/AddToCart.jsx'
import AboutUs from './pages/AboutUs.jsx'
import TermsConditions from './pages/TermsConditions.jsx'
// export const serverUrl = 'http://localhost:4000'

const App = () => {
  useGetCurrentUser()
  const {userData, loading} =  useSelector(state => state.user)
  if(loading) return <div>Loading...</div>
  return (
    <>
    <ToastContainer/>
    <Routes>
      <Route path="/signup"  element={!userData ? <Signup/> : <Navigate to={"/"}/> }/>
      <Route path="/signin" element={!userData ? <Signin/> : <Navigate to={"/"}/>}/>
      <Route path="/"  element={<Home/>}/>
      <Route path="/add-product" element={userData ? <AddProduct/> : <Navigate to={"/signin"}/>}/>
      <Route path="/update-product/:id" element={userData ? <UpdateProduct/> : <Navigate to={"/signin"}/>}/>
      <Route path="/add-category" element={userData ? <AddCategories/> : <Navigate to={"/signin"}/>}/>
      <Route path="/user-profile" element={userData ? <UserProfile/> : <Navigate to={"/signin"}/>}/>
      <Route path="/category" element={<CategoryWiseProducts/>} />
      <Route path="/search" element={<SearchResults/>} />
      <Route path="/add-to-cart" element={<AddToCart/>} />
      <Route path="/about-us" element={<AboutUs/>} />
       <Route path="/term-and-condition" element={<TermsConditions/>} />
    </Routes>
    
    </>
  )
}

export default App
