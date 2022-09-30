import React from "react";

export const Footer = () => {
  return (
    <div className="w-full text-white bg-black">
      <div className="w-auto py-10 mx-auto font-light tracking-widest text-center font-poppins">
        © {new Date().getFullYear()} Stephen Wong
        <br />
        {/*         <div className="py-5 text-xs font-light">
          Image by{" "}
          <a href="https://pixabay.com/users/kreatikar-8562930/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3461405">
            Mudassar Iqbal
          </a>{" "}
          from{" "}
          <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3461405">
            Pixabay
          </a>
        </div> */}
      </div>
    </div>
  );
};
