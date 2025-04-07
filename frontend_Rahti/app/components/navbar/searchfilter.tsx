const Searchfilter = () => {
    return (
      <div className="h-[48px] lg:h-[64px] flex items-center justify-between border rounded-full">
        <div className="hidden lg:block">

        <div className="flex flex-row space-x-4">
          <div className="w-[250px] h-[48px] lg:h-[64px] cursor-pointer px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Search</p>
            <p className="text-sm">Location</p>
          </div>
  
          <div className="h-[48px] lg:h-[64px] px-8 cursor-pointer flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Check-in</p>
            <p className="text-sm">Add dates</p>
          </div>
  
          <div className="h-[48px] lg:h-[64px] px-8 cursor-pointer flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Check-out</p>
            <p className="text-sm">Add dates</p>
          </div>
  
          <div className="h-[48px] lg:h-[64px] px-8 cursor-pointer flex flex-col justify-center rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Who?</p>
            <p className="text-sm">Add guests</p>
          </div>
        </div>
        
        </div>
       
  
        <div className="p-2">
          <div id="S" className="p-2 lg:p-4 cursor-pointer rounded-full text-white flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-4 h-4 stroke-current"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
            </svg>
          </div>
        </div>
      </div>
    );
  };
  
  export default Searchfilter;
  