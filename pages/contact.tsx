import Layout from "../components/Layout";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { useEffect } from "react";
import Scrollup from "../components/Scrollup";

function Contact() {
  useEffect(() => {
    window.scrollTo(
      0,
      document.body.scrollHeight || document.documentElement.scrollHeight
    );
  }, []);

  return (
    <Layout title="Contact us" attachNavbar={true}>
      <main>
        <section className="relative">
          {/* heading */}
          <div className="flex flex-col items-center justify-center pt-4">
            <p className="text-center text-white font-black text-2xl">
              Contact us
            </p>
            <p className="text-center text-white font-medium text-lg mt-3">
              Get in touch and let us know how we can help.
            </p>
          </div>

          {/* contact cards */}
          <div className="flex flex-col sm:flex-row mx-4 items-center justify-center gap-8 mt-16">
            {/* contact sales */}
            <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-[4px] w-72 lg:w-[22rem]">
              <div className="flex flex-col items-center-justify-center gap-3 mx-8 my-2">
                <p className="text-center font-bold text-lg text-dim-gray">
                  Sales
                </p>
                <p className="text-gray text-sm my-4">
                  We would love to discuss how we can help together.
                </p>
              </div>
              <button className="bg-primary-light text-sm w-full py-2 text-center group text-primary inline-flex justify-center items-center rounded-b">
                Contact sales
                <ArrowLeftIcon className="w-4 h-4 text-gray ml-2 rotate-180 group-hover:scale-125" />
              </button>
            </div>
            {/* contact support */}
            <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-[4px] w-72 lg:w-[22rem]">
              <div className="flex flex-col items-center-justify-center gap-3 mx-8 my-2">
                <p className="text-center font-bold text-lg text-dim-gray">
                  Help & Support
                </p>
                <p className="text-gray text-sm my-4">
                  We&apos;re here to help with any question or code.
                </p>
              </div>
              <button className="bg-primary-light text-sm w-full py-2 text-center group text-primary inline-flex justify-center items-center rounded-b">
                Contact support
                <ArrowLeftIcon className="w-4 h-4 text-gray ml-2 rotate-180 group-hover:scale-125" />
              </button>
            </div>
            {/* contact food quality */}
            <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-[4px] w-72 lg:w-[22rem]">
              <div className="flex flex-col items-center-justify-center gap-3 mx-8 my-2">
                <p className="text-center font-bold text-lg text-dim-gray">
                  Food Quality
                </p>
                <p className="text-gray text-sm my-4">
                  We&apos;re here for you, let us know if any compromised in
                  food quality.
                </p>
              </div>
              <button className="bg-primary-light text-sm w-full py-2 text-center group text-primary inline-flex justify-center items-center rounded-b">
                Contact Food Quality
                <ArrowLeftIcon className="w-4 h-4 text-gray ml-2 rotate-180 group-hover:scale-125" />
              </button>
            </div>
          </div>

          {/* communication */}
          <div className="grid place-items-center mt-20 mb-16 lg:mt-32">
            <p className="text-center font-bold text-dim-gray text-lg">
              General communication
            </p>
            <p className="text-center font-medium text-gray text-sm max-w-xs">
              For general queries, including paternship opportunities, please
              email <span className="text-primary">info@foody.com</span>
            </p>
          </div>

          {/* curve */}
          <div className="custom-shape-divider-top-1640097802 -z-[1]">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </section>
        <Scrollup />
      </main>
    </Layout>
  );
}

export default Contact;
