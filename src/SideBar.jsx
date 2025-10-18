import React from 'react';

function SideBar(){

    return(
        <div className=" h-screen bg-slate-800 text-white w-64 p-4 flex flex-col">
            <div className="inline-block mt-0 pb-2.5 font-semibold border-b-2 border-[#007aff] font-['Poppins',_sans-serif]">
                <h1 className="text-[22px] font-bold ml-2.5">UI Customizer</h1>
            </div>
            <nav className='flex flex-col mt-10 gap-1'>
                 
            </nav>
        </div>
    )
}

export default SideBar;
