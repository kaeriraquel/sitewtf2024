import React, { isValidElement, useState } from "react";

const Sidebar = (props) => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    // window.scrollTo(0, 0);
    setSidebar(!sidebar);
  };

  const isBrowser = () => typeof window !== "undefined";

  //   const scrollToTop = () => {
  //     if (!isBrowser()) return;
  //     //scrollIntoView(alignToTop)
  //   };
  return (
    <>
      <div className="absolute right-0 z-50">
        <button
          className={
            props.yellow
              ? "z-50 right-2 lg:right-6 absolute p-1 rounded-full transition hover:bg-wtfYellow"
              : "z-50 right-2 lg:right-6 absolute p-1 rounded-full transition hover:bg-wtfBlack"
          }
          onClick={handleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={
              props.yellow
                ? "w-10 h-10 stroke-[1px] stroke-grey-800"
                : "w-10 h-10 stroke-[1px] stroke-wtfBlack"
            }
            viewBox="0 0 20 20"
            fill={props.yellow ? "currentColor" : "#FFF505"}
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className={
          sidebar
            ? "z-50 absolute right-0 duration-100 overflow-x-hidden"
            : "-z-50 absolute right-0  duration-2000 overflow-x-hidden"
        }
        onClick={handleSidebar}
      >
        <div
          className={
            sidebar
              ? "bg-black cursor-pointer opacity-70 fixed duration-500 -right-0 transition-right h-screen w-screen skew-x-17 scale-x-171"
              : "bg-black opacity-70 fixed duration-1000 -right-full transition-right-full w-screen h-screen -skew-x-17 scale-x-0"
          }
          onClick={handleSidebar}
        ></div>
        <div>
          <div className="py-24 space-y-6">
            <button
              className="absolute p-1 text-gray-500 rounded-full -right-8 top-4 transition hover:bg-red-400"
              onClick={handleSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <ul className="z-10 overflow-x-hidden font-normal text-center skew-y-8 space-y-6">
              <li
                onClick={handleSidebar}
                className={
                  sidebar
                    ? " duration-200 relative -right-0 transition-right delay-150 w-64"
                    : " duration-200 relative -right-full transition-right delay-250 w-64"
                }
              >
                <div href="/">
                  <div className="inline-flex w-full px-4 py-3 text-center bg-wtfYellow text-wtfBlack transition hover:bg-white">
                    Home
                  </div>
                </div>
              </li>

              <li
                onClick={handleSidebar}
                className={
                  sidebar
                    ? " duration-200  relative right-0 transition-right delay-200 w-64"
                    : " duration-200  relative -right-full transition-right delay-200 w-64"
                }
              >
                <div href="/games">
                  <div className="inline-flex w-full px-4 py-3 bg-wtfYellow text-wtfBlack item-center transition hover:bg-white">
                    Games
                  </div>
                </div>
              </li>
              <li
                onClick={handleSidebar}
                className={
                  sidebar
                    ? " duration-200 relative right-0 transition-right delay-250 w-64"
                    : " duration-200 relative -right-full transition-right delay-150 w-64"
                }
              >
                <div href="/industry">
                  <div className="inline-flex w-full px-4 py-3 bg-wtfYellow text-wtfBlack item-center transition hover:bg-white">
                    Industry
                  </div>
                </div>
              </li>
              <li
                onClick={handleSidebar}
                className={
                  sidebar
                    ? " duration-200 relative right-0 transition-right delay-350 w-64"
                    : " duration-200 relative -right-full transition-right delay-50 w-64"
                }
              >
                <div
                  href="/about"
                  className={
                    sidebar
                      ? " duration-200 relative right-0 transition-right delay-400 w-64"
                      : " duration-200 relative -right-full transition-right w-64"
                  }
                >
                  <div className="inline-flex w-full px-4 py-3 bg-wtfYellow text-wtfBlack item-center transition hover:bg-white">
                    About
                  </div>
                </div>
              </li>
              <li
                onClick={handleSidebar}
                className={
                  sidebar
                    ? " duration-200 relative right-0 transition-right delay-350 w-64"
                    : " duration-200 relative -right-full transition-right delay-50 w-64"
                }
              >
                <div
                  href="https://www.editorskeys.com/en-us"
                  className={
                    sidebar
                      ? " duration-200 relative right-0 transition-right delay-400 w-64"
                      : " duration-200 relative -right-full transition-right w-64"
                  }
                >
                  <div
                    target="_blank"
                    className="inline-flex w-full px-4 py-3 bg-wtfYellow text-wtfBlack item-center transition hover:bg-white"
                  >
                    Shop
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
