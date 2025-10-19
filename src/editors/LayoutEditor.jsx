import { Container, Input, Select } from "../component";
import { useConfig } from "../context/ConfigProvider";
import EditorPanel from "../EditorPanel";

export default function LayoutEditor() {
    const { config, setConfig, updateConfig } = useConfig();
    
    return (
        <EditorPanel title="General Layout">
            <Container >
                <Select 
                    label="Layout Style"
                    value={config.layout} 
                    onChange={(e) => setConfig(prev => ({...prev, layout: e.target.value}))}
                    options={[
                        {value: "layout-1", label: "Layout 1 (Image Left)"},
                        {value: "layout-2", label: "Layout 2 (Image Right)"}
                    ]}
                />
            </Container>
            <Container>
                 <Input 
                    label="Font Weight"
                    type="number" 
                    min="0" 
                    value={config.general.cardBorderRadius} onChange={(e) => updateConfig('general', 'cardBorderRadius', Number(e.target.value))} 
                 />
            </Container>
            <Container>
                <Input 
                    label="Container Padding (px)"
                    type="range" min="0" 
                    value={config.general.containerPadding} 
                    onChange={(e) => updateConfig('general', 'containerPadding', Number(e.target.value))} 
                />
            </Container>
             <Container>
                <Input 
                    label="Section Background"
                    className='h-10 rounded-xl cursor-pointer 
                        border border-gray-300 bg-white
                        shadow-sm transition-all duration-200
                        focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                        hover:border-indigo-300 hover:shadow-md;'
                    type='color'
                    value={config.general.sectionBackgroundColor} 
                    onChange={(e) => updateConfig('general', 'sectionBackgroundColor', e.target.value)} />
            </Container>
        </EditorPanel>
    );
}