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
    <div className="w-[360px] bg-white border-r border-gray-200 flex flex-col shadow-sm">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-indigo-50 to-white border-b border-gray-200 px-4 py-3">
        <h3 className="text-base font-semibold text-gray-800 tracking-[-0.01em]">
          UI Customizer
        </h3>
        <p className="text-xs text-gray-500 mt-0.5">
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
      <footer className="sticky bottom-0 z-10 bg-white/95 backdrop-blur border-t border-gray-200 p-4">
        <Button
          onClick={handleExport}
          className="w-full text-sm font-semibold py-2.5 px-4 rounded-lg
                     bg-indigo-600 text-white hover:bg-indigo-700
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
