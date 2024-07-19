import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Img4 from "../assets/img4.png";

export default function HeroSection() {
  return (
    <div className="flex flex-col space-y-20  mt-20 h-[120vh] lg:h-[500px] lg:flex-row lg:justify-between lg:items-center lg:w-[80%] lg:mx-auto lg:mt-5 lg:gap-10">
      <div
        className="flex flex-col gap-3 text-center max-w-sm mx-auto lg:text-start lg:mx-0 lg:max-w-2xl 
      "
      >
        <h2 className="text-2xl font-semibold text-white lg:text-3xl">
          Experience the Power of Extreme Automation
        </h2>
        <p className="text-sm text-white font-semibold lg:text-md">
          Enriched with 150+ Features, Next-Gen UX, Intelligence beyond human
          constraints — Uncover the world's most admired Hiring Automation Suite
        </p>
        <h2 className="text-2xl font-semibold text-white lg:text-3xl">
          "Future of Talent Acquistion"
        </h2>
        <div className="flex flex-col items-center space-y-5 lg:flex-row lg:space-x-5 lg:items-center lg:space-y-0 lg:mt-5">
          <button className="bg-blue-400 text-white px-10 py-3 font-semibold rounded-full w-fit">
            Demo Request
          </button>
          <button className="bg-transparent text-white px-10 py-3 font-semibold  rounded-full w-fit border-2 border-slate-200">
            Apply for Trial
          </button>
        </div>
      </div>

      {/* <div className="relative left-[60px] lg:w-[45%] lg:left-0 lg:-top-60">
        <div className="">
          <img src={Img1} alt="" className="absolute w-[250px] lg:w-[350px]" />
          <img
            src={Img4}
            alt=""
            className="absolute w-[140px] right-28 lg:w-[250px] lg:-right-20 lg:-top-12"
          />
          <img src={Img2} alt="" className="absolute w-[150px] top-56 lg:top-80  lg:left-10" />
          <img
            src={Img3}
            alt=""
            className="absolute w-[260px] top-36 right-28 lg:w-[400px] lg:top-44 lg:left-44 "
          />
        </div>
      </div> */}
        <div className="relative left-0 right-0 w-[80%] mx-auto md:w-[80%] ">
        <div className="w-[200px] absolute ">
          <img className="" src={Img1}/>
        </div>

        <div className="w-[140px] absolute left-44 -top-4">
          <img
            src={Img4}
            alt=""
            className=""
          />
          </div>

          <div className="w-[103px] absolute top-48">
          <img src={Img2} alt="" className=""/>
          </div>
          <div className="w-[230px] absolute top-28 left-20 ">
          <img
            src={Img3}
            alt=""
            className=""
          />
          </div>
        </div>
    </div>
  );
}
