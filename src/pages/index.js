export default function Home() {
  return (
    <>
      <div className="bg-hero w-full h-screen bg-no-repeat bg-cover bg-center ">
        <div className="navbar items-center flex justify-between w-3/4 m-auto p-5">
          <h1 className="font-Edu text-sm font-bold">VIPP</h1>
          <button className="bg-emerald-600 hover:bg-emerald-800 text-xs p-2 rounded-lg font-Poppins">
            Make a reservation
          </button>
        </div>
        <hr className="w-3/4 m-auto" />

        <div className="m-auto w-3/4 h-3/4 flex flex-col items-center justify-center text-center">
          <p className="text-2xl font-Poppins text-5xl font-bold">
            As soon as you check in at <br /> the hotel it's fully booked
          </p>
          <p className="text-xs mt-6 font-Poppins">
            The Vipp Hotel is not a hotel in the traditional sense. Instead of
            having many rooms in one location, we offer unique rooms at various
            destinations.
          </p>
        </div>
      </div>

      <div className="section-1 w-screen p-5 h-screen bg-white  ">
        <hr />
        <p className="text-black font-Edu text-center">VIPP</p>
        <hr />
        <div className="font-Poppins w-full h-full flex items-center justify-center text-center">
          <div className="section-content">
            <p className="text-black text-5xl font-bold">
              About the Vipp Hotel
            </p>
            <p className="text-black mt-5 text-xs">
              At the Vipp Hotel, we intive you to experience our <br />{" "}
              philosophy of design in places out of the ordinary.
              <br />
              Our hotel is no like many others, Instead of having all our rooms
              in one place weoffer a curated selection of destinations for
              unqiue experiences.
            </p>

            <div className="button flex mt-8 items-center w-full justify-between">
              <button className="bg-emerald-700 p-3 rounded-lg">
                Book a Room
              </button>
              <button className="text-black">Read More</button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
