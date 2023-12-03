import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className='fixed w-full top-0 left-0 bg-white shadow-xl flex justify-between items-center p-1'>
        <div className="mx-2">
          <Image 
            src={"/farmlogo.png"}
            height={128}
            width={128}
            alt='Fact Farm Directory'
          />
        </div>
        <div className="">
          <button className="text-black px-4 py-2  mr-2 border-2 border-transparent transition duration-300 hover:border-black">Add Your Farm</button>
          <button className="text-black px-4 py-2 mx-2 border-2 border-transparent transition duration-300 hover:border-black">Farmer Login</button>
        </div>
      </nav>
      <main className="flex items-center h-screen">
        <div className="mx-auto">
          <form action="" className="w-72">
            <input
              className="border border-gray-300 p-2 rounded-md w-full" 
              type="text"
              placeholder="Search By Address or Location"
            />
            <button className="bg-[rgb(107,168,79)] text-white px-4 py-2 rounded-md mt-2">Search</button>
          </form>
        </div>
      </main>
    </>
  );
}
