import Headers from "./header";
import  Type  from "./typingStyle";
import laptopImg from "../images/Laptop.png"

function Home() {
  return (

    <section className="vh100 bg-dark relative pb-20 overflow-hidden">
     <Headers/>
      <div className="container relative px-4 mx-auto">
        <div className="">
          <div className="dark:bg-black">
            <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-32">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className=" text-white relative rounded-full px-3 py-1 text-sm leading-6  ring-1 ring-[#ffda39] hover:ring-white">
                  Frontend Developer{" "}
                  <a href="#" className="font-semibold text-indigo-600">
                    <span className="absolute inset-0" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="text-center">
              <Type />
              </div>

              <div className="text-center">
                <h1 className="text-xl font-medium tracking-tight text-white sm:text-2xl md:text-4xl lg:text-6xl">
                  <span className="text-2xl">
                    I'm Nauman Khalid
                   
                  </span>
                  
                  <br></br>
                  <span >
                    <span className="blue-text text-6xl">{"<>"}</span>ReactJs Developer<span className="blue-text text-6xl">{"</>"}</span>
                  </span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-white max-w-2xl mx-auto">
                A passionate ReactJS Developer dedicated to building responsive and user-friendly web applications<span className="text-2xl blue-text">{"."}</span>
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                 <img className="max-w-4xl" src={laptopImg}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
