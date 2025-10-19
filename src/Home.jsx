import { useConfig } from "./context/ConfigProvider";
import { Button } from "./component";
import AccordionItem from "./AccordionItem";
import ColorSwatch from "./utils/ColorSwitch";

export default function Home() {
  const { config } = useConfig();

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
        className={`
          flex-1
          lg:sticky lg:top-6 lg:self-start
          lg:max-h-[calc(100vh-3rem)]
          overflow-auto custom-scroll
        `}
      >
        <div className={`flex flex-col ${galleryLayoutClasses} gap-4 lg:gap-6`}>
          <div
            className={`flex ${thumbnailDirectionClasses} ${config.gallery.alignment}
                        overflow-auto custom-scroll`}
            style={{ gap: `${config.gallery.spacing}px` }}
          >
            {/* Thumbnails placeholder */}
            <div
              className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 shrink-0 bg-gray-100 rounded-md border border-gray-200`}
              style={{ borderRadius: `${config.gallery.borderRadius}px` }}
            />
            <div
              className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 shrink-0 bg-gray-100 rounded-md border border-gray-200`}
              style={{ borderRadius: `${config.gallery.borderRadius}px` }}
            />
            <div
              className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 shrink-0 bg-gray-100 rounded-md border border-gray-200`}
              style={{ borderRadius: `${config.gallery.borderRadius}px` }}
            />
          </div>

          <div className="flex-grow min-w-0">
            {/* Main image placeholder */}
            <div
              className="w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border border-gray-200"
              role="img"
              aria-label="Main product preview"
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
          className="mt-4 sm:mt-6 bg-transparent pt-4 sm:pt-6 border-t bg-white/70 rounded-lg flex flex-wrap gap-4 justify-between items-center sticky bottom-0 backdrop-blur supports-[backdrop-filter]:bg-white/60"
          style={{ borderColor: config.stroke.color }}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Product Price
              </p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">$ 200</p>
            </div>
          </div>

          <div className={`flex ${config.button.alignment}`}>
            <Button
              className={`text-white ml-0 sm:ml-4 font-bold py-2.5 sm:py-3 px-5 sm:px-6 transition-all duration-200 ${config.button.shadow}
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
