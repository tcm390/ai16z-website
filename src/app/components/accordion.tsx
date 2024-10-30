"use client";
import { useState } from "react";

interface AccordionItem {
  title: string;
  content: string; // assuming 'content' is what you want inside the accordion, adjust if needed
}

interface AccordionProps {
  accordionList: AccordionItem[];
}

export default function Accordion({ accordionList }: AccordionProps) {
  const [activeList, setActiveList] = useState(new Set());

  const handleClick = (title: string) => {
    setActiveList((prevList) => {
      const newList = new Set(prevList);
      if (newList.has(title)) {
        newList.delete(title);
      } else {
        newList.add(title);
      }
      return newList;
    });
  };
  return (
    <div className="flex flex-col gap-6 cursor-pointer">
      {accordionList.map((info, index) => {
        return (
          <div
            key={index}
            className={
              "bg-white w-full rounded-xl px-5 md:px-10 py-6 shadow-lg flex flex-col transition-all"
            }
            onClick={() => handleClick(info.title)}
          >
            <div
              className={`flex gap-6 justify-between items-center ${
                activeList.has(info.title) ? "text-accent" : ""
              }`}
            >
              <div className="font-medium text-[1rem] md:text-[1.3rem]">
                {info.title}
              </div>
              <span
                aria-hidden={true}
                className={`
                    border-r-2 border-b-2 border-[currentcolor] inline-block h-[8px] w-[8px] transition-all duration-300 ease-in-out
                    ${
                      activeList.has(info.title)
                        ? "transform -rotate-[135deg] translate-y-[2px]"
                        : "transform rotate-45 -translate-y-[2px]"
                    }
                `}
              />
            </div>

            <div
              className={`font-proxima font-[300] text-base text-[#4b5058] text-[0.8rem] md:text-[1.1rem] transition-all duration-300 ease-in-out ${
                activeList.has(info.title)
                  ? "max-h-[1000px] pt-1"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              {info.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
