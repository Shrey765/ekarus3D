import SideBar from "./SideBar"

export default function Layout({children}){
    return(
        <div className="flex min-h-screen bg-gray-100 font-sans">
            <SideBar />
            <div className="flex-grow flex-center justify-center p-8">
                {children}
            </div>
        </div>
    )
}