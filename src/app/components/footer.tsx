"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
const socialList = [
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
];

const addressList = [
  {
    title: "ai16z",
    address: "HeLp6NuQkmYB4pYWo2zYs22mESHXPQYzXbB8n4V98jwC",
  },
  {
    title: "degenai",
    address: "Gu3LDkn7Vx3bmCzLafYNKcDxv2mH7YN44NJZFXnypump",
  },
];
export default function Footers() {
  const [copyLink, setCopyLink] = useState<string | null>(null);
  const timeoutId = useRef<number | undefined>(undefined);
  useEffect(() => {
    if (copyLink) {
      navigator.clipboard.writeText(copyLink);
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
        timeoutId.current = undefined;
      }
      timeoutId.current = window.setTimeout(() => {
        setCopyLink(null);
      }, 1000);
    }
  }, [copyLink]);
  return (
    <div className="flex flex-col md:flex-row sticky justify-between text-white w-full py-10 px-6 md:px-32 md:min-h-48 h-min-64 bg-gray-500 z-[9998]">
      <Link href="/" className="flex items-start">
        <svg
          width="215"
          height="50"
          viewBox="0 11.012 54.882 16.987"
          xmlns="http://www.w3.org/2000/svg"
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
            x="-9"
            y="26.578"
            fill="white"
          >
            ai16z
          </text>
        </svg>
      </Link>
      <div className="flex flex-col gap-3 md:gap-6 justify-between my-6 md:my-0">
        <div className="flex flex-col gap-3 md:gap-1">
          {addressList.map((item, index) => {
            return (
              <div key={index} className="text-[1rem] md:text-[1.1rem]">
                <span className="mr-2">{item.title + ":"}</span>
                <div className="font-semibold inline mr-2">
                  {item.address.slice(0, 4) + "..." + item.address.slice(-4)}
                </div>
                {copyLink === item.address ? (
                  <i className="w-3 h-3 fa-solid fa-circle-check" />
                ) : (
                  <i
                    className="w-3 h-3 fa-regular fa-copy hover:opacity-50 cursor-pointer"
                    onClick={() => {
                      setCopyLink(item.address);
                    }}
                  />
                )}
              </div>
            );
          })}

          <div className="border-b border-white border-1 my-3 md:border-0 md:my-0" />
        </div>
        <ul className="flex gap-2 w-full h-full">
          {socialList.map((social, index) => {
            return (
              <li key={index}>
                <Link
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-2 w-10 h-10 bg-[#5f636a]"
                >
                  <div className={`${social.icon}`}></div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
