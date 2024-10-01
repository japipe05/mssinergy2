"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "flowbite";
import {Navbar } from "flowbite-react";
import FullLogo from "@/app/DashboardLayout/layout/shared/logo/FullLogo";
import PagesMenu from "./Pagesmenu";
import ServicioMenu from './servicios';
import MobileDrawer from "./MobileDrawer";
import DemosMenu from "./DemosMenu";

const Header = () => {
  return (
    <>
      <header className="bg-transparent dark:bg-dark"
      >
        <Navbar className="fluid py-8 px-0 bg-transparent dark:bg-dark">
          <FullLogo />
          <MobileDrawer/>
          <Navbar.Collapse className="xl:block hidden">
            {/*<DemosMenu />
            <PagesMenu />*/}
            <Navbar.Link as={Link} href="#Inicio" >
              Quíenes somos
            </Navbar.Link>
            <Navbar.Link as={Link} href="#Inicio" >
              Servicios
            </Navbar.Link>
            <Navbar.Link as={Link} href="#Inicio" >
              Metrología
            </Navbar.Link>
            <Navbar.Link as={Link} href="#prueba">
              Solicita tú Servicio
            </Navbar.Link>
            <ServicioMenu />
            <Navbar.Link
              as={Link}
              href="#prueba"
              /*href="/auth/auth1/login"*/
              className="bg-primary text-white text-sm hover:text-white dark:hover:text-white hover:bg-primaryemphasis py-2 px-5"
            >
              Login/Registro
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  );
};

export default Header;