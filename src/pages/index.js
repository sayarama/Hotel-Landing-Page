
export default function Home() {
  return (
    <>
      <div className="bg-hero w-full h-screen bg-no-repeat bg-cover bg-center ">
        <div className="navbar items-center flex justify-between w-3/4 m-auto p-5">
          <h1 className="font-Edu text-sm font-bold">VIPP</h1>
          <button className="bg-green-600 hover:bg-green-800 text-xs p-2 rounded-lg font-Poppins">Make a reservation</button>
        </div>
        <hr className="w-3/4 m-auto"/>

        <div className="m-auto w-3/4 h-3/4 flex flex-col items-center justify-center text-center">
          <p className="text-3xl font-Poppins text-5xl font-bold">As soon as you check in at <br/> the hotel it's fully booked</p>
          <p className="text-sm mt-6 font-Poppins">The Vipp Hotel is not a hotel in the traditional sense. Instead of having many rooms in one location, we offer unique rooms at various destinations.</p>
        </div>
      </div>
    </>
  )
}
