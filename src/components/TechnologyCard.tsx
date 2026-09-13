import type { Technology } from '../types/technology'

interface TechnologyCardProps {
  technology: Technology
  isAdded: boolean
  onAdd: (technology: Technology) => void
}

const TechnologyCard = ({ technology, isAdded, onAdd }: TechnologyCardProps) => {
  return (
       <div
         className={`rounded-xl border p-4 shadow-sm transition ${
          isAdded ? 'border-pink-500' : 'border-gray-200'
           } bg-white`}
        >
      {/* Top section */}
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-8 w-8 object-contain"
        />
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-600">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-4 text-lg font-semibold text-slate-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 min-h-60px text-sm leading-5 text-gray-500">
        {technology.description}
      </p>

      {/* Information */}
      <div className="mt-4 flex items-center justify-between text-xs">
        <span className="rounded bg-gray-100 px-2 py-1 text-gray-600">
          {technology.category}
        </span>
        <span className="text-gray-500">{technology.difficulty}</span>
        <span className="text-gray-700">⭐ {technology.rating}</span>
      </div>

      {/* Add to Stack */}
      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-4 w-full rounded-lg py-2.5 text-sm font-medium transition ${
          isAdded
            ? 'cursor-not-allowed bg-pink-100 text-pink-700'
            : 'bg-slate-950 text-white hover:bg-slate-800'
        }`}
      >
       {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>

    </div>
  )
}

export default TechnologyCard