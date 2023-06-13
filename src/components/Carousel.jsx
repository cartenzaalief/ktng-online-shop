import banner1 from "../assets/images/banner1.jpg"
import banner2 from "../assets/images/banner2.jpg"
import banner3 from "../assets/images/banner3.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Image } from "@chakra-ui/react";

const Carousel = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <Slider {...settings}>
            <Image src={banner1} h={[200, 300, 400]} borderRadius={12} />
            <Image src={banner2} h={[200, 300, 400]} borderRadius={12} />
            <Image src={banner3} h={[200, 300, 400]} borderRadius={12} />
        </Slider>
    )
}

export default Carousel