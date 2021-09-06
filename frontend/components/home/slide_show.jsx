// Libs
import React, { Component } from 'react';
import Slider from 'react-slick';

// Need to create own carousel using jQuery.... no react slick ....


const SlideShow = () => {
  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: false,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slideToSlide: true,
    arrows: false,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    fade: true,
  };

  return (
    <Slider {...settings}>
      <div className='img-wrapper'>
        <img className="splash-image" src="https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/irving-redesign/Events_Page_Header_2903ed9c-40c1-4f6c-9a69-70bb8415295b.jpg">
        </img>

      </div>
      <div className='img-wrapper'>
        <img className="splash-image" src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZXZlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"/>
      </div>
      <div className='img-wrapper'>
        <img className='splash-image' src='https://www.omnihotels.com/-/media/images/meetings/hero-images/omni-meetings-and-events-unique-event-2.jpg?h=660&la=en&w=1170'></img></div>
      <div className='img-wrapper'>
        <img className='splash-image' src='https://static.toiimg.com/photo/msid-64957021,width-96,height-65.cms'></img>
      </div>
      <div className='img-wrapper'>
        <img className='splash-image' src='http://3rf8l24fn89f1vqe8a2o4a3f-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/hanny-naibaho-aWXVxy8BSzc-unsplash-1024x683.jpg'></img>
      </div>
    </Slider>
  );
}

export default SlideShow;

// function NextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={ className }
//       style={{ display: 'block', background: 'red', padding: '50px' }}
//       onClick={ onClick }
//     >
//     </div>
//   );
// }
//
// function PrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={ className }
//       style={{ display: 'block', background: 'green', padding: '50px' }}
//       onClick={ onClick }
//     >
//     </div>
//   );
// }


// export default class CustomArrows extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       nextArrow: <NextArrow />,
//       prevArrow: <PrevArrow />
//     };
//     return (
//       <div>
//         <h2>Custom Arrows</h2>
//         <Slider {...settings}>
//           <div><h3><img className="splash-image" src="https://res.cloudinary.com/dtluc0y85/image/upload/c_crop,g_custom:face/v1509476016/motorcycles-race-helmets-pilots-163414_kkrfeo.jpg"/></h3></div>
//           <div><h3>2</h3></div>
//           <div><h3>3</h3></div>
//           <div><h3>4</h3></div>
//           <div><h3>5</h3></div>
//           <div><h3>6</h3></div>
//         </Slider>
//       </div>
//     );
//   }
// }
