import { ReactPhotoCollage } from "react-photo-collage";
import image1 from '../../Images/img1.jpg'
import image2 from '../../Images/img2.jpg'
import image3 from '../../Images/img3.jpg'
import image4 from '../../Images/img4.jpg'
import image5 from '../../Images/img5.jpg'
import image6 from '../../Images/img6.jpg'
import image7 from '../../Images/img7.jpg'
import image8 from '../../Images/img8.jpg'
import image9 from '../../Images/img9.jpg'
import image10 from '../../Images/img10.jpg'
import image11 from '../../Images/img11.jpg'
import image12 from '../../Images/img12.jpg'
import image13 from '../../Images/img13.jpg'
import image14 from '../../Images/img14.jpg'
import image15 from '../../Images/img15.jpg'
import image16 from '../../Images/img16.jpg'
import image17 from '../../Images/img17.jpg'
import image18 from '../../Images/img18.jpg'
import image19 from '../../Images/img19.jpg'
import image20 from '../../Images/img20.jpg'



const PhotoCollage = () =>{
    const settings = {
        width: '1fr',
        height: ['250px', '170px'],
        layout: [4, 4, 4, 4, 4],
        photos: [
          { source: image1},
          { source: image2},
          { source: image3},
          { source: image4},
          { source: image5},
          { source: image6},
          { source: image7},
          { source: image8},
          { source: image9},
          { source: image10},
          { source: image11},
          { source: image12},
          { source: image13},
          { source: image14},
          { source: image15},
          { source: image16},
          { source: image17},
          { source: image18},
          { source: image19},
          { source: image20},
        ],
        showNumOfRemainingPhotos: true
      };
    return (
        <ReactPhotoCollage {...settings} />
    )
}

export default PhotoCollage;