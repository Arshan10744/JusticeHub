import { useSelector } from "react-redux"
import { Icon } from 'components';

export const Inbox = ()=>{

    const { user } = useSelector((state) => state.user);
    return(
    <div class=" xl:ml-52 xl:mr-4 container mx-auto max-w-screen-xl mb-20 shadow-lg rounded-lg">

    <div className={`mt-0 flex flex-col sm:flex-row justify-between items-center `}>
        <h1 className=" xl:ml-20 sm:ml-0 max-w-sm text-4xl top-0 font-bold font-custom text-center justify-center  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500 ">
          Citizen Dashobard
        </h1>

        <div className="flex justify-self-auto mt-2 xl:mr-8 sm:mr-0 sm:mt-0">
          <p className=" font-custom-blue font-semibold font-custom  ">
            FAQ | Contact Us | Help Center
          </p>
        
          <h1 className=" max-w-sm ml-20 mr-1 text-xl font-bold font-custom text-center justify-center  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-700 to-cyan-500  mx-auto ">
            {user?.name}
          </h1>
          <div className='mt-1'>
          <Icon src="/icons/account.png"/>
          </div>
        </div>
      </div>
      <hr className=" h-2 mt-4 bg-custom-blue"></hr>
      <br />
      <h1 className=" bg-gray-100 hover:text-white hover:bg-black p-3 rounded-2xl xl:ml-4 xl:mr-4 sm:ml-0 sm:mr-0 text-sm sm:text-md md:text-lg lg:text-xl font-bold font-custom text-center transform scale-100 hover:scale-95 transition-transform duration-300 ease-in-out">
        Hey {user?.name}, you can monitor your FIRs and interact with your investigator to get updates related to you respective FIR
      </h1>
      <br />
        
    <div class=" px-5 py-5 flex justify-between items-center bg-white border-b-2">
      <div class="font-semibold text-2xl">GoingChat</div>
      <div class="w-1/2">
        <input
          type="text"
          name=""
          id=""
          placeholder="search IRL"
          class="rounded-2xl bg-gray-100 py-3 px-5 w-full"
        />
      </div>
      <div
        class="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center"
      >
        RA
      </div>
    </div>
   
    <div class="flex flex-row justify-between bg-white">
      <div class="flex flex-col w-2/5 border-r-2 overflow-y-auto">
        <div class="border-b-2 py-4 px-2">
          <input
            type="text"
            placeholder="search chatting"
            class="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
          />
        </div>
        <div
          class="flex flex-row py-4 px-2 justify-center items-center border-b-2"
        >
          <div class="w-1/4">
            <img
              src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
              class="object-cover h-12 w-12 rounded-full"
              alt=""
            />
          </div>
          <div class="w-full">
            <div class="text-lg font-semibold">Luis1994</div>
            <span class="text-gray-500">Pick me at 9:00 Am</span>
          </div>
        </div>
        <div class="flex flex-row py-4 px-2 items-center border-b-2">
          <div class="w-1/4">
            <img
              src="https://source.unsplash.com/otT2199XwI8/600x600"
              class="object-cover h-12 w-12 rounded-full"
              alt=""
            />
          </div>
          <div class="w-full">
            <div class="text-lg font-semibold">Everest Trip 2021</div>
            <span class="text-gray-500">Hi Sam, Welcome</span>
          </div>
        </div>
        <div
          class="flex flex-row py-4 px-2 items-center border-b-2 border-l-4 border-blue-400"
        >
          <div class="w-1/4">
            <img
              src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
              class="object-cover h-12 w-12 rounded-full"
              alt=""
            />
          </div>
          <div class="w-full">
            <div class="text-lg font-semibold">MERN Stack</div>
            <span class="text-gray-500">Lusi : Thanks Everyone</span>
          </div>
        </div>
        <div class="flex flex-row py-4 px-2 items-center border-b-2">
          <div class="w-1/4">
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-12 w-12 rounded-full"
              alt=""
            />
          </div>
          <div class="w-full">
            <div class="text-lg font-semibold">Javascript Indonesia</div>
            <span class="text-gray-500">Evan : some one can fix this</span>
          </div>
        </div>
        <div class="flex flex-row py-4 px-2 items-center border-b-2">
          <div class="w-1/4">
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-12 w-12 rounded-full"
              alt=""
            />
          </div>
          <div class="w-full">
            <div class="text-lg font-semibold">Javascript Indonesia</div>
            <span class="text-gray-500">Evan : some one can fix this</span>
          </div>
        </div>

        <div class="flex flex-row py-4 px-2 items-center border-b-2">
          <div class="w-1/4">
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-12 w-12 rounded-full"
              alt=""
            />
          </div>
          <div class="w-full">
            <div class="text-lg font-semibold">Javascript Indonesia</div>
            <span class="text-gray-500">Evan : some one can fix this</span>
          </div>
        </div>
      </div>
      <div class="w-full px-5 flex flex-col justify-between">
        <div class="flex flex-col mt-5">
          <div class="flex justify-end mb-4">
            <div
              class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
            >
              Welcome to group everyone !
            </div>
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-8 w-8 rounded-full"
              alt=""
            />
          </div>
          <div class="flex justify-start mb-4">
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-8 w-8 rounded-full"
              alt=""
            />
            <div
              class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              at praesentium, aut ullam delectus odio error sit rem. Architecto
              nulla doloribus laborum illo rem enim dolor odio saepe,
              consequatur quas?
            </div>
          </div>
          <div class="flex justify-end mb-4">
            <div>
              <div
                class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Magnam, repudiandae.
              </div>

              <div
                class="mt-4 mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, reiciendis!
              </div>
            </div>
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-8 w-8 rounded-full"
              alt=""
            />
          </div>
          <div class="flex justify-start mb-4">
            <img
              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
              class="object-cover h-8 w-8 rounded-full"
              alt=""
            />
            <div
              class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
            >
              happy holiday guys!
            </div>
          </div>
        </div>
        <div class="py-5">
          <input
            class="w-full bg-gray-300 py-5 px-3 rounded-xl"
            type="text"
            placeholder="type your message here..."
          />
        </div>
      </div>
      </div>
    </div>
    
)}