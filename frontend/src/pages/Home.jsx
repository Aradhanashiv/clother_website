import Header from '../components/Header.jsx'
import Caraousel from '../components/Caraousel.jsx'
import SubHeader from '../components/SubHeader.jsx'
import AllCategories from '../components/AllCategories.jsx'
import CategoryWiseProducts from '../components/CategoryWiseProducts.jsx'
import AllProducts from '../components/AllProducts.jsx'
import Footer from './Footer.jsx'

const Home = () => {
  

  return (
    <>
    <Header/>
    <SubHeader/>
    <Caraousel/>
    <AllProducts/>
    <AllCategories/>
    <Footer/>
   </>
  )
}

export default Home