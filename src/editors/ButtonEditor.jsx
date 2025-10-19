import { Container, Input, Select } from "../component";
import { useConfig } from "../context/ConfigProvider";
import EditorPanel from "../EditorPanel";

export default function ButtonEditor() {
    const { config, updateConfig } = useConfig();
    const { borderRadius, shadow, alignment, backgroundColor, textColor } = config.button;

    return (
        <EditorPanel title="Button">
            <Container>
                <Input 
                    label="Border Radius (px)"
                    type="range" 
                    min="0" 
                    max="25"
                    value={borderRadius} 
                    onChange={(e) => updateConfig('button', 'borderRadius', Number(e.target.value))}
                 />
            </Container>
            <Container>
                <Select 
                    label="Shadow"
                    value={shadow} 
                    onChange={(e) => updateConfig('button', 'shadow', e.target.value)}
                    options={[
                        {value: "shadow-none", label: "None"},
                        {value: "shadow-sm", label: "Small"},
                        {value: "shadow-md", label: "Medium"},
                        {value: "shadow-lg", label: "Large"}
                    ]}
                />
            </Container>
            <Container>
                <Select 
                    label="Alignment"
                    value={alignment} 
                    onChange={(e) => updateConfig('button', 'alignment', e.target.value)}
                    options={[
                        {value: "justify-start", label: "Left"},
                        {value: "justify-center", label: "Center"},
                        {value: "justify-end", label: "Right"},
                    ]}
                />
            </Container>
            <Container>
                <Input 
                    label="Background Color"
                    value={backgroundColor} 
                    type='color'
                    className="color-input"
                    onChange={(e) => updateConfig('button', 'backgroundColor', e.target.value)}
                 />
            </Container>
            <Container >
                <Input 
                    label="Text Color"
                    type='color'
                    className="color-input ml-7"
                    value={textColor} onChange={(e) => updateConfig('button', 'textColor', e.target.value)} 
                />
            </Container>
        </EditorPanel>
    );
}