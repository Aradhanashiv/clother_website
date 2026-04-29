import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductsSlider = ({images}) => {
   const settings = {
    dots: true,
    infinite:true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll:1,
    arrows: false
   }

  return (
    <Slider {...settings}>
    {images.map((image, index) => 
    <div key={index} className='md:h-95 w-full h-70 overflow-hidden'>       
    <img src={image} key={index} 
    className="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-105" alt="Midi Dress" />         
    </div>
    )}
    </Slider>
  )
}

export default ProductsSlider
