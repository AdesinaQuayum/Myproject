import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Imageman from "./assets/Imageman.jpg"
import { FaFigma } from "react-icons/fa";
import { TbXd } from "react-icons/tb";
import { TbBrandAdobeIllustrator } from "react-icons/tb";
import { DiPhotoshop } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaMicrosoft } from "react-icons/fa";
import { SiVorondesign } from "react-icons/si";
import { FaRegEnvelope } from "react-icons/fa";
import { SiGooglemarketingplatform } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";













 function Testing() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <nav className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <h1 className="text-2xl font-bold text-white">
            Zayn
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-medium">
            <li className="hover:text-green-500 cursor-pointer">Home</li>
            <li className="hover:text-green-500 cursor-pointer">About</li>
            <li className="hover:text-green-500 cursor-pointer">Services</li>
            <li className="hover:text-green-500 cursor-pointer">Contact</li>
          </ul>

          {/* Mobile Button */}
          <div 
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-900 text-center space-y-4 py-4 font-medium">
          <li className="hover:text-green-500 cursor-pointer">Home</li>
          <li className="hover:text-green-500 cursor-pointer">About</li>
          <li className="hover:text-green-500 cursor-pointer">Services</li>
          <li className="hover:text-green-500 cursor-pointer">Contact</li>
        </ul>
      )}
    </nav>
    <div className="px-4 py-5 flex flex-row gap-80">
       <div className="">
         <h1 className="text-2xl">Ui-Ux Designer </h1> 
        <h2 className="font-bold text-5xl">Zayn</h2> <br />
        <p>Explore a curated collection of my design projects, each crafted <br /> with passion and precision. From concept to creation, I deliver <br /> compelling visual experiences.</p> <br />
        <div className="flex gap-3">
          <button className="bg-green-900 text-white rounded-2xl px-5 py-1 ">View My Work</button> 
        <button className="text-green-900 border-1 rounded-2xl px-5 py-1">Schedule a call</button>
        </div>
       </div>

       <div className="">
  <img src={Imageman} alt="Man" className="w-80 h-70" />
       </div>
    </div>

      <div className="">
        <h1 className="text-center text-3xl text-green-900 font-bold">My Work Experience </h1>

   
    <div className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 items-center">

        {/* LEFT SIDE */}
        <div className="text-right space-y-12">

          <div>
            <h2 className="font-semibold text-lg">Cognizant – Pune</h2>
            <p className="text-gray-500 text-sm">Sep 2016 - July 2020</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Sugee , Mumbai</h2>
            <p className="text-gray-500 text-sm">Sep 2020 - July 2023</p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Cinetstox – Pune</h2>
            <p className="text-gray-500 text-sm">Sep 2023</p>
          </div>

        </div>


        {/* CENTER LINE */}
        <div className="flex flex-col items-center">

          <div className="w-1 border-l-2 border-dashed border-gray-400 h-40 relative">

            <span className="absolute -left-2 top-0 w-5 h-5 bg-green-700 rounded-full border-4 border-white"></span>

            <span className="absolute -left-2 top-1/2 w-5 h-5 bg-yellow-400 rounded-full border-4 border-white"></span>

            <span className="absolute -left-2 bottom-0 w-5 h-5 bg-green-700 rounded-full border-4 border-white"></span>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="space-y-12">

          <div>
            <h2 className="font-semibold text-lg">Experience Designer</h2>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">UI/UX Designer</h2>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Lead UX Designer</h2>
          </div>

        </div>

      </div>
    </div>

   
      <div className="">
        <div className="bg-green-900 py-5 px-5 flex flex-row gap-60">
          <div className=" text-white">
            <h1 className="font-bold text-2xl">SERVICE I <br /> OFFER </h1>
          <p>I will help you finding a solution and <br /> solve your problem</p>
          <br />
          <p className="bg-white w-20 h-20 rounded-full text-center py-3 font-bold text-green-900">LET'S <br />TALK</p>
          </div>
        
        <div className=""><h1 className=" text-2xl text-white"> 01 Web Design </h1> 
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores velit, <br />
          maiores dolorem saepe cupiditate iusto recusandae nisi omnis a aliquid <br />fuga molestiae aliquam atque voluptates provident! Ea placeat inventore veritatis.</p> <br />
        <h1 className=" text-2xl text-white">02 WordPress Development</h1> <br />
        <h1 className=" text-2xl text-white">03 Webflow Development</h1></div>
        </div>
        <div className="">
          <h1 className="text-green-900 text-center text-3xl font-bold">Exploring My Diverse Skill Set</h1>
          <div className="flex flex-row gap-15 py-5 px-10">
            <FaFigma />figma
          <TbXd /> XD
          <TbBrandAdobeIllustrator /> Af effects
          <DiPhotoshop /> Photoshop
          <FaHtml5 /> html5
          <FaCss3Alt /> Css3
          </div>
        </div>
        <div className=" flex flex-row gap-15 px-10 py-5 bg-green-900 text-white ">
          <p>verizon</p>
          <p>Lenovo</p>
          <FaSlack /> slack
          <CiYoutube /> Youtube
          <p>Amazon</p>
          <p>Google</p>
          <FaMicrosoft /> Microsoft



        </div>

      <div className="">
        <h1 className="text-2xl font-bold text-green-900">
          How Our Agency <br /> Can Help
        </h1>
        <div className="flex flex-row px-5 py-5">
          <div className="border-1">
          <SiVorondesign /> <br />
          <h1 className="font-bold">Design</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quas? <br />
          Explore Now
        </div>
        <div className="border-1">
          <FaRegEnvelope /> <br />
          <h1 className="font-bold">Development</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quas? <br />
          Explore Now
        </div>
        <div className="border-1">
          <SiGooglemarketingplatform /> <br />
          <h1 className="font-bold">Marketing</h1>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quas? <br />
          Explore Now
        </div>
        </div>
        <div className="">
          <div className="bg-green-900 px-5 py-5">
            <h1 className="font-bold text-2xl text-white ">TESTIMONIALS</h1>
            <p>What people say about me</p>
            <div className="flex flex-row gap-50">
            <div className="">
            <img src={Imageman} alt="Man" className="w-50 h-50" />
            </div>
            
            <div className="text-white">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />Repudiandae nesciunt libero enim eos nihil ullam itaque blanditiis 
             <br /> obcaecati perspiciatis nemo quis quam illum modi, ea unde <br />ipsa! Accusantium, sequi cumque.</p>
              <br />
              <p>
                Andy <br /> Founder
              </p>
            </div>
            </div>
            
            
          </div>
          <div className="">
            
          <h1 className="font-bold text-3xl text-green-900 text-center">Keep in touch with me </h1>
             <div className="flex flex-row gap-200 px-5 py-5">

             
              <div className="">
              <h1>
                Home Service Products About us
              </h1>
            </div>
              
              <div className="flex flex-row">
                <FaFacebook />
              <FaLinkedin />
              <FaTwitter />
              <FaInstagram />
              </div>
</div>



            </div>
        </div>

      </div>

      </div>

      </div>

    </div>
    
    

  );
}
export default Testing