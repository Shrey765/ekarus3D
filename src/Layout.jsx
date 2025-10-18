import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"

export default function Layout(){
    return(
        <div className="flex h-screen overflow-hidden">
            <SideBar />
            <div className="flex-1 overflow-y-auto main-view active">
                <Outlet />
            </div>
        </div>
    )
}