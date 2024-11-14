import Animelist from './Animelist'
import Data2 from './Data1/Data2'
import { useEffect , useState } from 'react'

interface animeprops {
    banner : string,
    anime: string,
}

const Anime = ({banner , anime } : animeprops) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const cards = Data2.map(item => {
    return <Animelist  key = {item.Name}
    item = {item} />
}) 
  return (
    <div className="min-h-screen bg-gradient-custom overflow-hidden">
         <span
          className={isVisible ? 'ArrowVisible' : 'ArrowHidden'}
          onClick={scrollToTop}
        >
          ^
        </span>
    <div className="pt-[100px] overflow-hidden">
      <div className="items-center mx-auto w-2/4 lg:max-h-[250px] md:max-h-[150px] relative cx-4 overflow-hidden ">
        <img src={banner} alt="Champion Banner " />
        <h1 className="anime-color lg:text-3xl   font-bold text-center cx-17">{anime}<span className="block">Of All The Time</span></h1>
      </div>
      </div>
      {cards}
      </div>
  )
}

export default Anime
