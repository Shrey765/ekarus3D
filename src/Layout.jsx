import { useState } from "react";
import SideBar from "./SideBar";

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-300 font-sans">
      {/* Mobile top bar */}
      <div className="lg:hidden sticky top-0 z-30 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
        <div className="mx-auto max-w-7xl w-full px-4 py-3 flex items-center justify-between">
          <h1 className="text-sm font-semibold text-gray-800">UI Customizer</h1>
          <button
            type="button"
            onClick={() => setIsSidebarOpen(true)}
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium
                       bg-gray-900 text-white hover:bg-gray-800 active:scale-[0.99]
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            aria-expanded={isSidebarOpen}
            aria-controls="mobile-sidebar"
          >
            Open Panel
          </button>
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden ${isSidebarOpen ? "" : "pointer-events-none"}`}>
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${isSidebarOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
        <aside
          id="mobile-sidebar"
          className={`absolute left-0 top-0 h-full w-80 max-w-[85vw] transform transition-transform
                      bg-gray-600 shadow-xl ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="h-full overflow-y-auto custom-scroll">
            <SideBar />
          </div>
        </aside>
      </div>

      {/* Desktop layout */}
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-4 lg:py-8 lg:flex lg:gap-8">
        <aside className="hidden lg:block lg:w-80 xl:w-96 lg:sticky lg:top-8 lg:h-[calc(100dvh-4rem)] lg:overflow-y-auto custom-scroll">
          <SideBar />
        </aside>

        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}
