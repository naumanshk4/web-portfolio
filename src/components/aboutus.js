import Headers from "./header";

function About() {
  return (

    <section className="vh100 bg-dark relative pb-20 overflow-hidden">
     
      <div className="container relative px-4 mx-auto">
        <div className="">
          <div className="dark:bg-black">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
               
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-medium tracking-tight text-white sm:text-2xl md:text-4xl lg:text-6xl">
                  <span className="text-2xl">
                    Hey I'm Nauman Khalid
                  </span>
                  <br></br>
                  <span className="blue-text">
                    {"{"}ReactJs Developer{"}"}
                  </span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-white">
                A passionate ReactJS Developer dedicated to building responsive and user-friendly web applications. 
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
