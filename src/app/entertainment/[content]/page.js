"use client";
import React from "react";
import Navbar from "../../components/navbar";
import { notFound, usePathname } from "next/navigation";
import gamesList from "../../components/games.json";
import { useRouter } from "next/navigation";
import { Tabs } from "flowbite-react";

export default function UniquePage({ params: { uniquepage } }) {
  const router = useRouter();
  console.log(usePathname().toString());
  const project = gamesList.gamesList.find(
    (p) => "/Entertainment/" + p.id.toString() === usePathname().toString()
  );
  if (!project) {
    notFound();
  }

  const bgString = "";

  return (
    <main>
      <Navbar />
      <div>
        <h2 className=" flex place-content-center">
          <img
            src={project.headerImage}
            className="object-cover h-64 [mask-image:_linear-gradient(to_bottom,transparent_0,_black_0px,_black_calc(100%-200px),transparent_100%)]"
          />
        </h2>
        <div
          className="bg-repeat-y bg-cover "
          style={{
            backgroundImage: `url(${project.bg})`,
          }}
        >
          <div className="py-4" />
          <div className="py-8 flex place-content-center text-xl">
            <img className="h-48" src={project.logo} />
          </div>
          <div className="flex place-content-center py-4">
            <div className="rounded-b-lg">
              <div className="flex place-content-center text-center">
                <Tabs
                  aria-label="Default tabs"
                  style="pills"
                  className="flex place-content-center"
                  theme={customTheme}
                >
                  <Tabs.Item active title="Description">
                    <div className="w-full flex place-content-center py-4">
                      <div className="flex place-content-center  gap-8">
                        <div className="text-wrap w-1/2">
                          {project.description}
                        </div>
                      </div>
                    </div>
                  </Tabs.Item>
                  <Tabs.Item title="Art">
                    <div className="w-full h-64 flex place-content-center">
                      <div className="flex place-content-center  ">
                        <img
                          className="object-scale-down"
                          src={project.gallery[0]}
                          alt="./assets/MobileDog.png"
                        />
                      </div>
                    </div>
                  </Tabs.Item>
                </Tabs>
              </div>
              <div className="py-24"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const customTheme = {
  base: "flex flex-col gap-2",
  tablist: {
    base: "flex text-center",
    styles: {
      default: "flex-wrap border-b border-gray-200 dark:border-gray-700",
      underline:
        "flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700",
      pills:
        "flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400 space-x-2",
      fullWidth:
        "w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-flow-col dark:divide-gray-700 dark:text-gray-400 rounded-none",
    },
    tabitem: {
      base: "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:ring-yellow-300 focus:outline-none",
      styles: {
        default: {
          base: "rounded-t-lg",
          active: {
            on: "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
            off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300",
          },
        },
        underline: {
          base: "rounded-t-lg",
          active: {
            on: "text-cyan-600 rounded-t-lg border-b-2 border-cyan-600 active dark:text-cyan-500 dark:border-cyan-500",
            off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
          },
        },
        pills: {
          base: "",
          active: {
            on: "rounded-lg bg-wtfYellow text-wtfBlack",
            off: "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white",
          },
        },
        fullWidth: {
          base: "ml-0 first:ml-0 w-full rounded-none flex",
          active: {
            on: "p-4 text-gray-900 bg-gray-100 active dark:bg-gray-700 dark:text-white rounded-none",
            off: "bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-none",
          },
        },
      },
      icon: "mr-2 h-5 w-5",
    },
  },
  tabitemcontainer: {
    base: "",
    styles: {
      default: "",
      underline: "",
      pills: "",
      fullWidth: "",
    },
  },
};
