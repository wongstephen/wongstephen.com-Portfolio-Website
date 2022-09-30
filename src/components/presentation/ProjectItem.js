import React from "react";

export const ProjectItem = ({ data }) => {
  return (
    <li className="max-w-sm my-16 md:flex-grow md:basis-1/3">
      {/* image */}

      <img
        className="flex justify-center w-full mx-auto overflow-hidden align-middle border-0 shadow-md rounded-tl-xl rounded-br-xl max-w-max"
        src={data.photo}
        alt={data.title}
      />

      {/* text content */}
      <div className="flex flex-col w-full gap-10 mx-auto mt-10">
        <div className="flex flex-col">
          <div className="md:min-h-[14rem]">
            <p className="mb-2.5 text-2xl font-base font-poppins">
              {data.title}
            </p>
            <p className="text-sm font-medium mb-2.5 ">
              {data.tech} {" - "}
              <span className="font-light ">{data.description}</span>
            </p>

            {data.demoCreds && (
              <p className="p-0 m-0 text-sm">
                Demo Login:{" "}
                <span className="font-light text-slate-600">
                  {data.demoCreds}
                </span>
              </p>
            )}
            {data.demoPassword && (
              <p className="p-0 m-0 text-sm">
                Demo Password:{" "}
                <span className="font-light text-slate-600">
                  {data.demoPassword}
                </span>
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-5">
          {data.wwwLink && (
            <a href={data.wwwLink} target="_blank" rel="noreferrer">
              <button className="px-8 py-4 mx-auto tracking-wider text-white transition-all duration-500 border rounded-lg cursor-pointer hover:bg-color2 hover:shadow bg-color1">
                Visit
              </button>
            </a>
          )}
          {data.githubLink && (
            <a href={data.githubLink} target="_blank" rel="noreferrer">
              <button className="px-8 py-4 mx-auto tracking-wider text-white transition-all duration-500 border rounded-lg cursor-pointer hover:bg-color2 hover:shadow bg-color1">
                Github
              </button>
            </a>
          )}
        </div>
      </div>
    </li>
  );
};
