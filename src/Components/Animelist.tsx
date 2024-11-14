



function Animelist(props : any) {

  return (
    <div>
      <div className='w-3/4 mx-auto pt-8 c-5'>
        <h1 className='text-white mb-8 font-agbalumo lg:text-3xl'>{props.item.Name}</h1>
        <div className="flex flex-col md:flex-row justify-around items-center test11 ">
  <div className="left-side7 ">
    <img src={props.item.image} 
         className="lg:max-h-[380px] lg:max-w-[500px] md:max-h-[300px] md:max-w-[300px] " 
         alt="Rent a Girlfriend"/>
  </div>
  <div className="right-side7 mt-4 md:mt-0">
    <img src={props.item.favouritechar} 
         className="max-h-[200px] lg:max-h-[330px] md:max-h-[200px] " 
         alt="Ruka"/>
  </div>
</div>
      <div className='flex flex-col mt-5 font-agbalumo'>
      <h2 className='text-white lg:text-2xl'>Popularity : {props.item.Popularity}</h2>
      <h2 className='text-white lg:text-2xl'>Episodes : {props.item.Episodes}</h2>
      <h3 className='text-center w-full b-1 lg:text-2xl'>Plot</h3>
      <p className='text-white text-justify mt-[10px] mb-[10px] lg:text-2xl'>{props.item.Plot}</p>
      </div>
      </div>
      </div>
   
  )
}

export default Animelist
