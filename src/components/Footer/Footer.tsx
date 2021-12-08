export const Footer = () => (
  <footer className="bg-white border-t border-gray-400 shadow">
    <div className="container w-full pt-10 mx-auto md:max-w-3xl">
      <div className="flex flex-wrap w-full mx-auto">
        <div className="flex w-full md:w-1/2">
          <div>
            <h3 className="font-bold text-gray-900">About</h3>
            <p className="py-4 text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel mi ut felis
              tempus commodo nec id erat. Suspendisse consectetur dapibus velit ut lacinia.
            </p>
          </div>
        </div>

        <div className="flex w-full md:w-1/2">
          <div className="px-8">
            <h3 className="font-bold text-gray-900">Social</h3>
            <ul className="items-center pt-3 text-sm list-reset">
              <li>
                <a
                  className="inline-block py-1 text-gray-600 no-underline hover:text-gray-900 hover:text-underline"
                  href="#"
                >
                  Add social link
                </a>
              </li>
              <li>
                <a
                  className="inline-block py-1 text-gray-600 no-underline hover:text-gray-900 hover:text-underline"
                  href="#"
                >
                  Add social link
                </a>
              </li>
              <li>
                <a
                  className="inline-block py-1 text-gray-600 no-underline hover:text-gray-900 hover:text-underline"
                  href="#"
                >
                  Add social link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
