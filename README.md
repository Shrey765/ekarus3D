🧩 UI Customizer – README
📌 Overview

The UI Customizer is a React-based visual editor that allows users to customize layout, typography, buttons, and gallery settings of a product display UI in real time. It reflects changes instantly in the preview panel (the Home component) and exports the full configuration as ui-config.json.

The editor is built with:

React + Context API (central state)

TailwindCSS (styling)

Modular editor components (LayoutEditor, TypographyEditor, ButtonEditor, etc.)

Sticky dual-panel layout (Sidebar + Live Preview)

✅ Component API

Below is an overview of the most important reusable components and their configurable props.

1. Layout
Prop	Type	Description
children	ReactNode	Anything rendered in the main preview area
2. SideBar

UI panel that hosts all editor controls (Layout, Typography, Button, etc.)

No props – it consumes config via context.

3. AccordionItem
Prop	Type	Description
id	string	Unique key for accordion logic
title	string	Accordion header text
current	string	Label for current selected option
children	ReactNode	Controls inside accordion
4. Input
Prop	Type	Notes
type	text, range, color, number, etc.	Automatically styles based on type (range + color are custom styled)
label	string	Optional label
...props	HTML Input Props	Supports all native input props
5. Select
Prop	Type	Description
label	string	Field label
options	Array<{ label, value }>	Dropdown options
...props	HTML Select Props	Same behavior as native select
6. ColorSwatch
Prop	Type	Description
name	string	Radio group name
value	string	Swatch value
color	string	Background color or gradient
label	string	Accessible label
defaultChecked	boolean	(optional) Set initial choice
⚙️ How the Editor Works (Architecture)
Layer	Responsibility
ConfigProvider (Context)	Stores global UI config, exposes updateConfig, setConfig
Editor Panels (Sidebar)	Update configuration via context
Preview (Home.jsx)	Reads config + renders UI dynamically
Export	Converts config to downloadable JSON

Flow:

User input →
Editor component →
updateConfig(section, property, value) →
Config Context state updates →
Home preview auto-rerenders with new config

🎨 Design Decisions & UX Improvements
✅ Sticky Dual-Panel Layout

Sidebar and Preview both remain visible

Each panel scrolls independently

Prevents UI from “jumping” or disappearing while customizing

✅ Custom Range & Color Inputs

type="range" → animated thumb, min/max labels, smooth track

type="color" → cute square picker + live HEX label

✅ Accordion for Sections

Keeps UI clean and scannable

Only one category expanded at a time (Arms, Leather, Legs, etc.)

✅ Responsive Color Swatches

Accessible radio-based swatches

Keyboard friendly

Auto-wrap layout for mobile

✅ Instant Feedback

Preview updates on every input change

Gives “design-tool” feel like Figma / Webflow

✅ Export Feature

One-click Export Configuration (JSON)

Useful for future back-end or theme-based systems
