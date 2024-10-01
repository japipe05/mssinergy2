import React from "react";
import Image from "next/image";
import banner from "/public/images/landingpage/background/business-woman-checking-her-mail.png";
import { Button } from "flowbite-react";
import Link from "next/link";

const Ticket = () => {
  return (
    <div className="bg-primary dark:bg-primary">
      <div className="container ">
       <div className="flex justify-between relative py-12">
       <div className="lg:w-5/12 w-full lg:pt-12 px-2">
            <h5 className="text-3xl leading-8 font-medium text-white text-center lg:text-start mb-[30px]">
              Build your app with our highly customizable Flowbite Tailwind based Dashboard
            </h5>
            <div className="sm:flex items-center gap-3 pb-16">
                    <Link href="/auth/auth1/login" target="_blank" className=" py-3 rounded-full text-primary block bg-white px-7 border border-primary font-semibold" type="button">Login</Link>
                    <Link href="/auth/auth1/register" target="_blank" className="border border-white rounded-full d-block px-7 py-3 text-white font-semibold " type="button">Register</Link>
            </div>

        </div>
          <div className="lg:absolute relative md:end-0 lg:-end-6 md:-bottom-[14px] mx-auto">
            <Image src={banner} alt="banner" className="w-full mx-auto " />
          </div>
       </div>
      </div>
    </div>
  );
};

export default Ticket;
