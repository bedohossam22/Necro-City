import React from 'react';

interface MoviesDetailsProps {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  video: string;
}

const Moviesdetails: React.FC<MoviesDetailsProps> = ({ image1, image2, image3, image4, image5, video }) => {
  return (
    
       <div className='grid-container5 container mt-5 mb-10'>
  <div className='grid-item grid-item1  '>
      <video src={video} controls className='w-full h-full object-fill'/>
  </div>
 
 <div className='grid-item grid-item2 ff'>
  <img src={image1} />
    </div>
  <div className='grid-item grid-item3 ff'>
  <img src={image2} />
  </div>
    
  <div className='grid-item grid-item4 big-size ff'>
  <img src={image3} />
  </div>
   <div className='grid-item grid-item5 ff'>
   <img src={image4}/>
   </div>
   <div className='grid-item grid-item6 ff'>
   <img src={image5} />
   </div>
    </div>
  );
};

export default Moviesdetails;
