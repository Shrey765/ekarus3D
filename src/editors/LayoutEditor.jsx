import { Container, Input, Select } from "../component";
import { useConfig } from "../context/ConfigProvider";

export default function LayoutEditor() {
    const { config, setConfig, updateConfig } = useConfig();
    
    return (
        <EditorSection title="General Layout">
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
                    type="number" 
                    min="0" 
                    value={config.general.cardBorderRadius} onChange={(e) => updateConfig('general', 'cardBorderRadius', Number(e.target.value))} 
                 />
            </Container>
            <Container>
                <Input 
                    label="Container Padding (px)"
                    type="number" min="0" 
                    value={config.general.containerPadding} 
                    onChange={(e) => updateConfig('general', 'containerPadding', Number(e.target.value))} 
                />
            </Container>
             <Container>
                <Input 
                    label="Section Background"
                    clasName='color-input'
                    type='color'
                    value={config.general.sectionBackgroundColor} 
                    onChange={(e) => updateConfig('general', 'sectionBackgroundColor', e.target.value)} />
            </Container>
        </EditorSection>
    );
}