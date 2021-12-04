import React from 'react';

import './App.css';

function App() {
  return (
    <div className="container mx-auto">
      <section>
        <nav className="relative py-6 bg-white">
          <div className="container flex items-center justify-between px-4 mx-auto">
            <a className="text-3xl font-bold leading-none" href="/">
              <img
                className="h-12"
                src="atis-assets/logo/atis/atis-mono-black.svg"
                alt=""
                width="auto"
              />
            </a>
            <div className="lg:hidden">
              <button className="flex items-center p-3 text-green-600 navbar-burger">
                <svg
                  className="block w-4 h-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
            <ul className="absolute hidden transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
              <li>
                <a className="text-sm text-gray-400 hover:text-gray-500" href="/">
                  Home
                </a>
              </li>
              <li className="text-gray-300">
                <svg
                  className="w-4 h-4 current-fill"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  ></path>
                </svg>
              </li>
              <li>
                <a className="text-sm font-bold text-green-600" href="/">
                  Wie ben ik?
                </a>
              </li>
              <li className="text-gray-300">
                <svg
                  className="w-4 h-4 current-fill"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  ></path>
                </svg>
              </li>
              <li>
                <a className="text-sm text-gray-400 hover:text-gray-500" href="/">
                  Blogs
                </a>
              </li>
              <li className="text-gray-300">
                <svg
                  className="w-4 h-4 current-fill"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  ></path>
                </svg>
              </li>
              <li>
                <a className="text-sm text-gray-400 hover:text-gray-500" href="/">
                  Zoeken
                </a>
              </li>
              <li className="text-gray-300"></li>
              <li></li>
            </ul>

            <a
              className="hidden px-6 py-2 text-sm font-bold text-white transition duration-200 bg-green-500 lg:inline-block hover:bg-green-600 rounded-l-xl rounded-t-xl"
              href="/"
            >
              Sign up
            </a>
          </div>
        </nav>
        <div className="fixed top-0 bottom-0 left-0 z-50 hidden w-5/6 max-w-sm navbar-menu">
          <div className="fixed inset-0 bg-gray-800 opacity-25 navbar-backdrop"></div>
          <nav className="relative flex flex-col w-full h-full px-6 py-6 overflow-y-auto bg-white border-r ">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold leading-none" href="/">
                <img
                  className="h-10"
                  src="atis-assets/logo/atis/atis-mono-black.svg"
                  alt=""
                  width="auto"
                />
              </a>
              <button className="navbar-close">
                <svg
                  className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 rounded hover:bg-green-50 hover:text-green-600"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 rounded hover:bg-green-50 hover:text-green-600"
                    href="/"
                  >
                    Wie ben ik?
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 rounded hover:bg-green-50 hover:text-green-600"
                    href="/"
                  >
                    Blogs
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 rounded hover:bg-green-50 hover:text-green-600"
                    href="/"
                  >
                    Zoeken
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 rounded hover:bg-green-50 hover:text-green-600"
                    href="/"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <a
                  className="block px-4 py-3 mb-3 text-xs font-semibold leading-none text-center bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl"
                  href="/"
                >
                  Sign in
                </a>
                <a
                  className="block px-4 py-3 mb-2 text-xs font-semibold leading-loose text-center text-white bg-green-600 hover:bg-green-700 rounded-l-xl rounded-t-xl"
                  href="/"
                >
                  Sign Up
                </a>
              </div>
              <p className="my-4 text-xs text-center text-gray-400">
                <span>© 2020 All rights reserved.</span>
              </p>
              <div className="text-center">
                <a className="inline-block px-1" href="/">
                  <img src="atis-assets/social/facebook.svg" alt="" />
                </a>
                <a className="inline-block px-1" href="/">
                  <img src="atis-assets/social/twitter.svg" alt="" />
                </a>
                <a className="inline-block px-1" href="/">
                  <img src="atis-assets/social/instagram.svg" alt="" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </section>

      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center justify-center mb-16 md:justify-between">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold lg:text-5xl font-heading">Nieuwste Posts</h2>
              </div>
              <a
                className="hidden px-6 py-2 font-bold leading-loose transition duration-200 bg-green-600 md:inline-block rounded-l-xl rounded-t-xl hover:bg-green-700 text-gray-50"
                href="/"
              >
                Meer posts
              </a>
            </div>
            <div className="flex flex-wrap mb-4 -mx-4">
              <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3">
                <div className="bg-white rounded">
                  <img
                    className="object-cover rounded-t h-128"
                    src="images/B0CDFB97-F5F7-48E1-9935-72CA02CEBA46.jpeg"
                    alt=""
                  />
                  <div className="p-6">
                    <span className="text-gray-400">2021</span>
                    <h3 className="mb-4 text-2xl font-bold font-heading">Brosse pepernoten</h3>
                    <a className="flex font-bold text-green-600 hover:text-green-700" href="/">
                      <svg
                        className="w-6 h-6 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>Ga naar Post</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3">
                <div className="bg-white rounded">
                  <img
                    className="object-cover rounded-t h-128"
                    src="images/F6C2EA74-06B7-48B1-AEC5-3A1C71043BCC.jpeg"
                    alt=""
                  />
                  <div className="p-6">
                    <span className="text-gray-400">2021</span>
                    <h3 className="mb-4 text-2xl font-bold font-heading">
                      Koekjes voor koude dagen
                    </h3>
                    <a className="flex font-bold text-green-600 hover:text-green-700" href="/">
                      <svg
                        className="w-6 h-6 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>Ga naar Post</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3">
                <div className="bg-white rounded">
                  <img
                    className="object-cover rounded-t h-128"
                    src="images/4631A18C-C9DC-422F-8278-FB17E513862B.jpeg"
                    alt=""
                  />
                  <div className="p-6">
                    <span className="text-gray-400">2021</span>
                    <h3 className="mb-4 text-2xl font-bold font-heading">
                      gevulde-speculaas-taartje
                    </h3>
                    <a className="flex font-bold text-green-600 hover:text-green-700" href="/">
                      <svg
                        className="w-6 h-6 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>Ga naar Post</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3">
                <div className="bg-white rounded"></div>
              </div>
              <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3">
                <div className="bg-white rounded"></div>
              </div>
              <div className="w-full px-4 mb-8 md:w-1/2 lg:w-1/3">
                <div className="bg-white rounded"></div>
              </div>
            </div>
            <div className="text-center">
              <a
                className="inline-block px-6 py-2 font-bold leading-loose transition duration-200 bg-green-600 md:hidden rounded-l-xl rounded-t-xl hover:bg-green-700 text-gray-50"
                href="/"
              >
                Meer posts
              </a>
            </div>
          </div>
        </div>
        <div className="skew skew-bottom mr-for-radius">
          <svg
            className="w-full h-8 md:h-12 lg:h-20 text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
          </svg>
        </div>
        <div className="skew skew-bottom ml-for-radius">
          <svg
            className="w-full h-8 md:h-12 lg:h-20 text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
          </svg>
        </div>
      </section>

      <section>
        <div className="skew skew-top mr-for-radius">
          <svg
            className="w-full h-8 md:h-12 lg:h-20 text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
          </svg>
        </div>
        <div className="skew skew-top ml-for-radius">
          <svg
            className="w-full h-8 md:h-12 lg:h-20 text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
          </svg>
        </div>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container px-4 mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap items-center p-6 mb-8 bg-white rounded-lg shadow ">
                <div className="w-full lg:w-1/3">
                  <img
                    className="object-cover w-full mb-5 rounded-lg lg:mb-0"
                    style={{ maxHeight: '350px' }}
                    src="images/239DE1F6-2DC5-4884-8F78-00EADC54B49A.jpeg"
                    alt=""
                  />
                </div>
                <div className="w-full lg:w-2/3">
                  <div className="max-w-lg mx-auto">
                    <p className="mb-8 text-2xl text-gray-500">
                      Welkom op mijn blog! Ik hou er van om in de keuken nieuw probeersels te maken.
                      Wanneer dit is gelukt, deel ik ze graag!
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-2xl font-bold font-heading">Mieke in de Keuken</h4>
                        <p className="text-blueGrey-500">
                          Eigenaar van een kleinschalige catering en liefhebber van lekker eten.
                        </p>
                      </div>
                      <a href="/"> </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skew skew-bottom mr-for-radius">
          <svg
            className="w-full h-8 md:h-12 lg:h-20 text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
          </svg>
        </div>
        <div className="skew skew-bottom ml-for-radius">
          <svg
            className="w-full h-8 md:h-12 lg:h-20 text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
          </svg>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full px-2 mb-16 lg:mb-0 md:w-1/2 lg:w-1/4">
              <a href="/">
                <img className="h-8 mx-auto" src="atis-assets/logo/brands/slack.png" alt="" />
              </a>
            </div>
            <div className="w-full px-2 mb-16 lg:mb-0 md:w-1/2 lg:w-1/4">
              <a href="/">
                <img className="h-8 mx-auto" src="atis-assets/logo/brands/dropbox.png" alt="" />
              </a>
            </div>
            <div className="w-full px-2 mb-16 md:mb-0 md:w-1/2 lg:w-1/4">
              <a href="/">
                <img className="h-8 mx-auto" src="atis-assets/logo/brands/spotify.png" alt="" />
              </a>
            </div>
            <div className="w-full px-2 md:w-1/2 lg:w-1/4">
              <a href="/">
                <img className="h-8 mx-auto" src="atis-assets/logo/brands/stripe.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
