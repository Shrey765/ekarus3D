import SideBar from "./SideBar"

export default function Layout({children}){
    return(
        <div className="flex min-h-screen bg-gray-100 font-sans border border-black-1000">
            <SideBar />
            <div className="flex-grow flex-center justify-center items-center p-8 ">
                {children}
            </div>
        </div>
    )
}