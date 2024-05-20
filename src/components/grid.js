function Home() {
    return (
      <section className="vh100 bg-teal-400 relative pb-20 overflow-hidden">
        <div className="container relative px-4 mx-auto">
          <div className="grid grid-cols-1 col-gap-4 md:grids-cols-12 lg:grid-cols-4">
            <div className="bg-teal-400">
             nauman
            </div>
            <div className="bg-teal-400 dark:bg-black col-span-2">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                  <div className=" dark:text-white relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Frontend Developer{" "}
                    <a href="#" className="font-semibold text-indigo-600">
                      <span className="absolute inset-0" aria-hidden="true" />
                      
                    </a>
                  </div>
                </div>
                <div className="text-center">
                  <h1 className="text-2xl font-medium tracking-tight text-gray-900 sm:text-2xl md:text-4xl lg:text-6xl">
                    Hey I'm <br></br> Nauman Khalid<br></br> {"{"}ReactJs Developer{"}"}
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat aliqua.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get started
                    </a>
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-teal-400">nauman</div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Home;
  