import { useState } from "react";
import { useConfig } from "./context/ConfigProvider";
import { Button } from "./component";
import AccordionItem from "./AccordionItem";
import ColorSwatch from "./utils/ColorSwitch";

export default function Home() {
const { config } = useConfig();

const thumbnailUrls = [
"/5195e6b8b861c8d84d8f55db44fef19e6d989ae7.png",
"/8228a33a12a1e22ec18d766745eab139594f0215.png",
"/bb042f9d31623b22d3915b62c0a3e1da09371b30.png"
];

const [activeImage, setActiveImage] = useState(thumbnailUrls[0]);

const layoutClasses =
config.layout === "layout-1" ? "lg:flex-row" : "lg:flex-row-reverse";
const galleryLayoutClasses =
config.layout === "layout-1" ? "lg:flex-row" : "lg:flex-col-reverse";
const thumbnailDirectionClasses =
config.layout === "layout-1" ? "flex-col" : "flex-row";

return (
<div
  className={`mx-auto w-full max-w-6xl mt-4 sm:mt-8 lg:mt-10
              shadow-xl hover:shadow-2xl transition-shadow
              flex flex-col lg:flex ${config.typography.fontFamily} ${config.typography.fontWeight} ${layoutClasses}
              ring-1 ring-gray-200 relative`}
  style={{
    fontSize: `clamp(14px, 1.2vw, ${config.typography.fontSize}px)`,
    backgroundColor: config.general.sectionBackgroundColor,
    padding: `clamp(12px, 3vw, ${config.general.containerPadding}px)`,
    borderRadius: `${config.general.cardBorderRadius}px`,
    borderColor: config.stroke.color,
    borderWidth: `${config.stroke.weight}px`,
  }}
>
  {/* -------- Left: Gallery (sticky) -------- */}
  <div
    className={`flex-1 lg:sticky lg:top-6 lg:self-start lg:max-h-[calc(100vh-3rem)]
                overflow-auto custom-scroll`}
  >
    <div className={`flex flex-col ${galleryLayoutClasses} gap-4 lg:gap-6`}>

      <div
className={`flex ${thumbnailDirectionClasses} ${config.gallery.alignment} overflow-auto custom-scroll`}
style={{ gap: `${config.gallery.spacing}px` }}
>
{thumbnailUrls.map((url) => (
<button
  key={url}
  onClick={() => setActiveImage(url)}
  className="shrink-0 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
  style={{ borderRadius: `${config.gallery.borderRadius}px` }}
  aria-label="Choose thumbnail"
>
  <img
    src={url}
    alt="Thumbnail"
    className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-cover rounded-md ${
      activeImage === url ? "ring-2 ring-indigo-500" : ""
    }`}
    style={{ borderRadius: `${config.gallery.borderRadius}px` }}
    loading="lazy"
  />
</button>
))}
</div>


      <div className="flex-grow min-w-0">
<img
  src={activeImage}
  alt="Main product preview"
  className="w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] object-contain rounded-lg border border-gray-200"
/>
</div>
    </div>
  </div>

  {/* -------- Right: Personalization (sticky) -------- */}
  <div
    className={`
      flex-1 flex flex-col mt-6 lg:mt-0 lg:ps-8
      lg:sticky lg:top-6 lg:self-start
      lg:max-h-[calc(100vh-3rem)]
      overflow-auto custom-scroll
    `}
  >
    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight mb-3 sm:mb-4 lg:mb-6">
      Cozy Lounge Chair
    </h3>

    <div className="space-y-3">
      {/* 1. Arms */}
      <AccordionItem id="arms" title="1. Arms" current="Fixed Arms">
        <div className="text-sm">
          <p className="font-medium mb-2 text-gray-700">Arms Finish</p>
          <div className="flex flex-wrap gap-3">
            <ColorSwatch
              name="arms"
              value="walnut-dark"
              label="Walnut (Dark)"
              color="#5C3B1E"
              defaultChecked
            />
            <ColorSwatch
              name="arms"
              value="walnut-light"
              label="Walnut (Light)"
              color="#C08A53"
            />
            <ColorSwatch name="arms" value="oak" label="Oak" color="#C9A975" />
            <ColorSwatch
              name="arms"
              value="black"
              label="Black"
              color="linear-gradient(135deg, #111 0%, #222 100%)"
            />
          </div>
        </div>
      </AccordionItem>

      {/* 2. Leather */}
      <AccordionItem id="leather" title="2. Leather" current="Pebble Grain">
        <div className="text-sm">
          <p className="font-medium mb-2 text-gray-700">Leather Color</p>
          <div className="flex flex-wrap gap-3">
            <ColorSwatch
              name="leather"
              value="espresso"
              label="Espresso"
              color="#3A2D2A"
              defaultChecked
            />
            <ColorSwatch
              name="leather"
              value="chestnut"
              label="Chestnut"
              color="#8B5A2B"
            />
            <ColorSwatch name="leather" value="tan" label="Tan" color="#D2A679" />
            <ColorSwatch name="leather" value="ivory" label="Ivory" color="#F5F1E8" />
            <ColorSwatch
              name="leather"
              value="charcoal"
              label="Charcoal"
              color="#2E2E2E"
            />
            <ColorSwatch name="leather" value="navy" label="Navy" color="#243B6B" />
          </div>
        </div>
      </AccordionItem>

      {/* 3. Legs */}
      <AccordionItem id="legs" title="3. Legs Finish" current="Matte Steel">
        <div className="text-sm">
          <p className="font-medium mb-2 text-gray-700">Legs Finish</p>
          <div className="flex flex-wrap gap-3">
            <ColorSwatch
              name="legs"
              value="matte-steel"
              label="Matte Steel"
              color="linear-gradient(135deg, #A3A3A3 0%, #9CA3AF 100%)"
              defaultChecked
            />
            <ColorSwatch
              name="legs"
              value="brushed-steel"
              label="Brushed Steel"
              color="linear-gradient(135deg, #BFC7CF 0%, #AAB2BB 100%)"
            />
            <ColorSwatch
              name="legs"
              value="matte-black"
              label="Matte Black"
              color="linear-gradient(135deg, #0B0B0B 0%, #1F2937 100%)"
            />
            <ColorSwatch
              name="legs"
              value="gold"
              label="Gold"
              color="linear-gradient(135deg, #C89D3C 0%, #F2D38A 100%)"
            />
          </div>
        </div>
      </AccordionItem>
    </div>

    <div
      className="mt-4 p-4 sm:mt-6 bg-transparent border-t bg-white/70 rounded-lg
                flex flex-col sm:flex-row gap-4 sticky bottom-0 backdrop-blur
                supports-[backdrop-filter]:bg-white/60"
      style={{ borderColor: config.stroke.color }}
    >
      <div>
        <p className="text-xs uppercase tracking-wide text-gray-500">
          Product Price
        </p>
        <p className="text-xl sm:text-2xl font-bold text-gray-900">$ 200</p>
      </div>

      <div className={`flex flex-1 ${config.button.alignment}`}>
        <Button
          className={`text-white font-bold py-2.5 sm:py-3 px-5 sm:px-6 transition-all duration-200 ${config.button.shadow}
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                      active:scale-[0.98]`}
          style={{
            backgroundColor: config.button.backgroundColor,
            color: config.button.textColor,
            borderRadius: `${config.button.borderRadius}px`,
          }}
        >
          Add to cart
        </Button>
      </div>
    </div>

  </div>
</div>
);
}
