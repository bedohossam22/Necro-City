import Data3 from "./Data1/Data3";
import Moviesdetails from "./Moviesdetails";

interface MoviesProps {
  name: string;
  favchar: string;
  scene: string;
}

const Movies: React.FC<MoviesProps> = ({ name, favchar, scene }) => {
  return (
    <div className='min-h-screen bg-gradient-custom overflow-y-hidden'>
      <div className='w-3/4 mx-auto pt-[50px] font-bangers lg:text-2xl text-center'>
        <h1 className='text-white mt-6'>Movie Name: {name}</h1>
        <h1 className='text-white'>Favourite Character: {favchar}</h1>
        <h1 className='text-white'>Favourite Scene: {scene}</h1>

       
        {Data3.map((item) => {
        if (name === item.name){
 return <Moviesdetails 
 key={item.name}
 image1={item.image1}
 image2={item.image2}
 image3={item.image3}
 
 image4={item.image4}
 image5={item.image5}
 video={item.video}
 
   />
 
        }

})}
        </div>
      </div>
  
  );
}

export default Movies;
