import React,{useState} from 'react';
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from './Arrows.Components';

const HeroCarousel = () => {
     const [images,setImages]=useState([])

const settingsLG ={
    arrows:true,
    slidesToShow:1,
    infinite:true,
    speed:500,
    slideToScroll:1,
    nextArrow: <NextArrow/>,
    precArrow:<PrevArrow/> ,

}
 const settings ={
    arrows:true,
    slidesToShow:1,
    infinite:true,
    speed:500,
    slideToScroll:1,
    nextArrow:<NextArrow/>,
    precArrow: <PrevArrow/>,


 }

  return ( <>
  
  <div className="lg-hidden">
     <HeroSlider {...settings}>
        {
            images.map((images) =>(
            <div className="w-full h-56 md:h-80 py-3">
                <img src=""  alt=" hero banner"className=" w-full h-full rounded-md object-cover"/>
            </div>
            )
            )
        }
     </HeroSlider>
  </div>
  <div className="hidden lg:block">
  <HeroSlider {...settingsLG}>
        {
            images.map((images) =>(
            <div className="w-full h-96 px-2 py-3">
                <img src=""  alt=" hero banner"className=" w-full h-full rounded-md object-cover"/>
            </div>
            )
            )
        }
     </HeroSlider>
  </div>
  
  
  </>
    
  )
}

export default HeroCarousel