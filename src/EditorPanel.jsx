export default function EditorPanel({ title, children }) {
  return (
    <div
      className="bg-white border border-gray-200 rounded-xl p-4 shadow-xs
                 hover:shadow-sm transition-shadow"
    >
      <h4
        className="text-xs font-semibold tracking-wide text-gray-600
                   uppercase border-b border-gray-200 pb-2 mb-4"
      >
        {title}
      </h4>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
