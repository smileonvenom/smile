import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. Smile, All rights reserved.
        </p>
        <p className="caption text-n-4 lg:block" style={{ width: '60%', fontSize: "0.7rem" }}>
          Investing in cryptocurrency carries the risk of capital loss. It is crucial to conduct your own research 
          (DYOR) before making any investment decisions. Cryptocurrency markets can be volatile and unpredictable. 
          You agree to hold the team harmless and absolve them of any responsibility for potential losses or taxes you may incur by buying $SMILE.
        </p>


        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
