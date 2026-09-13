import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import './index.css'
import Nav from './Nav'
import Hero from './Hero'
import technologiesData from './data/technologies.json'
import TechnologyCard from './components/TechnologyCard'
import StackSidebar from './components/StackSidebar'
import type { Technology } from './types/technology'
import Footer from './Footer'

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [stack, setStack] = useState<Technology[]>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setTechnologies(technologiesData)
      setIsLoading(false)
    }, 400)

    return () => clearTimeout(timer)
  }, [])

  const handleAdd = (tech: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id)
    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack`)
      return
    }
    setStack((prev) => [...prev, tech])
    toast.success('Added to Stack')
   
  }

  const handleRemove = (tech: Technology) => {
    setStack((prev) => prev.filter((item) => item.id !== tech.id))
    toast.info(`${tech.name} removed from your stack`)
  }

  const handleClearAll = () => {
    setStack([])
    toast.info('Stack cleared')
  }

  return (
    <>
      <Nav />
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-10">

        <h2 className="text-3xl font-bold text-slate-900">
          Explore the <span className="text-pink-600">Technologies</span>
        </h2>
        <p className="mt-1 text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>

        {isLoading ? (
          <div className="mt-16 flex flex-col items-center justify-center gap-3 text-gray-400">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-200 border-t-pink-500" />
            <p className="text-sm">Loading technologies...</p>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-6 items-start">

            {/* Card grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {technologies.map((tech) => (
                <TechnologyCard
                  key={tech.id}
                  technology={tech}
                  isAdded={stack.some((item) => item.id === tech.id)}
                  onAdd={handleAdd}
                />
              ))}
            </div>

            {/* Sidebar */}
            <StackSidebar
              stack={stack}
              onRemove={handleRemove}
              onClearAll={handleClearAll}
            />

          </div>
        )}
      </section>

      <Footer />
    </>
  )
}

export default App