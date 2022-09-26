import React from "react";

export const ProjectItem = ({ data }) => {
  return (
    <li className="my-10">
      {/* image */}

      <img
        className="flex justify-center w-full mx-auto overflow-hidden align-middle border-0 rounded shadow-md max-w-max"
        src={data.photo}
        alt={data.title}
      />

      <div className="flex flex-col w-full gap-10 mx-auto mt-10">
        <div className="flex flex-col">
          <p className="mb-5 text-xl font-medium font-poppins">{data.title}</p>
          <p className="text-sm font-medium mb-2.5">
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

        <div className="flex gap-5">
          {data.wwwLink && (
            <a href={data.wwwLink} target="_blank" rel="noreferrer">
              <button className="border-[1px] border-sky-600 text-sky-600 tracking-widest font-medium text-sm rounded px-5 py-1 hover:bg-sky-600/20 hover:shadow-lg">
                Visit
              </button>
            </a>
          )}
          {data.githubLink && (
            <a href={data.githubLink} target="_blank" rel="noreferrer">
              <button className="border-[1px] border-sky-600 text-sm  text-sky-600 tracking-widest font-medium rounded px-5 py-1 hover:bg-sky-600/20 hover:shadow-lg">
                Github
              </button>
            </a>
          )}
        </div>
      </div>
    </li>
  );
};
