import React from 'react'
import Slider from 'react-slick'
import ava01 from "../../assets/images/pra.jpg"
import ava02 from "../../assets/images/yuk.jpg"
import ava03 from "../../assets/images/adi.jpg"
import ava04 from "../../assets/images/smt.jpg"
import ava05 from "../../assets/images/abhi.jpg"

const Testimonials = () => {

    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings:{
                    slidesToShow:2,
                    slideToScroll:1,
                    dots:true,
                    infinite:true,
                },
            },
            {
                breakpoint:576,
                settings: {
                    slidesToShow:1,
                    slideToScroll:2,
                },
            }
        ]
    }

  return (
    <Slider {...settings}>
        <div className="testimonials py-4 px-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Phasellus tempus massa vitae elit consectetur, ut convallis massa ultricies. 
               Duis hendrerit turpis quis tincidunt lobortis. Nullam vel faucibus mauris.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Pranaw Gautam</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Phasellus tempus massa vitae elit consectetur, ut convallis massa ultricies. 
               Duis hendrerit turpis quis tincidunt lobortis. Nullam vel faucibus mauris.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Yukti Singh</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Phasellus tempus massa vitae elit consectetur, ut convallis massa ultricies. 
               Duis hendrerit turpis quis tincidunt lobortis. Nullam vel faucibus mauris.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Aditi Singh</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Phasellus tempus massa vitae elit consectetur, ut convallis massa ultricies. 
               Duis hendrerit turpis quis tincidunt lobortis. Nullam vel faucibus mauris.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava04} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Smarti Nigam</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Phasellus tempus massa vitae elit consectetur, ut convallis massa ultricies. 
               Duis hendrerit turpis quis tincidunt lobortis. Nullam vel faucibus mauris.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava05} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Abhishek Vishwakarma</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
    </Slider>
  )
}

export default Testimonials