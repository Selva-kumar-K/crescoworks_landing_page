import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Img4 from "../assets/img4.png";

export default function HeroSection() {
  return (
    <div className="flex flex-col space-y-20  mt-20 h-[120vh] lg:h-[500px] md:flex-row lg:justify-between lg:items-center lg:w-[80%] lg:mx-auto lg:mt-5 lg:gap-10">
      <div
        className="flex flex-col gap-3 px-10 text-center max-w-sm mx-auto lg:text-start lg:mx-0 lg:max-w-2xl lg:px-0
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
          <button className="bg-transparent text-white px-10 py-3 font-semibold  rounded-full w-fit border-2 border-slate-400 duration-700 hover:border-slate-100">
            Apply for Trial
          </button>
        </div>
      </div>

       <div className="w-[310px] mx-auto lg:w-[500px]">
        <div className="relative lg:-top-72">
        <div className="w-[200px] absolute lg:w-[400px]">
          <img className="" src={Img1}/>
        </div>

        <div className="w-[140px] absolute left-44 -top-4 lg:left-96 lg:w-[230px]">
          <img
            src={Img4}
            alt=""
            className=""
          />
          </div>

          <div className="w-[103px] absolute top-48 lg:w-[150px] lg:top-96">
          <img src={Img2} alt="" className=""/>
          </div>
          <div className="w-[230px] absolute top-28 left-20 lg:w-[420px] lg:top-44 lg:left-36">
          <img
            src={Img3}
            alt=""
            className=""
          />
          </div>
        </div>
        </div>
    </div>
  );
}
