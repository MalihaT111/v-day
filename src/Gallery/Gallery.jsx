import React from "react";
import './Gallery.css'
import img1 from './img1.jpeg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './img13.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import img17 from './img17.jpg'
import img18 from './img18.jpg'
import img19 from './img19.jpg'
import img20 from './img20.jpg'
import img21 from './img21.jpg'

import PhotoAlbum from "react-photo-album";

const photos = [
    { src: img1, width: 3024, height: 4032 },
    { src: img2, width: 2316, height: 3088 },
    { src: img3, width: 3024, height: 4032 },
    { src: img4, width: 2316, height: 3088 },
    { src: img5, width: 2316, height: 3088 },
    { src: img6, width: 3024, height: 4032 },
    { src: img7, width: 3024, height: 4032 },
    { src: img8, width: 3024, height: 4032 },
    { src: img9, width: 3024, height: 4032 },
    { src: img10, width: 4032, height: 3024 },
    { src: img11, width: 4032, height: 3024  },
    { src: img12, width: 4032, height: 3024  },
    { src: img13, width: 4032, height: 3024  },
    { src: img14, width: 3024, height: 4032 },
    { src: img15, width: 4032, height: 3024 },
    { src: img16, width: 4032, height: 3024 },
    { src: img17, width: 3024, height: 4032 },
    { src: img18, width: 3024, height: 4032 },
    { src: img19, width: 3024, height: 4032 },
    { src: img20, width: 3024, height: 4032 },
    { src: img21, width: 3024, height: 4032 },
];

const Gallery = () => {
    return (
        <div> 
            <PhotoAlbum layout="masonry" photos={photos} />
        </div>
    );
}

export { Gallery };

