import Particles from './Particles';
import MyWorkisArt from '../assets/My-Work-Is-Art.png'
function Home() {
    return (
      <div className="h-screen bg-gradient-custom">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row  justify-around w-3/4 items-center fix-a  lg:pt-10 ">
            <div className="left-side2 text-white max-w-[500px] lg:max-w-[700px] pt-15 checkss ">
            <Particles/>
            <h1 className="font-impact text-3xl px-5 py-8 whitespace-nowrap cx-gradient lg:text-5xl pb-3 mt-5 lg:pb-0 lg:mt-0 lg:mb-5">Welcome To Necro City</h1>
            <p className="text-justify px-5 py-3 lg:text-2xl font-edu md:text-2xl ">
            In this project, I’ll be sharing my favorite League of Legends champions as well as my favorite movies of all time with their scenes, while also showcasing my mastery of using nested routes and nested props. I hope you enjoy the ride!
            </p>
          </div>
          <div className="right-side2 pt-0">
            <img src={MyWorkisArt} className='object-cover max-h-[250px] max-w-[250px] cx-2 mt-4 sm:mt-0 lg:max-h-[300px] mb-7 lg:mb-0' />
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  
