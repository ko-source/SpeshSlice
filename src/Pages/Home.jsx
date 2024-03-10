import React from 'react'
import LoginButton from '../Components/Button'
import Card from '../Components/card'
import SimpleImageSlider from "react-simple-image-slider";
import Button from '../Components/Button';
import Input from '../Components/Input';
import Dropdown from '../Components/Dropdown';
import ProductCard from '../Components/ProductCard'
import BannerCard from '../Components/shopCard';
// import NearbyBakeriesRegistration from '../Components/Model';
import ModalExample from '../Components/Model';
import RegisterBakery from './RegisterBakery';
import ProductDetail from './ProductDetail';
import HeroSection from '../Components/Hero';

import MyLocation from '../Components/Location';
import BakeryRegistrationForm from '../Components/BakeryRegisterationForm';
export default function Home() {

  const images = [
    { url: "./src/assets/images/cake.png" },
    { url: "./src/assets/images/cake.png" },
    { url: "./src/assets/images/cake.png" },

  ];



  return (
    <div>

      <div>

        {/* <SimpleImageSlider
          // width={1350}
          height={400}

          images={images}
          showBullets={true}
          showNavs={true}
          style={{
            background: 'linear-gradient(-2deg, rgba(75, 53, 118, 1) 33%, rgba(248, 177, 60, 1) 100%)'
          }}
        /> */}



      </div>
      {/* <div style={{ display: "flex", flexDirection: "row" , justifyContent:"flex-end", alignItems:"center", marginTop:"3%" }}>
  <div style={{ flex: 0.33 }}>
    <Card />
  </div>
  <div style={{ flex: 0.33 }}>
    <Card />
  </div>
  <div style={{ flex: 0.33 }}>
    <Card />
  </div>
  <div style={{ flex: 0.33 }}>
    <Card />
  </div>
  
</div> */}




      {/* <Button className="ml-3">
                Login
            </Button> */}

            <HeroSection/>
<ProductCard/>

<div className=' flex flex-wrap gap-1 '>
<div className='lg:w-[33%] md-[50%] w-full'>
<BannerCard/>
</div>
<div className='lg:w-[33%] md-[50%] w-full'>
<BannerCard/>
</div><div className='lg:w-[33%] md-[50%]  w-full'>
<BannerCard/>
</div>
</div>


<ModalExample/>


<RegisterBakery/>
<ProductDetail/>


{/* <MyLocation/> */}

<BakeryRegistrationForm/>

    </div>

  )
}
