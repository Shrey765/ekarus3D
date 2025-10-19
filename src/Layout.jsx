import SideBar from "./SideBar"

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-300 font-sans">
      <div className="sticky top-0 min-h-screen overflow-y-auto fixed">
        <SideBar />
      </div>

      <div className="flex-1 sticky top-0 h-screen overflow-y-auto p-8">
        {children}
      </div>
    </div>
  );
}
