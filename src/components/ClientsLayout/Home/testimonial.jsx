import { useState } from "react";

function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const dots = [0, 1, 2, 3, 4,5];

    const testimonials = [
        {
          quote: "Pounce Marketing was exactly what we needed. Forcing us to really refocus on our approach to customer engagement. They were fun to work with, innovative, and aggressive champions for our success.",
          author: "John Sirianni",
          title: "President & CEO, Statseeker"
        },
        {
          quote: "They have significantly improved our online presence and lead generation efforts.",
          author: "Jane Doe",
          title: "Marketing Director, ExampleCorp"
        },
        {
          quote: "Their strategies are always on point and deliver great results.",
          author: "Mark Smith",
          title: "CEO, BusinessCo"
        },
        {
          quote: "We have seen a marked increase in customer engagement since working with them.",
          author: "Sarah Lee",
          title: "CMO, Tech Innovations"
        },
        {
          quote: "Pounce Marketing truly understands our needs and consistently exceeds our expectations.",
          author: "Tom Wilson",
          title: "Founder, Startup Hub"
        },
        {
          quote: "Their creativity and dedication are unmatched.",
          author: "Emily Johnson",
          title: "Head of Marketing, Global Solutions"
        }
      ];

    const activeIndex =(i)=>{
        setCurrentIndex(i)
    }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  return (
    <div
      className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 
     w-full text-center text-white min-h-[1302px] max-md:px-5 max-md:mt-10 max-md:max-w-full"
    >
      <img
        loading="lazy"
        srcSet="./src/assets/images/testimonialbg.png"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col items-center  mb-10 max-w-full w-[930px] max-md:mt-10">
        <div className="text-6xl font-bold leading-[56.7px] tracking-[2.7px] max-md:text-4xl">
          TESTIMONIALS
        </div>
        <div className="flex gap-5 justify-between items-start self-stretch mt-16 text-2xl tracking-wide text-white max-md:flex-wrap max-md:mt-10">
          <img
            loading="lazy"
            src="./src/assets/images/leftarrow.png"
            className="shrink-0 mt-5 aspect-square w-[70px]"
            onClick={prevSlide}
          />
          <div className="flex flex-col items-center self-stretch max-md:max-w-full">
            <div className="self-stretch font-light leading-10 max-md:max-w-full">
              {/* “Pounce Marketing was exactly what we needed. Forcing us to really
              refocus on our approach to customer engagement. They were fun to
              work with, innovative, and aggressive champions for our success.”{" "} */}
              {testimonials[currentIndex].quote}
            </div>
            <div className="mt-14 font-medium leading-[120%] max-md:mt-10 max-md:max-w-full">
               {testimonials[currentIndex].author+''+testimonials[currentIndex].title}
            </div>
            <div className="flex space-x-4 justify-center items-center pt-5">
              {dots.map((dot, index) => (
                <div
                  key={index}
                  onClick={() => activeIndex(index)}
                  className={`w-4 h-4 rounded-full ${
                    currentIndex === index
                      ? "bg-[#E6E6E6] border-2 border-gray-400 rounded-full animate-spin-slow ring-2 ring-white"
                      : "bg-[#E6E6E6]"
                  }`}
                ></div>
              ))}
            </div>
          </div>

          <img
            loading="lazy"
            src="./src/assets/images/rightarrow.png"
            className="shrink-0 mt-5 aspect-square w-[70px]"
            onClick={nextSlide}
          />
        </div>
        <div className="mt-60 font-holiday text-7xl leading-[104px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[58px]">
          We’re Ready
          <br />
          Are you?
        </div>

        <div className="border-1 border-white p-1 inline-block mt-10">
          <button className="bg-white text-[#EE14C0] font-bold py-2 px-4 focus:outline-none">
            LET`S DO IT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonial