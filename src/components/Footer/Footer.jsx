import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import { useEffect, useState } from 'react';



function Footer() {

  const [GithubData, setGithubData] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/nk10nikhil")
      .then((response) => response.json())
      .then((data) => setGithubData(data));
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 py-12 mx-10 rounded-2xl my-5">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          {/* Logo and Copyright Section */}
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Link to="/" className="flex items-center">
                  <img
                    src={GithubData.avatar_url}
                    className="mr-3 h-12 rounded-full border-2 border-purple-500"
                    alt="Logo"
                  />
                  <span className="text-2xl font-bold text-white hover:text-purple-500 transition duration-300">
                    {GithubData.name}
                  </span>
                </Link>
              </div>
              <div>
                <p className="text-sm text-purple-500">
                  &copy; Copyright 2025. All Rights Reserved by nk10nikhil.
                </p>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-purple-500">
                Company
              </h3>
              <ul>
                {['Features', 'Pricing', 'Affiliate Program', 'Press Kit'].map((item, index) => (
                  <li className="mb-4" key={index}>
                    <Link
                      className="text-base font-medium text-gray-400 hover:text-white transition-colors duration-300"
                      to="/"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Support Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-purple-500">
                Support
              </h3>
              <ul>
                {['Account', 'Help', 'Contact Us', 'Customer Support'].map((item, index) => (
                  <li className="mb-4" key={index}>
                    <Link
                      className="text-base font-medium text-gray-400 hover:text-white transition-colors duration-300"
                      to="/"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Legals Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-purple-500">
                Legals
              </h3>
              <ul>
                {['Terms & Conditions', 'Privacy Policy', 'Licensing'].map((item, index) => (
                  <li className="mb-4" key={index}>
                    <Link
                      className="text-base font-medium text-gray-400 hover:text-white transition-colors duration-300"
                      to="/"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 opacity-10"></div>
    </section>
  );
}

export default Footer;