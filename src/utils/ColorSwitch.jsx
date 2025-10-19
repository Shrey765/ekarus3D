
export default function ColorSwatch({
  name,          
  value,         
  label,         
  color,         
  defaultChecked 
}) {
  const id = `${name}-${value}`;

  return (
    <div className="relative">
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        className="peer sr-only"
        aria-label={label}
      />
      <label
        htmlFor={id}
        className="block w-10 h-10 rounded-full border border-white shadow cursor-pointer ring-0 ring-offset-1
                   transition-transform duration-150 active:scale-[0.98]
                   peer-checked:ring-2 peer-checked:ring-indigo-500
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        style={{ background: color }}
        title={label}
      />
    </div>
  );
}
