function Accordion(props) {
  return (
    <>
      <div onClick={props.toggleAccordion} className=" rounded-md mb-1">
        <div className="grid grid-cols-12 pt-4 mr-20">
          <div className="content-center text-white col-span-2 mr-10"><img src={props.logo}></img></div>
          <div className="col-span-10">
            <button className="w-full pt-4 text-left text-white text-[30px] flex justify-between place-items-center">
              <div className="block">
                <div>{props.position}</div>
               
                <div className="text-[20px] font-thin">{props.title}</div>
                <div className="text-[18px] font-thin">June 2021-July 2020</div>
              </div>

              <span
                className={`float-right transform 
                                 transition-transform duration-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-[30px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {props.isOpen && (
          <div className="grid grid-cols-12 mt-[30px] col-gap-4">
            <div className="content-center text-white col-span-2"></div>
            <div className="col-span-10 text-white">{props.data}</div>
          </div>
        )}
        <div className="mt-[20px] divide-solid w-full bg-[#b8b8b8] h-[1px]"></div>
      </div>
    </>
  );
}

export default Accordion;
