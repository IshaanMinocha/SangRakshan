import React from "react";
import mgcms from "../assets/mgcms.glb"
const Arlearning = () => {
    const scenarios = [
        {
            id: 1,
            title: 'Chemical Spill Response',
            image: 'scenario1.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod velit eu mauris cursus.',
        },
        {
            id: 2,
            title: 'Biological Hazard Training',
            image: 'scenario2.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod velit eu mauris cursus.',
        },
        {
            id: 3,
            title: 'Radiological Incident Drill',
            image: 'scenario3.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod velit eu mauris cursus.',
        },
        // Add more scenarios as needed
    ];
    return (
        <div>
            <div>
                <div className="bg-gray-100 p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold">CBRN Mock Drill - VR Learning Scenarios</h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {scenarios.map((scenario) => (
                            <div key={scenario.id} className="bg-white p-6 rounded-lg shadow-md">
                                <img src={scenario.image} alt={scenario.title} className="w-full h-48 object-cover mb-4 rounded-md" />
                                <h2 className="text-xl font-semibold mb-2">{scenario.title}</h2>
                                <p className="text-gray-600">{scenario.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className=" md:ml-[20%]">
                <h1 className="mt-5 text-2xl text-center">
                    AR Equipments Visualization
                </h1>
                <div className='flex md:flex-row flex-col'>

                    <section className="container max-w-lg bg-slate-600 m-5 px-10" data-aos="fade-up" date-aos-delay="200">
                        <div className="row text-base">
                            <div className="flex flex-col ">
                                <div className="icon-box">
                                    <h4 className=" font-bold tracking-widest text-lg mt-10 mb-5">AR Military Grade Mobile Gas Chromatography </h4>
                                    <p className="description bg-zinc-700 text-white  rounded-lg p-4">Mobile GC detectors are the gold standard in chemical analysis. They are a proven necessity widely used by the military and first responders as they rapidly provide on-site specific identification of volatile chemical compounds and agents in the low ppb to the low ppm range.
                                    </p>
                                </div>
                            </div>
                            <div id="card" className='flex justify-center my-3'>
                                <model-viewer src={mgcms}
                                    className="h-[700px]"
                                    ios-src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.usdz?v=1569545377878"
                                    poster="logo.png"
                                    alt="mgcms"
                                    shadow-intensity="1"
                                    camera-controls
                                    auto-rotate ar>
                                </model-viewer>

                            </div>

                        </div>
                    </section>
                    <section className="container max-w-lg bg-slate-600 m-5 px-10" data-aos="fade-up" date-aos-delay="200">
                        <div className="row">
                            <div className="col-lg-6 d-flex flex-column text-base justify-content-center p-5">
                                <div className="icon-box">
                                    <h4 className=" font-bold tracking-widest mt-10 mb-5 text-lg">AR Military Grade Mobile Gas Chromatography </h4>
                                    <p className="description bg-zinc-700 text-white  rounded-lg p-4">Mobile GC detectors are the gold standard in chemical analysis. They are a proven necessity widely used by the military and first responders as they rapidly provide on-site specific identification of volatile chemical compounds and agents in the low ppb to the low ppm range.
                                    </p>
                                </div>
                            </div>
                            <div id="card" className='flex justify-center my-3'>
                                <model-viewer className="text-5xl flex justify-center " src={mgcms}
                                    ios-src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.usdz?v=1569545377878"
                                    poster="logo.png"
                                    alt="mgcms"
                                    shadow-intensity="1"
                                    camera-controls
                                    auto-rotate ar>
                                </model-viewer>

                            </div>

                        </div>
                    </section>

                </div>

                {/* <a class="flex justify-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-7xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div id="card" className='flex justify-center m-10 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg'>
      <model-viewer src="mgcms.glb"
      ios-src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.usdz?v=1569545377878"
      poster="logo.png"
      alt="mgcms"
      shadow-intensity="1"
      camera-controls
      auto-rotate ar>
          </model-viewer>
          
      </div>
      
      <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">AR Military Grade Mobile Gas Chromatography</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Mobile GC detectors are the gold standard in chemical analysis. They are a proven necessity widely used by the military and first responders as they rapidly provide on-site specific identification of volatile chemical compounds and agents in the low ppb to the low ppm range.</p>
      </div>
    </a> */}

            </div>
        </div>
    )
        ;
};

export default Arlearning;
