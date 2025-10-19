import { useState } from "react";
import { useConfig } from "./context/ConfigProvider";

const AccordionItem = ({ id, title, current, children }) => {
  const { config } = useConfig();                     
  const [activeAccordion, setActiveAccordion] = useState("arms");  

  return (
    <div
      className="border border-gray-200"
      style={{
        borderRadius: `${config.general.cardBorderRadius}px`,
        borderColor: config.stroke.color,
        borderWidth: `${config.stroke.weight}px`,
      }}
    >
      <button
        className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100"
        onClick={() =>
          setActiveAccordion(activeAccordion === id ? null : id)
        }
      >
        <span className="font-medium text-gray-800">{title}</span>
        <span className="text-sm text-gray-500">{current}</span>
      </button>

      {activeAccordion === id && <div className="p-4 bg-white">{children}</div>}
    </div>
  );
};

export default AccordionItem;
