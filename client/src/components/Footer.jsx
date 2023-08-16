import React from "react";
import Blog_01 from "../assets/shirt.png";
import Blog_02 from "../assets/t-shirt.png";
import Blog_03 from "../assets/tshirt.png";
import { BsTelephone, BsBuilding } from "react-icons/bs";
import {
  AiOutlineFacebook,
  AiFillTwitterSquare,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FiMail } from "react-icons/fi";

const blog_data = [
  {
    id: 1,
    title: "Our Fashion Store App Unveils the Hottest Looks of the Season!",
    date: "August 5, 2023",
    image: Blog_01,
  },
  {
    id: 2,
    title:
      " Introducing Exclusive Deals and Collections on Our Fashion Store App!",
    date: "August 07, 2023",
    image: Blog_02,
  },
  {
    id: 3,
    title:
      " Experience Seamless Style Exploration with Our New Fashion Store App",
    date: "August 15, 2023",
    image: Blog_03,
  },
];

const Footer = () => {
  return (
    <>
      <footer className="bg-black container mx-auto mt-28 grid grid-cols-1 space-y-10 bg-primary px-5 py-8 tracking-wider text-white md:mt-28 md:grid-cols-4 md:space-y-0 xl:px-28 xl:py-20 mb-[-20px]">
        <section className="space-y-4">
          <h1 className="text-4xl font-black tracking-wider">Dressup</h1>
          <p className="w-2/3 text-sm font-light">
            Discover Unparalleled Elegance and Unleash Your Unique Style at Our
            Fashion Emporium – Where Every Thread Tells a Tale of Glamour and
            Individuality.
          </p>
        </section>

        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="uppercase ">Contact us</h2>
            <div className="w-1/6 border-t"></div>
          </div>
          <div className="space-y-4 text-sm font-light">
            <p className="flex items-center space-x-1">
              <span>
                {" "}
                <BsTelephone />{" "}
              </span>
              <span> (+91) 1234 456789</span>
            </p>
            <p className="flex items-center space-x-1">
              <span>
                {" "}
                <FiMail />{" "}
              </span>
              <span> dressup@gmail.com</span>
            </p>
            <p className="flex items-center space-x-1">
              <span>
                {" "}
                <BsBuilding />{" "}
              </span>
              <span> 134, Camp Nou , Kerala</span>
            </p>
            <div className="flex space-x-6">
              <a href="#" aria-label="Facebook">
                <AiOutlineFacebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter">
                <AiFillTwitterSquare className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <AiOutlineLinkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram">
                <AiOutlineInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Useful links */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="uppercase ">Userful links</h2>
            <div className="w-1/6 border-t"></div>
          </div>
          <div className="flex flex-col space-y-4 text-sm font-light">
            <a href="#" className="hover:text-white/80">
              About Dressup
            </a>
            <a href="#" className="hover:text-white/80">
              Contact us
            </a>
            <a href="#" className="hover:text-white/80">
              FAQ
            </a>
            <a href="#" className="hover:text-white/80">
              Supports
            </a>
            <a href="#" className="hover:text-white/80">
              Blog
            </a>
            <a href="#" className="hover:text-white/80">
              Privacy Policy
            </a>
          </div>
        </section>

        {/* Latest section */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="uppercase ">Latest news</h2>
            <div className="w-1/6 border-t"></div>
          </div>
          <div className="flex flex-col space-y-3 font-light ">
            {blog_data.map((item) => {
              const { id, title, image, date } = item;
              return (
                <article
                  key={id}
                  className="flex items-center  justify-start space-x-4 md:flex-col md:items-start md:space-x-0 lg:flex-row xl:space-x-4 "
                >
                  <img
                    width={300}
                    height={200}
                    src={image}
                    alt={title}
                    className="h-12 w-20 object-cover object-center"
                  />
                  <div className=" capitalize ">
                    <a href="#" className="text-sm hover:text-white/80 ">
                      {title}
                    </a>
                    <p className="text-xs text-gray-200"> {date} </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
