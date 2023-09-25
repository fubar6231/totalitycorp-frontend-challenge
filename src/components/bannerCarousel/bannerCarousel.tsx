import React from 'react';
import {useState} from 'react';
import {Carousel, Image} from 'react-bootstrap'

function BannerCarousel() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex:any) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} style={{width:"auto",height:"20rem",border:'1rem black'}}>
            <Carousel.Item>
                <Image src='../../assets/images/img_1.png' alt='sdf'/>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src='../../assets/images/img_2.png' alt='sdsf'/>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src='../../assets/images/img_2.png' alt='sdef'/>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default BannerCarousel;