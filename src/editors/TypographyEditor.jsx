import { Container, Select, Input } from "../component";
import EditorPanel from "../EditorPanel";
import { useConfig } from "../context/ConfigProvider";

export default function TypographyEditor() {
  const { config, updateConfig } = useConfig();
  const { fontFamily, fontWeight, fontSize } = config.typography;

  return (
    <EditorPanel title="Typography">
      <Container>
        <Select 
            label="Font Family"
            value={fontFamily} 
            onChange={(e) => updateConfig('typography', 'fontFamily', e.target.value)}
            options={[
                {value: "font-sans", label: "Inter (sans)"},
                {value: "font-serif", label: "Georgia (Serif)"},
                {value: "font-mono", label: "Menlo (Monospace)"}
            ]}
        />
      </Container>
      <Container>
        <Select 
            label="Font Weight"
            value={fontWeight} 
            onChange={(e) => updateConfig('typography', 'fontWeight', e.target.value)}
            options={[
                {value: "font-normal", label: "400 (Normal)"},
                {value: "font-medium", label: "500 (Medium)"},
                {value: "font-semibold", label: "600 (Semibold)"},
                {value: "font-bold", label: "700 (Bold)"}
            ]}
        />
      </Container>
      <Container>
        <Input 
            label="Font Size (px)"
            type="number" 
            min="10" 
            max="60" 
            value={fontSize} 
            onChange={(e) => updateConfig('typography', 'fontSize', Number(e.target.value))} 
        />
      </Container>
    </EditorPanel>
  );
}