interface ChampionDetailsProps {
 
  quote: string;
  title: string;
  story: string;
  skin1: string;
  skin2: string;
  skin3: string;
  play: string;
}

// Championdetails component for rendering individual champion details
const Championdetails = ({  quote, title, story, skin1, skin2, skin3, play }: ChampionDetailsProps) => {
  return (
    <div className="text-white w-3/4 mx-auto mt-12 flex flex-col md:flex-row gap-4 md:gap-5 cx-5 overflow-hidden mb-0 lg:mb-8 lg:gap-8 lg:pt-8">

      <div className="left-side3 lg:flex-1.5 flex gap-5 ">
        <div className="flex flex-col justify-between gap-3">
        <img src={skin1} alt='tf' className="max-w-[100px] md:max-w-[160px] lg:max-w-[200px]" />
<img src={skin2} alt='tf' className="max-w-[100px] md:max-w-[160px] lg:max-w-[200px]" />
<img src={skin3} alt='tf' className="max-w-[100px] md:max-w-[160px] lg:max-w-[200px]" />
        </div>
        <div className="flex-grow flex overflow-hidden ">
          <video src={play} controls className=" object-cover">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="flex  flex-col justify-evenly text-1xl font-bangers overflow-hidden lg:text-2xl gap-0 md:gap-8 sm:gap-8 md:text-3xl ">
        <h1 className="whitespace-nowrap ">
          <q>{quote}</q>
          <span className="block">Peak: Masters - EUW</span>
          <span className="block">Title: {title}</span>
        </h1>
        <h2>{story}</h2>
      </div>
    </div>
  );
};

export default Championdetails;