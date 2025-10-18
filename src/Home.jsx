import { useConfig } from "./context/ConfigProvider"
import { Button } from "./component";
import AccordionItem from "./AccordionItem";

export default function Home(){
    const {config} = useConfig();
    

  const layoutClasses = config.layout === 'layout-1' ? 'flex-row' : 'flex-row-reverse';
  const galleryLayoutClasses = config.layout === 'layout-1' ? 'flex-row' : 'flex-col-reverse';
  const thumbnailDirectionClasses = config.layout === 'layout-1' ? 'flex-col' : 'flex-row';

  return (
    <div
      className={`max-w-5xl w-full mx-auto shadow-xl flex gap-8 ${config.typography.fontFamily} ${config.typography.fontWeight} ${layoutClasses}`}
      style={{
        fontSize: `${config.typography.fontSize}px`,
        backgroundColor: config.general.sectionBackgroundColor,
        padding: `${config.general.containerPadding}px`,
        borderRadius: `${config.general.cardBorderRadius}px`,
        borderColor: config.stroke.color,
        borderWidth: `${config.stroke.weight}px`,
      }}
    >
      {/* Gallery Section */}
      <div className={`flex-1 flex gap-4 ${galleryLayoutClasses}`}>
        <div className={`flex ${thumbnailDirectionClasses} ${config.gallery.alignment}`} style={{ gap: `${config.gallery.spacing}px` }}>
          {/* {thumbnailUrls.map((url, index) => (
             <img key={index} src={url} alt={`thumbnail ${index+1}`} className={`w-16 h-16 object-cover cursor-pointer ${index === 0 ? 'ring-2 ring-indigo-500' : ''}`} style={{borderRadius: `${config.gallery.borderRadius}px`}} />
          ))} */}
        </div>
        <div className="flex-grow">
          {/* <img src={mainImageUrl} alt="Main product" className="w-full h-auto object-cover rounded-lg" /> */}
        </div>
      </div>
      
      {/* Customization Panel */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">Cozy Lounge Chair</h3>
        
        <div className="space-y-3">
            <AccordionItem id="arms" title="1. Arms" current="Fixed Arms">
                <div className="text-sm">
                    <p className="font-medium mb-2">Arms Finish</p>
                    <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-yellow-800 ring-2 ring-offset-1 ring-indigo-500 cursor-pointer"></div>
                        <div className="w-8 h-8 rounded-full bg-yellow-600 cursor-pointer"></div>
                    </div>
                </div>
            </AccordionItem>
            <AccordionItem id="leather" title="2. Leather" current="...">...</AccordionItem>
            <AccordionItem id="legs" title="3. Legs Finish" current="...">...</AccordionItem>
        </div>
        
        <div className="mt-auto pt-6 border-t" style={{ borderColor: config.stroke.color }}>
            <div className="flex justify-between items-center mb-4">
                <div>
                    <p className="text-sm text-gray-500">Product Price</p>
                    <p className="text-2xl font-bold text-gray-900">$ 200</p>
                </div>
            </div>
             <div className={`flex ${config.button.alignment}`}>
                <Button
                    className={`text-white font-bold py-3 px-6 transition-all duration-200 ${config.button.shadow}`}
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