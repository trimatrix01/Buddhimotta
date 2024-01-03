import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      {/* Logo */}
      <Image
            src="/app.png"
            alt="Vercel Logo"
            className=""
            width={400}
            height={24}
            priority
          />

      <h1 className='text-5xl text-center font-bold text-white  dark:drop-shadow-[0_0_0.3rem_#ffffff70] '>
        <span className=''> Buddhimotta-  </span> <br />  Multiple Intelligence Test App
      </h1>

    </main>
  )
}
