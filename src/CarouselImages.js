import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import Img1 from './img/c1.png';
import Img2 from './img/c2.png';
import Img3 from './img/c3.png';
import Img4 from './img/c4.png';
import Img5 from './img/c5.png';
import Img6 from './img/c6.png';
import Img7 from './img/c7.png';
import Img8 from './img/c8.png';
import Img9 from './img/c9.png';
import Img10 from './img/c10.png';
import Img11 from './img/c11.png';
import Img12 from './img/c12.png';
import Img13 from './img/c13.png';
import Img14 from './img/c14.png';
import Img15 from './img/c15.png';
import Img16 from './img/c16.png';
import Img17 from './img/c17.png';


function CarouselImages(){
    const[ images, setImages ] = useState([]);

    useEffect( () => {
        //this had to be in useEffect, if it was outside it has an infinite render error
        //only run when component mounts, it sets the useState var from the tempArray
        setImages(tempArray);
    },[]);
    
    //make an array and push in all image imports
    const tempArray = [];
    tempArray.push(Img1);
    tempArray.push(Img2);
    tempArray.push(Img3);
    tempArray.push(Img4);
    tempArray.push(Img5);
    tempArray.push(Img6);
    tempArray.push(Img7);
    tempArray.push(Img8);
    tempArray.push(Img9);
    tempArray.push(Img10);
    tempArray.push(Img11);
    tempArray.push(Img12);
    tempArray.push(Img13);
    tempArray.push(Img14);
    tempArray.push(Img15);
    tempArray.push(Img16);
    tempArray.push(Img17);

    console.dir(images);

    return(
        <Carousel fade="true" interval="2200" controls="false">
            {images.map( image =>(
                <Carousel.Item>
                    <img src={image} width="100%" alt="Pure Mold Solution of San Antonio" />
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default CarouselImages;