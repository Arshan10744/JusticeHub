import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { CriminalModal, Icon, UpdateCriminal } from "components";
import { useEffect, useState } from "react";
import { getAllCriminals, deleteCriminal } from "features";
import { Modal } from "components";
import { Loader } from "components";
import { useNavigate } from "react-router-dom";

export const ManageCriminals = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [criminalId, setCriminalId] = useState("");

  const criminalState = useSelector((state) => state.criminal);
  const criminals = criminalState.criminals;

   useEffect(() => {
     dispatch(getAllCriminals());
  }, []);


  return (
    <div className="xl:flex-1 xl:overflow-y-auto xl:ml-52 xs:ml-0 lg:flex-1 mb-20 lg:overflow-y-auto lg:ml-52 md:flex-1 md:overflow-y-auto md:ml-52 sm:flex-1 sm:overflow-y-auto sm:ml-52">
  <div className={`${isModalOpen ? "blur-sm" : ""}`}>
    <div className="mt-0 flex flex-col sm:flex-row justify-between items-center">
      <h1 className="xl:ml-20 sm:ml-0 max-w-sm text-4xl top-0 font-bold font-custom text-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500">
        Admin Dashboard
      </h1>
      <div className="flex justify-self-auto mt-2 xl:mr-8 sm:mr-0 sm:mt-0">
        <p className="font-custom-blue font-semibold font-custom">
          FAQ | Contact Us | Help Center
        </p>
        <h1 className="max-w-sm ml-20 mr-1 text-xl font-bold font-custom text-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500 mx-auto">
          {user?.name}
        </h1>
        <div className="mt-1">
          <Icon src="/icons/account.png" />
        </div>
      </div>
    </div>
    <hr className="h-2 mt-4 -ml-5 bg-custom-blue"></hr>
    <br />
    <h1
      id="tagline"
      className="bg-gray-100 hover:text-white hover:bg-black p-3 py-6 rounded-2xl xl:ml-4 xl:mr-4 sm:ml-0 sm:mr-0 text-sm sm:text-md md:text-lg lg:text-xl font-bold font-custom text-center transform scale-100 hover:scale-95 transition-transform duration-300 ease-in-out"
    >
      Hey {user?.name}, you can Check the Criminal Record of the Complainant. Make sure you enter the criminal status of the complainant while submitting the FIR.
    </h1>
    <br />
    <div className="flex">
      <div className="mr-5 ml-5 w-full h-96 relative overflow-hidden rounded-lg shadow-lg border border-gray-300 hover:shadow-xl transition-transform duration-300 transform hover:scale-105 mb-20">
        <img
          src="/icons/policeCar.jpg"
          alt="Background Image"
          className="absolute inset-0 w-full h-full object-cover filter brightness-50"
        />
        <div className="mt-10 absolute flex items-center ml-3 w-96">
          <h1 className="ml-10 font-bold font-custom text-left text-6xl text-white">
            List of <span className="text-7xl text-red-600">Criminals</span> is Below, Check it out.
          </h1>
          <br />
          <br />
        </div>
      </div>
    </div>
    <div className="flex sm:flex-row justify-between items-center">
      <div className="flex justify-end mb-4 mr-2 xl:px-20">
        <form>
          <label
            htmlFor="default-search"
            className="text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="rounded-3xl block w-full h-14 pl-10 text-sm text-gray-900 border border-gray-100 bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
            <button
              type="submit"
              className="rounded-3xl absolute text-white right-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-md px-6 py-3 dark:bg-custom-blue dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Go
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-self-end mt-2 xl:mr-40 mb-4 sm:mr-0 sm:mt-0">
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="bg-custom-blue hover:bg-blue-600 ml-20 text-white text-xl font-bold py-3 px-20 sm:py-3 sm:px-6 rounded-full transition duration-300 ease-in-out"
          type="button"
        >
          Create New
        </button>
      </div>
    </div>
    {criminals&& criminals.length > 0 ? (
    <div>
    {criminalState.loading ? (
      <div className="flex justify-center items-center">
        <Loader />
      </div>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 lg:grid-cols-4 gap-4">
        {criminals.map((criminal) => (
          <div
            key={criminal._id}
            className="mb-20 ml-2 transform scale-100 hover:scale-95 transition-transform duration-300 ease-in-out"
          >
            <img
              src={criminal.image.url}
              alt="random image"
              className="w-96 h-72 object-center rounded-lg shadow-md"
            />
            <div className="relative pr-4 -mt-16 w-70 ml-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-baseline">
                  <span className="bg-teal-200 text-md text-teal-800 px-2 inline-block rounded-full uppercase font-semibold tracking-wide">
                    {criminal.name}
                  </span>
                </div>
                <div className="mt-1 font-bold font-custom">
                  CNIC
                  <span className="ml-4 text-gray-600 text-sm font-semibold">{criminal.CNIC}</span>
                </div>
                <div className="mt-1 font-bold font-custom">
                  Age
                  <span className="ml-4 text-gray-600 text-sm">{criminal.age}</span>
                </div>
                <div className="flex mt-2">
                  <button onClick={()=>dispatch(deleteCriminal(criminal._id)).then(()=>{navigate("/manageCriminals")})}  className="w-full p-1 text-white bg-red-400 rounded-2xl shadow-lg font-bold font-custom">Delete</button>
                  <button onClick={()=>{ setIsModalOpen(true); setCriminalId(criminal._id)}} className="w-full p-1 text-white bg-blue-400 rounded-2xl shadow-lg ml-5 font-bold font-custom">Edit</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
    </div>
    ):(
      <div><h1 className="text-center text-2xl mb-10 mt-10 font-custom font-semibold ">Currently There Are No CRIMINALS To Show.</h1></div>
      )}
  </div>
 
  <CriminalModal
    isOpen={isModalOpen}
    onClose={()=> setIsModalOpen(false)}
  />

  {isModalOpen ?(
  <UpdateCriminal 
    isOpen={isModalOpen}
    onClose={()=> setIsModalOpen(false)}
    criminalId={criminalId}
  />
  ): null}
</div>
  );
};
