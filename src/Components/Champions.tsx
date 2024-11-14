import Championdetails from './Championdetails';
import Data1 from './Data1/Data1';

interface ChampionsProps {
  banner: string;
  champion: string;
}

const Champions = ({ banner, champion }: ChampionsProps) => {
  return (
    <div className="min-h-screen bg-gradient-custom overflow-hidden">
      <div className="pt-[100px] overflow-hidden">
        <div className="items-center mx-auto w-2/4 max-h-[150px] relative cx-4 overflow-hidden lg:max-h-[240px]">
          <img src={banner} alt="Champion Banner"  className='h-full w-full'/>
          <h1 className="champ-color absolute text-2xl top-1/2 right-2 md:text-6xl lg:text-7xl md:right-1 md:top-1/2 2xl:right-20 lg:right-1 lg:top-1/2  ">{champion}</h1>

         
        
        </div>
        {Data1.map((item) => {
 if (champion === item.champion){
 return <Championdetails 
     key={item.story}
     story={item.story}
     quote={item.quote}
     title={item.title}
     
     skin1={item.skin1}
     skin2={item.skin2}
     skin3={item.skin3}
     play={item.play}
   />
 }


})}
      </div>
    </div>
  );
}

export default Champions;
