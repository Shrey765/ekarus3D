
export default function EditorPanel({title, children}){

    return(
        <div className="mb-6 border-b border-b-[#f0f0f0] pb-4 last:border-b-0">
            <h3 className="font-['Inter',_sans-serif] font-semibold text-base text-[#333] mt-0 mb-4">{title}</h3>
            {children}
        </div>
    )
}