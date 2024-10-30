import Link from "next/link";

interface DropDownItem {
  title: string;
  icon?: string;
  link: string;
}

interface DropDownProps {
  items: DropDownItem[];
  className: string;
}

const DropDown: React.FC<DropDownProps> = ({ items, className }) => {
  return (
    <div
      className={`bg-white border border-gray-300 rounded shadow-md w-64 ${className}`}
    >
      {items.map((item, index) => (
        <Link
          href={item.link}
          key={index}
          className=" flex items-center gap-3 p-3 hover:bg-gray-100"
        >
          {item.icon && <div className={`${item.icon}`} />}
          <div className="text-gray-800 font-medium hover:text-gray-600 focus:outline-none">
            {item.title}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DropDown;
