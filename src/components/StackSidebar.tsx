import type { Technology } from '../types/technology'

interface StackSidebarProps {
  stack: Technology[]
  onRemove: (technology: Technology) => void
  onClearAll: () => void
}

const StackSidebar = ({ stack, onRemove, onClearAll }: StackSidebarProps) => {
  return (
    <aside className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm ">
      <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>

      {stack.length === 0 ? (
        <>
          <p className="mt-1 text-sm text-gray-400">No technologies selected yet.</p>
          <div className="mt-4 rounded-lg border border-dashed border-gray-200 p-6 text-center text-sm text-gray-400">
            Your stack is empty.
          </div>
        </>
      ) : (
        <>
          <p className="mt-1 text-sm text-gray-400">
            {stack.length} Technology Selected
          </p>

          <ul className="mt-4 space-y-3">
            {stack.map((tech) => (
              <li
                key={tech.id}
                className="stack-item-enter flex items-center justify-between rounded-lg border border-gray-100 p-3 transition-all duration-200 hover:border-gray-200"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-8 w-8 object-contain"
                  />
                  <div>
                    <p className="text-sm font-medium text-slate-900">{tech.name}</p>
                    <p className="text-xs text-gray-400">{tech.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(tech)}
                  className="text-gray-400 transition hover:scale-110 hover:text-red-500"
                  aria-label={`Remove ${tech.name}`}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={onClearAll}
            className="mt-5 w-full rounded-full border border-red-200 py-2.5 text-sm font-medium text-red-500 transition hover:bg-red-50 active:scale-[0.98]"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  )
}

export default StackSidebar