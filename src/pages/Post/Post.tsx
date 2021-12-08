import React from 'react';

export const Post = () => (
  <>
    <div className="">
      <div className="w-full px-4 text-xl leading-normal text-gray-800">
        <div className="font-sans">
          <p className="text-base font-bold text-green-500 md:text-sm">
            &lt;{' '}
            <a
              href="#"
              className="text-base font-bold text-green-500 no-underline md:text-sm hover:underline"
            >
              BACK TO BLOG
            </a>
          </p>
          <h1 className="pt-6 pb-2 font-sans text-3xl font-bold text-gray-900 break-normal md:text-4xl">
            Welcome to Minimal Blog
          </h1>
          <p className="text-sm font-normal text-gray-600 md:text-base">
            Published 19 February 2019
          </p>
        </div>

        <p className="py-6">
          👋 Welcome fellow{' '}
          <a
            className="text-green-500 no-underline hover:underline"
            href="https://www.tailwindcss.com"
          >
            Tailwind CSS
          </a>{' '}
          and miminal monochrome blog fan. This starter template provides a starting point to create
          your own minimal monochrome blog using Tailwind CSS and vanilla Javascript.
        </p>

        <p className="py-6">
          The basic blog page layout is available and all using the default Tailwind CSS classes
          (although there are a few hardcoded style tags). If you are going to use this in your
          project, you will want to convert the classes into components.
        </p>

        <h1 className="py-2 font-sans">Heading 1</h1>
        <h2 className="py-2 font-sans">Heading 2</h2>
        <h3 className="py-2 font-sans">Heading 3</h3>
        <h4 className="py-2 font-sans">Heading 4</h4>
        <h5 className="py-2 font-sans">Heading 5</h5>
        <h6 className="py-2 font-sans">Heading 6</h6>

        <p className="py-6">
          Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus purus, in mattis tortor
          sollicitudin pretium. Phasellus at diam posuere, scelerisque nisl sit amet, tincidunt
          urna. Cras nisi diam, pulvinar ut molestie eget, eleifend ac magna. Sed at lorem
          condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend turpis vel erat
          bibendum scelerisque. Maecenas id risus dictum, rhoncus odio vitae, maximus purus. Etiam
          efficitur dolor in dolor molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae
          molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio risus. Nunc nec
          luctus nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Duis nec nulla eget sem dictum elementum.
        </p>

        <ol>
          <li className="py-3">
            Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero lectus. Fusce
            vehicula dictum mi. In non dolor at sem ullamcorper venenatis ut sed dui. Ut ut est
            quam. Suspendisse quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi sit
            amet tellus scelerisque tortor semper posuere.
          </li>
          <li className="py-3">
            Morbi varius posuere blandit. Praesent gravida bibendum neque eget commodo. Duis auctor
            ornare mauris, eu accumsan odio viverra in. Proin sagittis maximus pharetra. Nullam
            lorem mauris, faucibus ut odio tempus, ultrices aliquet ex. Nam id quam eget ipsum
            luctus hendrerit. Ut eros magna, eleifend ac ornare vulputate, pretium nec felis.
          </li>
          <li className="py-3">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Nunc vitae pretium elit. Cras leo mauris, tristique in risus ac, tristique rutrum velit.
            Mauris accumsan tempor felis vitae gravida. Cras egestas convallis malesuada. Etiam ac
            ante id tortor vulputate pretium. Maecenas vel sapien suscipit, elementum odio et,
            consequat tellus.
          </li>
        </ol>
      </div>
    </div>

    <div className="">
      <div className="w-full px-4 py-6 text-base text-gray-500 md:text-sm">
        Tags:{' '}
        <a href="#" className="text-base text-green-500 no-underline md:text-sm hover:underline">
          Link
        </a>{' '}
        .{' '}
        <a href="#" className="text-base text-green-500 no-underline md:text-sm hover:underline">
          Link
        </a>
      </div>
    </div>

    <div className="">
      <hr className="mx-4 border-b-2 border-gray-400" />

      <div className="flex items-center w-full px-4 py-12 font-sans">
        <img
          className="w-10 h-10 mr-4 rounded-full"
          src="http://i.pravatar.cc/300"
          alt="Avatar of Author"
        />
        <div className="flex-1 px-2">
          <p className="mb-2 text-base font-bold leading-none md:text-xl">Jo Bloggerson</p>
          <p className="text-xs text-gray-600 md:text-base">
            Minimal Blog Tailwind CSS template by{' '}
            <a
              className="text-green-500 no-underline hover:underline"
              href="https://www.tailwindtoolbox.com"
            >
              TailwindToolbox.com
            </a>
          </p>
        </div>
        <div className="justify-end">
          <button className="px-4 py-2 text-xs font-bold text-gray-500 bg-transparent border border-gray-500 rounded-full hover:border-green-500 hover:text-green-500">
            Read More
          </button>
        </div>
      </div>

      <hr className="mx-4 border-b-2 border-gray-400" />
    </div>

    <div className="">
      <div className="flex content-center justify-between px-4 pb-12 font-sans">
        <div className="text-left">
          <span className="text-xs font-normal text-gray-600 md:text-sm">&lt; Previous Post</span>
          <br />
          <p>
            <a
              href="#"
              className="text-base font-bold text-green-500 no-underline break-normal md:text-sm hover:underline"
            >
              Blog title
            </a>
          </p>
        </div>
        <div className="text-right">
          <span className="text-xs font-normal text-gray-600 md:text-sm">Next Post &gt;</span>
          <br />
          <p>
            <a
              href="#"
              className="text-base font-bold text-green-500 no-underline break-normal md:text-sm hover:underline"
            >
              Blog title
            </a>
          </p>
        </div>
      </div>
    </div>
  </>
);