

function FavoriteWork() {
    const favimages = [
        {id:1,img:'./src/assets/images/favroute1.png'},
        {id:2,img:'./src/assets/images/fav2.png'},
        {id:3,img:'./src/assets/images/fav3.png'},
        {id:4,img:'./src/assets/images/fav4.png'},
        {id:5,img:'./src/assets/images/fav5.png'},
        {id:6,img:'./src/assets/images/fav6.png'},
        {id:7,img:'./src/assets/images/fav7.png'},
        {id:8,img:'./src/assets/images/fav8.png'}
    ]
  return (
    <div className="mx-auto  space-y-10">
      <div className="flex flex-col self-center pl-[26rem] mt-5 max-w-[1000px] max-md:max-w-full">
        <h1 className="font-pangram font-bold text-black text-7xl">OUR</h1>
        <div className="pl-5 text-6xl font-holiday text-[#EE14C0] leading-[70.4px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Favourite Work
        </div>
        <div className="mt-5 text-lg font-light tracking-wide leading-7 text-black max-md:max-w-full">
          We could point out the hard work and creativity that went into each of
          these projects. But we’d rather let the work speak for itself.
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {favimages.map((favimg, index) => (
          <>
            <img src={favimg.img} alt={favimg.id} key={index} />
          </>
        ))}
      </div>
    </div>
  );
}

export default FavoriteWork


