
export default function Button({
    children,
    className='',
    ...props
}){
    return (
        <div>
            <button 
            {...props}
            className={className}
            >{children}</button>
        </div>
    )
}