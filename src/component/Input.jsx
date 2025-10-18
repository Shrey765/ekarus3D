import {useId, forwardRef} from 'react';

const Input = forwardRef(function Input({
    label,
    type = 'text',
    className,
    ...props
}, ref){
    const id = useId();

    return (
        <div className="flex justify-between items-center text-sm mb-[12px]">
            {label && <label className='label' htmlFor={id}>{label}</label>}
            <input 
                id={id}
                type={type}
                className={`w-full text-sm border-gray-300 rounded-md shadow-sm 
                    focus:ring-indigo-500 focus:border-indigo-500 ${className}`}
                {...props} 
                ref = {ref}
            />
        </div>
    )
})

export default Input;