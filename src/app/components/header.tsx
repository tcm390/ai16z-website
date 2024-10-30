"use client";
import { useState, useRef, useEffect } from "react";
import DropDown from "./dropdown";
import Link from "next/link";

export default function Header() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isHoverMenu, setIsHoverMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdownElement = dropdownRef.current;
      const buttonElement = buttonRef.current;

      if (
        dropdownElement &&
        !dropdownElement.contains(event.target as Node) &&
        buttonElement &&
        !buttonElement.contains(event.target as Node)
      ) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const dropdownList = [
    { title: "Twitter", icon: "fab fa-twitter", link: "https://x.com/pmairca" },
    {
      title: "Discord",
      icon: "fa-brands fa-discord",
      link: "https://discord.gg/xe7HtWru",
    },
    {
      title: "GitHub",
      icon: "fab fa-github",
      link: "https://github.com/ai16z",
    },
    {
      title: "DAO",
      icon: "fas fa-project-diagram",
      link: "https://www.daos.fun/HeLp6NuQkmYB4pYWo2zYs22mESHXPQYzXbB8n4V98jwC",
    },
    { title: "F&Q", link: "/faq" },
  ];

  return (
    <header className="flex items-center py-2 sticky top-0 z-[9998] h-16 bg-white shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
      <div className="flex w-full p-6 h-[64px] items-center justify-between">
        <Link href="/" className="flex items-center w-[130px] h-[64px]">
          <svg
            width="215"
            height="50"
            viewBox="0 11.012 54.882 16.987"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[50%]"
          >
            <defs>
              <style>
                @import
                url(https://fonts.googleapis.com/css2?family=Mitr%3Aital%2Cwght%400%2C200%3B0%2C300%3B0%2C400%3B0%2C500%3B0%2C600%3B0%2C700&amp;display=swap);
              </style>
            </defs>
            <text
              style={{
                fontFamily: "Mitr",
                fontSize: "21px",
                fontWeight: "500",
                whiteSpace: "pre",
              }}
              x="0.088"
              y="26.578"
              fill="#40474f"
            >
              ai16z
            </text>
          </svg>
        </Link>

        <div
          className="relative"
          ref={dropdownRef}
          onClick={() => setIsDropdownVisible(!isDropdownVisible)}
        >
          <button
            className="w-6 h-6 flex flex-col gap-[5.5px] justify-center"
            ref={buttonRef}
            onMouseEnter={() => setIsHoverMenu(true)}
            onMouseLeave={() => setIsHoverMenu(false)}
          >
            <div
              className={` h-[2.5px] w-6 rounded-lg ${
                isDropdownVisible || isHoverMenu
                  ? "bg-[#ed8c00]"
                  : "bg-[#4B5058]"
              }`}
            ></div>
            <div
              className={` h-[2.5px] w-6 rounded-lg ${
                isDropdownVisible || isHoverMenu
                  ? "bg-[#ed8c00]"
                  : "bg-[#4B5058]"
              }`}
            ></div>
            <div
              className={` h-[2.5px] w-6 rounded-lg ${
                isDropdownVisible || isHoverMenu
                  ? "bg-[#ed8c00]"
                  : "bg-[#4B5058]"
              }`}
            ></div>
          </button>
          {isDropdownVisible && (
            <DropDown
              items={dropdownList}
              className={"absolute -right-3 top-10"}
            />
          )}
        </div>
      </div>
    </header>
  );
}
