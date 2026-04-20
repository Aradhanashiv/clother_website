import React from 'react'

const SubHeader = () => {
  return (
    <section className="bg-pink-50 w-full min-h-[25vh] relative mt-[70px]">
  <div className="absolute inset-0 flex flex-col justify-center items-center">
    <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-cyan-500 to-[#fc00ff] animate-pulse">
      Click. Buy. Smile.
    </p>
    <p className="mt-4 text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#fc00ff] to-blue-500 animate-bounce">
      Shopping Made Simple, Fast & Fun
    </p>
  </div>
</section>

  )
}

export default SubHeader