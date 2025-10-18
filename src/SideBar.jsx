import React from 'react';
import EditorPanel from './EditorPanel';

function SideBar(){

    return(
        <div className="w-[350px] bg-gray-50 border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800">UI Customizer</h3>
            </div>
            <nav className='flex-grow overflow-y-auto p-4 space-y-4'>
                 <EditorPanel title="layout">
                    <Container 
                        label=""
                    />
                 </EditorPanel>
            </nav>
        </div>
    )
}

export default SideBar;
