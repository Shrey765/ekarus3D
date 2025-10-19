import React from 'react';
import LayoutEditor from './editors/LayoutEditor';
import TypographyEditor from './editors/TypographyEditor';
import ButtonEditor from './editors/ButtonEditor';
import { useConfig } from './context/ConfigProvider';
import { Button } from './component';

function SideBar(){
  const { config } = useConfig();

  const handleExport = () => {
    const jsonString = JSON.stringify(config, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ui-config.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full lg:w-[360px] bg-gray-600 border-r border-gray-300 flex flex-col shadow-sm">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gray-600 from-indigo-50 to-white border-b border-gray-200 px-4 py-3">
        <h3 className="text-base font-bold text-white tracking-[-0.01em]">
          UI Customizer
        </h3>
        <p className="text-xs text-white mt-0.5">
          Tweak layout, type & buttons
        </p>
      </div>

      {/* Content */}
      <nav className="flex-grow overflow-y-auto px-4 py-4 space-y-4 custom-scroll">
        <LayoutEditor />
        <TypographyEditor />
        <ButtonEditor />
      </nav>

      {/* Footer */}
      <footer className="sticky bottom-0 z-10 bg-gray-600 backdrop-blur border-t border-gray-200 p-4">
        <Button
          onClick={handleExport}
          className="w-full text-sm font-semibold py-2.5 px-4 rounded-lg
                     bg-sky-600 text-white hover:bg-indigo-900
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                     transition-all"
        >
          Export Configuration (JSON)
        </Button>
      </footer>
    </div>
  );
}

export default SideBar;
