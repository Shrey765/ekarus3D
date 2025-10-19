import React, { useEffect, useState } from 'react';
import LayoutEditor from './editors/LayoutEditor';
import TypographyEditor from './editors/TypographyEditor';
import ButtonEditor from './editors/ButtonEditor';
import { useConfig } from './context/ConfigProvider';
import { Button } from './component';

function SideBar() {
  const { config } = useConfig();
  const [collapsed, setCollapsed] = useState(false);

  // hydrate persisted state
  useEffect(() => {
    const saved = localStorage.getItem('sidebarCollapsed');
    if (saved != null) setCollapsed(saved === 'true');
  }, []);

  // persist on change
  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', String(collapsed));
  }, [collapsed]);

  const toggleCollapsed = () => setCollapsed(c => !c);

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
<<<<<<< HEAD
    <div className="w-full lg:w-[360px] bg-gray-600 border-r border-gray-300 flex flex-col shadow-sm">
=======
    <aside
      className={[
        // base
        'bg-gray-600 border-r border-gray-300 flex flex-col shadow-sm',
        'transition-all duration-300 ease-in-out',
        'overflow-hidden',                 // prevents content peeking during width animation
        // width modes
        collapsed ? 'w-16' : 'w-[360px]',
        // subtle gradient & inner border accent when collapsed
        collapsed ? 'bg-gradient-to-b from-gray-700 to-gray-600' : '',
      ].join(' ')}
      aria-label="Editor sidebar"
    >
>>>>>>> 29fa19e (images and hamberger)
      {/* Header */}
      <div
        className={[
          'sticky top-0 z-10 border-b border-white/10',
          'px-2 py-2',
          // blur + tint for premium feel while sticky
          'backdrop-blur supports-[backdrop-filter]:bg-gray-600/80',
          // layout changes when collapsed
          collapsed ? 'flex items-center justify-center' : 'flex items-center gap-2 px-3 py-3',
        ].join(' ')}
      >
        {/* Hamburger */}
        <button
          type="button"
          onClick={toggleCollapsed}
          aria-pressed={collapsed}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          title={collapsed ? 'Expand' : 'Collapse'}
          className={[
            'inline-flex items-center justify-center rounded-md text-white',
            'h-9 w-9',
            'ring-offset-0 focus:outline-none focus:ring-2 focus:ring-white/70',
            'hover:bg-white/10 active:scale-[0.98] transition',
            // add a subtle border glow when collapsed
            collapsed ? 'border border-white/10 shadow-sm' : '',
          ].join(' ')}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Title / Subtitle (hidden when collapsed) */}
        <div
          className={[
            'overflow-hidden transition-all duration-300',
            collapsed ? 'opacity-0 max-w-0' : 'opacity-100 max-w-[260px] ml-2',
          ].join(' ')}
        >
          <h3 className="text-base font-semibold text-white tracking-[-0.01em] leading-5">
            UI Customizer
          </h3>
          <p className="text-[11px] text-white/85 mt-0.5 leading-4">
            Tweak layout, type & buttons
          </p>
        </div>
      </div>

      {/* Content */}
      <nav
        className={[
          'flex-grow custom-scroll transition-opacity duration-200',
          collapsed ? 'opacity-0 pointer-events-none' : 'opacity-100',
        ].join(' ')}
        aria-hidden={collapsed}
      >
        {!collapsed && (
          <div className="px-4 py-4 space-y-4">
            <LayoutEditor />
            <TypographyEditor />
            <ButtonEditor />
          </div>
        )}
      </nav>

      {/* Footer */}
      <footer
        className={[
          'sticky bottom-0 z-10 border-t border-white/10',
          'backdrop-blur supports-[backdrop-filter]:bg-gray-600/80',
          collapsed ? 'p-2' : 'p-4',
        ].join(' ')}
      >
        {collapsed ? (
          // Compact round icon button when collapsed
          <button
            type="button"
            onClick={handleExport}
            title="Export Configuration (JSON)"
            aria-label="Export Configuration (JSON)"
            className={[
              'mx-auto flex h-10 w-10 items-center justify-center rounded-full',
              'bg-sky-600 text-white hover:bg-indigo-900',
              'focus:outline-none focus:ring-2 focus:ring-white/70',
              'shadow-md transition',
            ].join(' ')}
          >
            {/* Download icon */}
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" d="M12 3v12m0 0l-4-4m4 4l4-4" />
              <path strokeLinecap="round" d="M5 21h14" />
            </svg>
          </button>
        ) : (
          <Button
            onClick={handleExport}
            className="w-full text-sm font-semibold py-2.5 px-4 rounded-lg
                       bg-sky-600 text-white hover:bg-indigo-900
                       focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                       transition-all shadow"
          >
            Export Configuration (JSON)
          </Button>
        )}
      </footer>

      {/* Side accent when collapsed (purely cosmetic) */}
      {collapsed && (
        <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-white/10" />
      )}
    </aside>
  );
}

export default SideBar;
