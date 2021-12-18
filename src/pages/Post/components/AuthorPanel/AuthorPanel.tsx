import { Link } from 'react-router-dom';

export const AuthorPanel = () => (
  <div>
    <hr className="border-b-2 border-gray-400" />

    <div className="flex items-center w-full px-4 py-12 font-sans">
      <img
        className="object-cover w-10 h-10 mr-4 rounded-full"
        src="/images/avatar.jpeg"
        alt="Avatar of Author"
      />
      <div className="flex-1 px-2">
        <p className="mb-2 text-base font-bold leading-none md:text-xl">Mieke de Bont</p>

        <p className="text-xs text-gray-600 md:text-base">
          Eigenaar van een kleinschalig catering bedrijf en liefhebber van lekker eten.
        </p>
      </div>
      <div className="justify-end">
        <Link
          to="/about"
          className="px-4 py-2 text-xs font-bold text-pink-400 bg-transparent border border-pink-400 rounded-full hover:underline "
        >
          Over mij
        </Link>
      </div>
    </div>

    <hr className="border-b-2 border-gray-400" />
  </div>
);
