import { useState } from "react";
import { useConfig } from "./context/ConfigProvider";

const AccordionItem = ({ id, title, current, children }) => {
  const { config } = useConfig();
  const [activeAccordion, setActiveAccordion] = useState("arms");

  const open = activeAccordion === id;

  return (
    <div
      className="border bg-white rounded-lg overflow-hidden transition-shadow hover:shadow-sm"
      style={{
        borderRadius: `${config.general.cardBorderRadius}px`,
        borderColor: config.stroke.color,
        borderWidth: `${config.stroke.weight}px`,
      }}
    >
      <button
        className={`w-full flex justify-between items-center gap-3 px-3 sm:px-4 py-3 text-left bg-white hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500`}
        onClick={() => setActiveAccordion(open ? null : id)}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
      >
        <span className="font-medium text-gray-800">{title}</span>
        <span className="shrink-0 inline-flex items-center gap-2 text-xs sm:text-sm text-gray-500">
          {current}
          <svg
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : "rotate-0"}`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.167l3.71-3.937a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      <div
        id={`${id}-panel`}
        className={`grid transition-[grid-template-rows] duration-200 ease-out
                    ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-4 bg-white">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
