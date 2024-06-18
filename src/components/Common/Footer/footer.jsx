import { useState } from "react";
import axios from 'axios'

function Footer() {
  const [email,setEmail]= useState('')
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://gmail.us13.list-manage.com/subscribe/post?u=ea8d5beb9a99f4042dae719b3&amp;id=09ce078c54&amp;f_id=006b96e2f0', 
        { email },
        {
          headers:{
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "accept": "application/json",
          }
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };
  return (
    <div className="flex flex-col justify-center w-full max-md:max-w-full">
      <div className="flex justify-center items-center px-16 py-20 w-full bg-gray-800 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mt-2.5 mb-3.5 w-full max-w-[1110px] max-md:max-w-full">
          <div className="flex gap-36 w-full max-md:flex-wrap max-md:max-w-full">
            <img
              loading="lazy"
              src="./src/assets/images/Picture1.png"
              className="shrink-0 self-start max-w-full aspect-[5] w-[123px] mr-14"
            />
            <div className="flex-auto max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-white max-md:mt-10">
                    <div className="text-2xl font-bold tracking-wide leading-7">
                      Company
                    </div>
                    <div className="flex flex-col space-y-2 mt-9 text-lg font-light tracking-wide leading-7">
                      <span>Services</span>

                      <span>About Us</span>

                      <span>Our Work</span>

                      <span>Blog</span>

                      <span>Contact Us</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col max-md:mt-10">
                    <div className="text-2xl font-bold tracking-wide leading-7 text-white">
                      Stalk Us
                    </div>
                    <div className="flex gap-4 mt-11 max-md:mt-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed9d67209803fa61c18f30f31a1293c7c2de9b68392a48bfd953b0d7e8b6c019?apiKey=8366b3b08d4a41a79c2731faa20564f7&"
                        className="shrink-0 w-8 aspect-square"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/df639f715029a023264cc8ced37aea13ac37db4f81235d1c0ec4af2ef032c72e?apiKey=8366b3b08d4a41a79c2731faa20564f7&"
                        className="shrink-0 w-8 aspect-square"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/dce8b29d805a5fe9b3953b42fb566f1a3b79cc75ed6e86e83ceeafe44df526c2?apiKey=8366b3b08d4a41a79c2731faa20564f7&"
                        className="shrink-0 w-8 aspect-square"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col text-white max-md:mt-10 max-md:max-w-full">
                    <div className="text-2xl font-bold tracking-wide leading-7 max-md:max-w-full">
                      Stay in touch
                    </div>
                    <div className="mt-9 text-lg font-light tracking-wide leading-7 max-md:max-w-full">
                      Get actionable tips, easy explanations, and cutting-edge
                      creativity in your inbox. Your time is valuable, so is
                      ours. We promise only to reach out when we’ve got
                      something useful to say.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col self-end mt-6 max-w-full w-[766px]">
            <div className="flex gap-4 self-end max-md:flex-wrap">
              <div className="border-1 border-white p-1 inline-block mt-10">
                <input
                  type="text"
                  placeholder="Email"
                  className="bg-gray-800 text-white font-bold py-2 px-4 focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="border-1 border-white p-1 inline-block mt-10">
                <button onClick={(e)=>handleSubmit(e)} className="bg-[#D8D8D8] text-[#4B4B4B] font-pangram font-bold py-2 px-4 focus:outline-none">
                  GET AMONGS IT
                </button>
              </div>
              {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 pb-14 text-base font-light tracking-wide leading-6 text-center text-white underline max-md:mt-10 max-md:max-w-full">
          © 2019 Pounce Marketing. All Rights Reserved.{" "}
          <span className="underline">Privacy Policy </span>
        </div>
    </div>
  );
}

export default Footer