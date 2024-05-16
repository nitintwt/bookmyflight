

export default function HeroSection() {
  return (
    <section className="relative w-full  overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/80 dark:to-gray-950/90" />
      <div className="relative z-10 container px-4 md:px-6 py-12 md:py-16 lg:py-20 flex flex-col items-center justify-center h-full text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          Find Your Next Adventure
        </h1>
        <p className="max-w-[600px] text-lg sm:text-xl text-gray-200">
          Search and book flights to destinations around the world with our easy-to-use platform.
        </p>
      </div>
    </section>
  )
}