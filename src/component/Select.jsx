import {useId, forwardRef} from 'react';

const Select = forwardRef(function Select({
    label,
    className,
    options = [],
    ...props
}, ref){
    const id = useId();
    return(
        <div className='select'>
            {label && <label className='label' htmlFor={id}>
                {label}
            </label>}
            <select 
                id={id}
                className={`w-full text-sm border-gray-300 rounded-md shadow-sm 
                    focus:ring-indigo-500 focus:border-indigo-500 ${className}`}
                ref={ref}
                {...props}
            >
                {options?.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
})

export default Select;

{/*const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' }
];*/}