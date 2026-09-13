
import bannerImage from './assets/banner-stack.png'

const Hero = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex min-h-500px max-w-7xl flex-col items-center px-6 py-12 lg:flex-row lg:py-16">

        {/* Left Content */}
        <div className="w-full text-center lg:w-1/2 lg:text-left">

          <h1 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Build Your Ideal
            <br />

            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-500 sm:text-lg lg:mx-0">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-row justify-center gap-3 lg:justify-start lg:mt-10">

            <button className="rounded-lg bg-linear-to-r from-orange-500 to-pink-500 px-4 py-3 text-sm font-medium text-white transition hover:opacity-90 sm:px-5">
              Explore Technologies
            </button>

            <button className="rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 sm:px-8">
              Learn More
            </button>

          </div>

        </div>

        {/* Right Image */}
        <div className="mt-10 flex w-full justify-center lg:mt-0 lg:w-1/2">

          <img
            src={bannerImage}
            alt="Development stack"
            className="w-[80%] max-w-350px object-contain"
          />

        </div>

      </div>
    </section>
  )
}

export default Hero