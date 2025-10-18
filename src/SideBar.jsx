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
    return(
        <div className="w-[350px] bg-gray-50 border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800">UI Customizer</h3>
            </div>
            <nav className='flex-grow overflow-y-auto p-4 space-y-4'>
                 <LayoutEditor />
                 <TypographyEditor />
                 <ButtonEditor />
            </nav>
            <footer className='p-4 border-t border-gray-200'>
                <Button 
                    onClick={handleExport}
                    className="w-full bg-indigo-600 text-white text-sm font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                >
                    Export Configuration (JSON)
                </Button>
            </footer>
        </div>
    )
}

export default SideBar;
