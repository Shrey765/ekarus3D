
export default function EditorPanel({title, children}){

    return(
        <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-gray-600 border-b border-gray-200 pb-2 mb-4">{title}</h4>
            <div className="space-y-4">{children}</div>
        </div>
    )
}