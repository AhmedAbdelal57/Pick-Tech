import React from "react";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  

  return (
    <footer className="pt-20 pb-4">
      {/* Links Section */}
      {/* <div className="container mb-12 flex flex-col lg:flex-row">
        {/* Logo and Social Links 
        <div className="basis-1/3 flex flex-col md:items-center lg:items-start gap-4 lg:gap-6">
          <Logo />
          <p className="text-lg">
            Making the world a better place through constructing elegant
            hierarchies.
          </p>
          <ul className="flex items-center gap-4 lg:gap-6 mb-6 lg:mb-0">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="cursor-pointer"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Links 
        <div className="basis-2/3 grid grid-cols-2 lg:grid-cols-4 pt-8 lg:pt-0 lg:ps-8">
          {footerColumns.map((col, index) => (
            <article
              key={index}
              className="capitalize flex flex-col md:text-center lg:text-start"
            >
              <h2 className="font-bold lg:text-lg text-slate-100 mb-6">
                {col.title}
              </h2>
              <ul>
                {col.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="font-normal pb-3 hover:text-sky-600 hover:ps-1 transition-all cursor-pointer"
                  >
                    <a href={link.href} rel="noopener noreferrer">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div> */}

      {/* Copyright Section */}
      <div className="container border-t border-slate-700 text-center">
        <p className="capitalize pt-4 text-center lg:text-start">
          {`© ${currentYear} Picktech, Inc. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
