import {useId, forwardRef} from 'react';

const Input = forwardRef(function Input({
    label,
    type = 'text',
    className,
    ...props
}, ref){
    const id = useId();

    return (
        <div>
            {label && <label className='label' htmlFor={id}>{label}</label>}
            <input 
                id={id}
                type={type}
                className={className}
                {...props}
                ref = {ref}
            />
        </div>
    )
})

export default Input;