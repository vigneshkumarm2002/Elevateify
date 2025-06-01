"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

// Custom Let's Talk button component
const LetsTalkButton = ({ className = "" }) => {
  return (
    <button className={`cursor-pointer z-[9999] ${className}`}>
      <div className="">
        <a 
           href="mailto:info@elevateify.com"
          className="inline-block relative bg-white hover:bg-[#F564A9] text-black  hover:text-white shadow-[0_0_30px_0_rgba(0,0,0,0.15)] text-base font-medium py-2 px-4 leading-none rounded-[3.8rem] transition-all duration-350 z-5 cursor-pointer no-underline"
        >
          <span className="flex items-center">
            Let's Talk
            <div className="bg-[#f692c3] rounded-full p-2 ml-3 flex items-center justify-center">
            <i className="relative inline-block  w-4 h-4 ">
              <style jsx>{`
                i:after {
                  content: "";
                  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.5275 8.68573H19.7994V7.45719H19.5291L19.516 7.45392C19.4348 7.43316 19.3539 7.41146 19.2732 7.3888C18.9742 7.3045 18.6776 7.21192 18.3837 7.11116C17.6396 6.85726 16.6433 6.46413 15.6265 5.90719C13.5629 4.77694 11.5715 3.06191 11.2124 0.607714L11.1235 0L9.90806 0.177728L9.99692 0.785442C10.4421 3.82893 12.8758 5.80154 15.0364 6.98462C15.3509 7.15661 15.6629 7.31427 15.9664 7.45719H0.200195V8.68573H15.803C15.4511 8.84302 15.1043 9.01156 14.7632 9.19106C12.5314 10.368 10.0211 12.3484 9.99037 15.3734L9.98423 15.9877L11.2128 16L11.2189 15.3857C11.2418 13.1015 13.1559 11.4274 15.3361 10.2779C16.3992 9.71687 17.466 9.31391 18.2707 9.0506C18.672 8.91956 19.0053 8.82332 19.2371 8.76108C19.3336 8.73485 19.4304 8.70973 19.5275 8.68573Z" fill="white"/></svg>') no-repeat 0 0/100% auto;
                  width: 20px;
                  height: 16px;
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%,-50%);
                }
              `}</style>
            </i>
            </div>
          </span>
        </a>
      </div>
    </button>
  );
};

export function NavbarMenu() {
  const navItems = [
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-7 left-0 w-full z-[999999]">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4 cursor-pointer">
            <LetsTalkButton />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-white hover:bg-[#F564A9] px-4 py-2 rounded-full transition-all duration-200"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <LetsTalkButton className="w-full" />
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}


