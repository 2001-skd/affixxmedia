import React from "react";
import WaveText from "../uiComponents/WaveText";
import AuroraGradient from "./AuroraGradient";
import web_developement from "../../assets/images/development.png";

const ServiceSection = () => {
  return (
    <section className="relative">
      <div className="flex items-center justify-center flex-col px-4 sm:px-6 lg:px-12 py-6">
        <WaveText
          text="What We Provides"
          tag="h3"
          className="text-[#435739] font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl"
        />
        <WaveText
          text="Our Digital Solutions"
          tag="h3"
          className="text-primary font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl"
        />
      </div>
      {/* service card section starst*/}
      <section>
        <div className="grid grid-cols-1 px-4 sm:px-6 lg:px-12 py-6">
          <AuroraGradient className="rounded-lg relative">
            <div className="service_card min-h-[300px] rounded-lg flex items-center justify-center">
              <div>
                <WaveText
                  text="Web Developement"
                  tag="h3"
                  className="text-white font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-center"
                />
              </div>
            </div>
          </AuroraGradient>

          <AuroraGradient className="rounded-lg relative">
            <div className="service_card min-h-[300px] rounded-lg flex items-center justify-center">
              <div>
                <WaveText
                  text="Digital Marketting"
                  tag="h3"
                  className="text-white font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-center"
                />
              </div>
            </div>
          </AuroraGradient>

          <AuroraGradient className="rounded-lg relative">
            <div className="service_card min-h-[300px] rounded-lg flex items-center justify-center">
              <div>
                <WaveText
                  text="Content Creation"
                  tag="h3"
                  className="text-white font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-center"
                />
              </div>
            </div>
          </AuroraGradient>

          <AuroraGradient className="rounded-lg relative">
            <div className="service_card min-h-[300px] rounded-lg flex items-center justify-center">
              <div>
                <WaveText
                  text="Film Promotion"
                  tag="h3"
                  className="text-white font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-center"
                />
              </div>
            </div>
          </AuroraGradient>
        </div>
      </section>

      {/* service card section ends */}
    </section>
  );
};

export default ServiceSection;
