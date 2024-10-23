"use client";
import Image from "next/image";
import Link from "next/link";
// import { useState } from "react";
import doctorImage from "../../public/doc.jpg";
import doc1 from "../../public/doc1.jpg";
import { Carousel } from "react-responsive-carousel";
import doc3 from "../../public/doc3.jpg";
import massage from "../../public/Group.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaUserDoctor } from "react-icons/fa6";
import { GiHealthNormal } from "react-icons/gi";
import { BiMailSend } from "react-icons/bi";
import { IoCall } from "react-icons/io5";
import { FaGripLinesVertical } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import { MdOutlineMyLocation } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function Home() {
 
  const router = useRouter()

 
 
  // const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="h-screen bg-emerald-600 flex items-center justify-center">
        <div className=" bg-emerald-600  w-full h-full max-h-[700px] ">
          <nav className="bg-emerald-600 bg-emerald-600 w-full px-2 py-2 fixed top-0 grid justify-items-center ">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between ">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
                  {/* <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white "
                  >
                    <span className="sr-only">Open main menu</span>
                    {menuOpen ? (
                      <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16m-7 6h7"
                        />
                      </svg>
                    )}
                  </button> */}
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      <Link
                        href="#"
                        className="text-white hover:bg-white hover:text-emerald-600 rounded-md px-3 py-2 text-[14px] font-medium"
                      >
                        Home
                      </Link>
                      <Link
                        href="/about"
                        className="text-white hover:bg-white hover:text-emerald-600 rounded-md px-3 py-2 text-[14px] font-medium"
                      >
                        About
                      </Link>
                      <Link
                        href="Services"
                        className="text-white hover:bg-white hover:text-emerald-600 rounded-md px-3 py-2 text-[14px] font-medium"
                      >
                        Services
                      </Link>
                      <Link
                        href="/contact"
                        className="text-white hover:bg-white hover:text-emerald-600 rounded-md px-3 py-2 text-[14px] font-medium"
                      >
                        Contact
                      </Link>
                      <Link
                        href="www.google.com"
                        className="text-white hover:bg-white hover:text-emerald-600 rounded-md px-3 py-2 text-[14px] font-medium"
                      >
                        Emergency
                      </Link>
                      <Link
                        href="#"
                        className="text-white hover:bg-white hover:text-emerald-600 rounded-md px-3 py-2 text-[14px] font-medium"
                      >
                        Achievement
                      </Link>
                      <Link
                        href="#"
                        className="text-white hover:bg-white hover:text-emerald-600 rounded-md px-3 py-2 text-[14px] font-medium"
                      >
                        Media
                      </Link>
                      <Link
                        href="#"
                        className="text-white hover:bg-white hover:text-emerald-600 rounded-md px-3 py-2 text-[14px]   font-medium"
                      >
                        Career
                      </Link>

                      <Link  href="/appointment" className="bg-white text-emerald-600 rounded-xl px-3 py-2 text-sm font-medium ml-auto">
                        Appointment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          
              <div className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <button
                    onClick={()=>{router.push('/about')}}
          className="block text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
                  >
                    About
                  </button>
                  <Link
                    href=""
                    className="block text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    href=""
                    className="block text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
                  >
                    Services
                  </Link>
                  <Link
                    href="/contact"
                    className="block text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
                  >
                    Contact
                  </Link>
                  <Link
                    href=""
                    className="block text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
                  >
                    Emergency
                  </Link>
                  <Link
                    href=""
                    className="block text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
                  >
                    Achievement
                  </Link>
                  <Link
                    href=""
                    className="block text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
                  >
                    Media
                  </Link>
                  <Link
                    href=""
                    className="block text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
                  >
                    Career
                  </Link>
                </div>
              </div>
            
          </nav>
          {/* -----------------=========image/Carousel============================--------------------- */}
          <div className=" w-full    flex justify-center mt-[106px] ">
            <div className=" max-h-[141px] max-w-[624px] text-center">
              <span className="text-5xl font-serif text-white">
                World Best Advanced Cross-Border Care
              </span>
            </div>
          </div>
          <div className=" w-full   flex justify-center mt-[26px] ">
            <span className="text-white">
              Find The Best Hospitals and Doctors Across the world
            </span>
          </div>
        </div>
      </div>

      <div className="h-screen bg-white-600 flex items-center justify-center mt-[-320px] z-[-1]">
        <div className="h-full max-h-[640px] w-full max-w-[1050px] bg-red-500 rounded-[25px] border-[16px] border-white box-border relative overflow-hidden">
          <Carousel showThumbs={false} autoPlay infiniteLoop className="h-full">
            <div className="h-full  max-h-[640px] w-full max-w-[1050px]">
              <Image
                src={doctorImage}
                alt="Doctor 1"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="h-full  max-h-[640px] w-full max-w-[1050px]">
              <Image
                src={doc1}
                alt="Doctor 2"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="h-full  max-h-[640px] w-full max-w-[1050px]">
              <Image
                src={doc3}
                alt="Doctor 3"
                className="object-cover h-full w-full"
              />
            </div>
          </Carousel>
        </div>
      </div>

      {/* ------------=====================3rd page==================--------------------  */}
      <div className="h-screen flex justify-center p-4">
        <div className="h-full max-h-[607px] w-full max-w-[1252px] shadow-lg rounded-[25px]">
          <div className="container flex flex-col md:flex-row gap-4 m-4 flex-wrap">
            <div className="columns-1 w-full md:max-w-[610px] h-full max-h-[238px] text-[#059669] font-serif overflow-hidden">
              <span className="text-[24px] md:text-[40px] box-border">
                Experience Exceptional Healthcare In India With Hospitals India
              </span>
            </div>
            <div className="columns-1 w-full md:max-w-[610px] h-full max-h-[238px] text-[#059669] overflow-hidden">
              <p className="text-[14px] md:text-base">
                Discover the pinnacle of healthcare services in the United
                States, where advancements, quality, cutting-edge research,
                expert doctors and a commitment to patient success, combine to
                provide an unparalleled medical tourism experience. Omnicure India
                is your dedicated partner, guiding you towards improved health
                and wellness. Connect with us today and embark on a journey of
                exceptional USA healthcare services.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-4 mt-16">
            <div className="h-full max-h-[378px] w-full max-w-[378px] bg-[#f9f9f9] rounded-[25px] m-2 overflow-auto p-4">
              <div className="flex justify-center">
                <FaUserDoctor
                  style={{
                    width: "50px",
                    height: "50px",
                    color: "#059669",
                  }}
                />
              </div>
              <div className="text-center">
                <span className="text-[20px] md:text-[24px] text-[#059669] font-serif">
                  Doctors
                </span>
                <p className="text-[12px] md:text-base">
                  Choose by name, specialty, and more
                </p>
                <button onClick={()=>{router.push('/docotrs')}} className="bg-white text-emerald-600 rounded-xl px-3 py-2 text-xs md:text-sm font-medium ml-auto mt-4 hover:bg-gray-700 hover:text-white">
                  VIEW NOW
                </button>
              </div>
            </div>
            <div className="h-full max-h-[378px] w-full max-w-[378px] bg-[#f9f9f9] rounded-[25px] m-2 overflow-auto p-4">
              <div className="flex justify-center">
                <GiHealthNormal
                  style={{
                    width: "50px",
                    height: "50px",
                    color: "#059669",
                  }}
                />
              </div>
              <div className="text-center">
                <span className="text-[20px] md:text-[24px] text-[#059669] font-serif">
                  Health Checkup
                </span>
                <p className="text-[12px] md:text-base">
                  Find All Checkup packages
                </p>
                <button className="bg-white text-emerald-600 rounded-xl px-3 py-2 text-xs md:text-sm font-medium ml-auto mt-4 hover:bg-gray-700 hover:text-white">
                  CHECK NOW
                </button>
              </div>
            </div>
            <div className="h-full max-h-[378px] w-full max-w-[378px] bg-[#f9f9f9] rounded-[25px] m-2 overflow-auto p-4">
              <div className="flex justify-center">
                <BiMailSend
                  style={{
                    width: "50px",
                    height: "50px",
                    color: "#059669",
                  }}
                />
              </div>
              <div className="text-center">
                <span className="text-[20px] md:text-[24px] text-[#059669] font-serif">
                  Contact Us
                </span>
                <p className="text-[12px] md:text-base">Send Mail</p>
                <button className="bg-white text-emerald-600 rounded-xl px-3 py-2 text-xs md:text-sm font-medium ml-auto mt-4 hover:bg-gray-700 hover:text-white">
                  SEND NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================Emergency============================================= */}
      <div className="h-screen max-h-[200px] w-full bg-[#059669] flex flex-col md:flex-row justify-center items-center gap-8 p-4 md:gap-16 ">
        <div className="flex gap-2 items-center">
          <IoCall
            className="text-white"
            style={{ height: "25px", width: "25px", color: "white" }}
          />
          <div className="text-white text-center md:text-left">
            <span>EMERGENCY AND AMBULANCE</span>
            <br />
            <span>+918565896325/108</span>
          </div>
        </div>
        <FaGripLinesVertical
          className="hidden md:block text-white"
          style={{ height: "25px", width: "25px", color: "white" }}
        />
        <div className="flex gap-2 items-center">
          <BiEnvelope
            className="text-white"
            style={{ height: "25px", width: "25px", color: "white" }}
          />
          <div className="text-white text-center md:text-left">
            <span>SEND US MASSAGE</span>
            <br />
            <span>dhrajch@gmail.com</span>
          </div>
        </div>
        <FaGripLinesVertical
          className="hidden md:block text-white"
          style={{ height: "25px", width: "25px", color: "white" }}
        />
        <div className="flex gap-2 items-center">
          <MdOutlineMyLocation
            className="text-white"
            style={{ height: "25px", width: "25px", color: "white" }}
          />
          <div className="text-white text-center md:text-left">
            <span>VISIT US LOCATION</span>
            <br />
            <span>Hospital, kolar, MP Nagar, Bhopal</span>
          </div>
        </div>
      </div>
      {/* ========================================Manegment=================================== */}

      <div className="h-screen w-full max-h-5xl pt-4">
        <div className="text-center font-bold">
          <span className="text-[24px] md:text-[28px] underline text-[#059669]">
            OUR CENTER OF EXCELLENCE
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 m-4 md:m-8 justify-center">
          <div className="h-full max-h-[300px] md:max-h-[400px] max-w-[300px] shadow-lg p-4 overflow-hidden">
            <Image
              src={doc1}
              alt="photo"
              className="h-full max-h-[200px] w-full object-cover rounded-t-lg"
            />
            <div className="text-center text-[18px] md:text-[20px] font-bold text-[#059669] mt-2">
              RADIOLOGY
            </div>
            <p className="text-[14px] md:text-base ">
              We have various Gastro-radiological intervention procedures such
              as percutaneous transhepatic Biliary...
            </p>
          </div>
          <div className="h-full max-h-[300px] md:max-h-[400px] max-w-[300px] shadow-lg p-4 overflow-hidden">
            <Image
              src={doc1}
              alt="photo"
              className="h-full max-h-[200px] w-full object-cover rounded-t-lg"
            />
            <div className="text-center text-[18px] md:text-[20px] font-bold text-[#059669] mt-2">
              RADIOLOGY
            </div>
            <p className="text-[14px] md:text-base ">
              We have various Gastro-radiological intervention procedures such
              as percutaneous transhepatic Biliary...
            </p>
          </div>
          <div className="h-full max-h-[300px] md:max-h-[400px] max-w-[300px] shadow-lg p-4 overflow-hidden">
            <Image
              src={doc1}
              alt="photo"
              className="h-full max-h-[200px] w-full object-cover rounded-t-lg"
            />
            <div className="text-center text-[18px] md:text-[20px] font-bold text-[#059669] mt-2">
              RADIOLOGY
            </div>
            <p className="text-[14px] md:text-base ">
              We have various Gastro-radiological intervention procedures such
              as percutaneous transhepatic Biliary...
            </p>
          </div>
          <div className="h-full max-h-[300px] md:max-h-[400px] max-w-[300px] shadow-lg p-4 overflow-hidden">
            <Image
              src={doc1}
              alt="photo"
              className="h-full max-h-[200px] w-full object-cover rounded-t-lg"
            />
            <div className="text-center text-[18px] md:text-[20px] font-bold text-[#059669] mt-2">
              RADIOLOGY
            </div>
            <p className="text-[14px] md:text-base ">
              We have various Gastro-radiological intervention procedures such
              as percutaneous transhepatic Biliary...
            </p>
          </div>
          <div className="h-full max-h-[300px] md:max-h-[400px] max-w-[300px] shadow-lg p-4 overflow-hidden">
            <Image
              src={doc1}
              alt="photo"
              className="h-full max-h-[200px] w-full object-cover rounded-t-lg"
            />
            <div className="text-center text-[18px] md:text-[20px] font-bold text-[#059669] mt-2">
              RADIOLOGY
            </div>
            <p className="text-[14px] md:text-base ">
              We have various Gastro-radiological intervention procedures such
              as percutaneous transhepatic Biliary...
            </p>
          </div>
          <div className="h-full max-h-[300px] md:max-h-[400px] max-w-[300px] shadow-lg p-4 overflow-hidden">
            <Image
              src={doc1}
              alt="photo"
              className="h-full max-h-[200px] w-full object-cover rounded-t-lg"
            />
            <div className="text-center text-[18px] md:text-[20px] font-bold text-[#059669] mt-2">
              RADIOLOGY
            </div>
            <p className="text-[14px] md:text-base ">
              We have various Gastro-radiological intervention procedures such
              as percutaneous transhepatic Biliary...
            </p>
          </div>
          <div className="h-full max-h-[300px] md:max-h-[400px] max-w-[300px] shadow-lg p-4 overflow-hidden">
            <Image
              src={doc1}
              alt="photo"
              className="h-full max-h-[200px] w-full object-cover rounded-t-lg"
            />
            <div className="text-center text-[18px] md:text-[20px] font-bold text-[#059669] mt-2">
              RADIOLOGY
            </div>
            <p className="text-[14px] md:text-base ">
              We have various Gastro-radiological intervention procedures such
              as percutaneous transhepatic Biliary...
            </p>
          </div>
          <div className="h-full max-h-[300px] md:max-h-[400px] max-w-[300px] shadow-lg p-4 overflow-hidden">
            <Image
              src={doc1}
              alt="photo"
              className="h-full max-h-[200px] w-full object-cover rounded-t-lg"
            />
            <div className="text-center text-[18px] md:text-[20px] font-bold text-[#059669] mt-2">
              RADIOLOGY
            </div>
            <p className="text-[14px] md:text-base ">
              We have various Gastro-radiological intervention procedures such
              as percutaneous transhepatic Biliary...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
