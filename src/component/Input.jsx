import { useId, forwardRef } from 'react';

const Input = forwardRef(function Input(
  {
    label,
    type = 'text',
    className = '',
    ...props
  },
  ref
) {
  const id = useId();
  const isColor = type === 'color';
  const isRange = type === 'range';
  const rangeScopeId = useId();

  const min = props.min ?? 0;
  const max = props.max ?? 100;

  return (
    <div className={`w-full ${isColor ? "flex items-center gap-3" : ""}`} data-range-id={isRange ? rangeScopeId : undefined}>
      {label && (
        <label className="label block text-xs font-medium text-gray-700 mb-1" htmlFor={id}>
          {label}
        </label>
      )}

      {/* ---------- Color Input (Cute Styled) ---------- */}
      {isColor && (
        <div className="flex items-center gap-3 w-full">
          <input
            id={id}
            type="color"
            ref={ref}
            className={`color-cute-input ${className}`}
            {...props}
          />
          {/* live color value */}
          <span className="text-[11px] sm:text-xs text-gray-600 px-2 py-1 bg-gray-100 rounded-md font-mono">
            {props.value?.toUpperCase()}
          </span>
        </div>
      )}

      {/* ---------- Range Input (keep your NEW logic) ---------- */}
      {!isColor && isRange && (
        <>
          <input
            id={id}
            type="range"
            ref={ref}
            className={`w-full appearance-none h-2 rounded-full bg-gray-200
                        outline-none
                        focus:ring-2 focus:ring-indigo-500
                        transition-colors ${className}`}
            {...props}
          />
          <div className="mt-1.5 flex justify-between text-[11px] text-gray-500">
            <span>{min}</span>
            <span>{max}</span>
          </div>
          {/* scoped range CSS stays same */}
        </>
      )}

      {/* ---------- Normal input (your original blueprint) ---------- */}
      {!isColor && !isRange && (
        <input
          id={id}
          type={type}
          ref={ref}
          className={`w-full text-sm rounded-lg border border-gray-300 bg-white
                      px-3 py-2 shadow-sm
                      focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                      placeholder:text-gray-400
                      disabled:opacity-60 disabled:cursor-not-allowed
                      transition-colors ${className}`}
          {...props}
        />
      )}
    </div>
  );
});

export default Input;
