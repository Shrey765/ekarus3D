import { useId, forwardRef } from 'react';

const Select = forwardRef(function Select(
  {
    label,
    className = '',
    options = [],
    ...props
  },
  ref
) {
  const id = useId();

  return (
    <div className="select w-full">
      {label && (
        <label className="label block text-xs font-medium text-gray-700 mb-1" htmlFor={id}>
          {label}
        </label>
      )}
      <select
        id={id}
        ref={ref}
        className={`w-full text-sm rounded-lg border border-gray-300 bg-white
                    px-3 py-2 shadow-sm
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                    disabled:opacity-60 disabled:cursor-not-allowed
                    transition-colors ${className}`}
        {...props}
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Select;
