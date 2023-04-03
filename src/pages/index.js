import { FaHotel } from "react-icons/fa";
import Image from "next/image";
import footer from "../img/footer.jpg"



export default function Home() {
  return (
    <>
      <div className="bg-hero w-screen h-screen bg-no-repeat bg-cover bg-center ">
        <div className="navbar items-center flex justify-between w-3/4 m-auto p-5">
          <h1 className="font-Edu text-sm md:text-2xl font-bold">VIPP</h1>
          <button className="bg-emerald-600 hover:bg-emerald-800 text-xs p-2 rounded-lg font-Poppins md:text-xl">
            Make a reservation
          </button>
        </div>
        <hr className="w-3/4 m-auto" />

        <div className="m-auto w-3/4 h-3/4 flex flex-col items-center justify-center text-center">
          <p className=" font-Poppins text-5xl font-bold md:text-6xl">
            As soon as you check in at the hotel it's fully booked
          </p>
          <p className="text-xs md:text-lg mt-6 font-Poppins">
            The Vipp Hotel is not a hotel in the traditional sense. Instead of
            having many rooms in one location, we offer unique rooms at various
            destinations.
          </p>
        </div>
      </div>

      <div className="section-1 w-screen p-5 h-screen bg-white  ">
        <hr />
        <p className="text-black font-Edu text-center md:text-2xl">VIPP</p>
        <hr />
        <div className="font-Poppins w-full h-full flex items-center justify-center text-center">
          <div className="section-content md:w-3/4">
            <p className="text-black text-5xl md:text-6xl font-bold">
              About the Vipp Hotel
            </p>
            <p className="text-black mt-5 md:text-lg text-xs">
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

      <div className="section-2 bg-section2 w-screen h-screen bg-no-repeat bg-cover bg-center flex justify-center items-center">
        <div className="center p-8 text-center flex flex-col items-center">
          <p className="text-4xl font-bold font-Poppins md:text-6xl">An Untraditional Hotel</p>
          <p className="text-xs mt-5 md:text-xl">variety of different types of lodging experiences that break away from the conventional hotel model.</p>
          <FaHotel className="text-3xl md:text-5xl mt-5"/>
        </div>
      </div>

      <div className=" w-screen h-screen p-5 bg-white">
      <hr />
        <p className="text-black font-Edu text-center md:text-2xl">VIPP</p>
      <hr />
      <div className="section-3 w-full h-full m-auto text-black font-Poppins flex items-center justify-evenly">
        <div data-aos="slide-right" className="section-child p-2 w-2/4 ">
        <p className=" text-3xl font-bold md:text-4xl lg:text-6xl">Take a look at our rooms</p>
        <p className="text-xs md:text-md lg:text-lg mt-6">
          The hotel is small with just three locations, but more are in the making. Treat yourself to a gateway in the Vipp Shelter surrounded by Swedish nature, go for maximized urbanity at the Vipp Loft in COppenhagen, or check into a histoic Coppenhagen landmark at Vipp Chimney House.
        </p>
        <button className="mt-5 bg-emerald-700 p-3 hover:bg-emerald-800 text-white rounded-xl md:text-md">See all Rooms</button>
        </div>

        <div className="section-img">
         <Image className="hidden md:block md:w-40 md:h-full lg:w-96 lg:h-full" src={footer}/>
        </div>
      </div>
      </div>
      
    </>
  );
}
