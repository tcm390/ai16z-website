import Link from "next/link";

export default function Footers() {
  return (
    <div className="flex flex-col md:flex-row sticky items-center justify-between text-white w-full p-6 md:p-16 md:h-36 h-64 bg-gray-500 z-[9998]">
      <Link href="/">
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
            x="0.088"
            y="26.578"
            fill="white"
          >
            ai16z
          </text>
        </svg>
      </Link>
      <div className="flex flex-col gap-6">
        <div>
          <div className="text-[12px] md:text-[1rem]">
            <strong className="mr-1">ai16z:</strong>
            <div className="block md:inline">
              HeLp6NuQkmYB4pYWo2zYs22mESHXPQYzXbB8n4V98jwC
            </div>
          </div>
          <div className="text-[12px] md:text-[1rem]">
            <strong className="mr-1">degenai:</strong>
            <div className="block md:inline">
              Gu3LDkn7Vx3bmCzLafYNKcDxv2mH7YN44NJZFXnypump
            </div>
          </div>
        </div>
        <ul className="flex gap-2 w-full justify-end">
          <li>
            <Link
              href="https://x.com/pmairca"
              target="_blank"
              rel="noopener noreferrer"
              className="fab fa-twitter bg-[#5f636a] p-2 w-8 h-8"
            ></Link>
          </li>
          <li>
            <Link
              href="https://discord.gg/xe7HtWru"
              target="_blank"
              rel="noopener noreferrer"
              className="fa-brands fa-discord bg-[#5f636a] p-2 w-8 h-8"
            ></Link>
          </li>
          <li>
            <Link
              href="https://github.com/ai16z"
              target="_blank"
              rel="noopener noreferrer"
              className="fab fa-github bg-[#5f636a] p-2 w-8 h-8"
            ></Link>
          </li>
          <li>
            <Link
              href="https://www.daos.fun/HeLp6NuQkmYB4pYWo2zYs22mESHXPQYzXbB8n4V98jwC"
              target="_blank"
              rel="noopener noreferrer"
              className="fas fa-project-diagram bg-[#5f636a] p-2 w-8 h-8"
            ></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
