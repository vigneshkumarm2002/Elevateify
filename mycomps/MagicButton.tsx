import React from 'react';

const MagicButton = ({
  label = "Strap In — Let's Fly",
  color = "bg-blue-400",
  hoverColor = "hover:bg-blue-600"
}) => {
  return (
    <button
    onClick={() => {
      window.location.href = "mailto:info@elevateify.com";
    }}
      className={`group inline-flex items-center gap-3 z-5 cursor-pointer mt-16 text-white font-semibold rounded-full px-2 py-2 pr-6 transition-colors duration-300 overflow-hidden whitespace-nowrap ${color} ${hoverColor}`}
    >
      <span className="relative w-8 h-8 flex-shrink-0 grid place-items-center rounded-full bg-white text-black overflow-hidden">
        {/* Icon (initial) */}
        <svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute transition-transform duration-300 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"
          width="10"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          />
        </svg>

        {/* Icon (hover) */}
        <svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute translate-x-[-150%] translate-y-[150%] transition-transform duration-300 delay-100 group-hover:translate-x-0 group-hover:translate-y-0"
          width="10"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          />
        </svg>
      </span>
      {label}
    </button>
  );
};

export default MagicButton;
