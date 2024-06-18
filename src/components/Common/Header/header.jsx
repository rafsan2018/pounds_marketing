

function Header() {
  return (
    <div>
    {/* <section className="relative w-full">
      <img src="./src/assets/images/bannerimg.png" className="w-full object-cover h-[707px]"/>
                <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-white">
                    <h1 className="text-5xl font-bold mb-4">Innovative Automation Solutions</h1>
                    <p className="text-xl mb-8 text-center">Enhance your production with our cutting-edge SECS/GEM and Automation Software.</p>
                    <a href="#products" className="bg-white text-indigo-600 py-2 px-4 rounded-lg font-semibold">Explore Our Products</a>
                </div>
      </section> */}
      {/* <section className="relative w-full">
      <img src="./src/assets/images/banner.png" className="w-full object-cover h-[707px]"/>
                <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-end items-center text-white">
                  <img src="./src/assets/images/bannerieftsideimg.png" className="w-auto object-right h-full"/>
                </div>
      </section> */}
    <div className="relative h-screen flex items-center justify-center  text-white">
      <img src="./src/assets/images/banner.png" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="absolute flex flex-row justify-between top-8 left-8  font-bold text-xl z-10">
        {/* POUNCE */}
          <img src="./src/assets/images/Picture1.png" alt="Background" className=" w-full h-full" />
        </div>
        <div className="absolute flex flex-row space-x-5 justify-between top-8 right-8  font-bold text-xl z-10">              
            <img src="./src/assets/images/searchicon.png" alt="search" className="w-[32px] h-[32px]"/>
            <img src="./src/assets/images/hambarger.png" alt="hambarger" className="w-[32px] h-[32px]"/>
        </div>
      <div className="absolute text-7xl z-20 font-pangram left-[26rem] top-[10rem]">
        <h1 className=" font-bold mb-4 ">UNLEASH</h1>
        <h1 className="font-bold mb-4">YOUR</h1>
        <h1 className=" font-bold">MARKETING</h1>

      </div>
      <div className="absolute right-20 z-10">
        <img src="./src/assets/images/bannerieftsideimg.png" alt="VR girl" className="w-[800px] h-auto" />
      </div>
      <div className="absolute flex flex-col items-center space-y-2 bottom-32 left-[22rem] z-10">
        <img src="./src/assets/images/scrollicon.png" alt="VR girl" className="w-[40px] h-[40px]" />
        <span className="text-center text-xs font-activegrotesk">Scroll Down</span>
      </div>
    </div>
    </div>
  )
}

export default Header




//<div className="flex overflow-hidden relative flex-col px-16 pt-9 pb-20 w-full min-h-[707px] max-md:px-5 max-md:max-w-full">
  {/* <img
    loading="lazy"
    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e0249e60b5b8d9bf6dc7bbe5a081621e70d2344817064d739eefb84d42a9859c?apiKey=8366b3b08d4a41a79c2731faa20564f7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0249e60b5b8d9bf6dc7bbe5a081621e70d2344817064d739eefb84d42a9859c?apiKey=8366b3b08d4a41a79c2731faa20564f7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0249e60b5b8d9bf6dc7bbe5a081621e70d2344817064d739eefb84d42a9859c?apiKey=8366b3b08d4a41a79c2731faa20564f7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0249e60b5b8d9bf6dc7bbe5a081621e70d2344817064d739eefb84d42a9859c?apiKey=8366b3b08d4a41a79c2731faa20564f7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0249e60b5b8d9bf6dc7bbe5a081621e70d2344817064d739eefb84d42a9859c?apiKey=8366b3b08d4a41a79c2731faa20564f7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0249e60b5b8d9bf6dc7bbe5a081621e70d2344817064d739eefb84d42a9859c?apiKey=8366b3b08d4a41a79c2731faa20564f7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0249e60b5b8d9bf6dc7bbe5a081621e70d2344817064d739eefb84d42a9859c?apiKey=8366b3b08d4a41a79c2731faa20564f7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e0249e60b5b8d9bf6dc7bbe5a081621e70d2344817064d739eefb84d42a9859c?apiKey=8366b3b08d4a41a79c2731faa20564f7&"
    className="object-cover absolute inset-0 size-full"
  />
  <div className="flex relative gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
    <div className="flex overflow-hidden relative flex-col justify-center items-center my-auto aspect-[4.92] w-[123px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/82abe0a98c6fbe787c7d924e9be19c15e841d3d50987dd848e087f0420f154fb?apiKey=8366b3b08d4a41a79c2731faa20564f7&"
        className="object-cover absolute inset-0 size-full"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/82abe0a98c6fbe787c7d924e9be19c15e841d3d50987dd848e087f0420f154fb?apiKey=8366b3b08d4a41a79c2731faa20564f7&"
        className="w-full aspect-[5]"
      />
    </div>
    <div className="flex gap-5 justify-between">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/04265f7f942c0f5f068cf86da6048f5cb2caaa439bb35e8c06292be332a7425b?apiKey=8366b3b08d4a41a79c2731faa20564f7&"
        className="shrink-0 w-8 aspect-square"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/47b420d452745646aca4f6e51d29f8083614f9415ecc44adc4a48ac26c389dee?apiKey=8366b3b08d4a41a79c2731faa20564f7&"
        className="shrink-0 w-8 aspect-square"
      />
    </div>
  </div>
  <div className="relative self-center mt-28 text-8xl font-bold text-white border border-black border-solid leading-[81px] tracking-[4.5px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
    UNLEASH YOUR MARKETING
  </div>
  <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f970dba9b3c6e61dd22f5d38e08ad155ccf83dc1bb26edc19ef5214310a44060?apiKey=8366b3b08d4a41a79c2731faa20564f7&"
    className="mt-48 ml-52 w-10 aspect-square max-md:mt-10 max-md:ml-2.5"
  />
  <div className="relative self-start mt-3 mb-2.5 ml-48 text-lg font-light tracking-wide leading-7 text-white max-md:ml-2.5">
    Scroll Down
  </div>
</div> */}