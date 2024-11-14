import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChampionsOpen, setIsChampionsOpen] = useState(false);
  const [isMoviesOpen, setIsMoviesOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsChampionsOpen(false);
    setIsMoviesOpen(false);
  };

  return (
    <header className="fixed top-0 w-full h-14 bg-gray-900 text-white flex justify-center z-40">
      <div className="flex w-3/4 mx-auto justify-between items-center">
        <div className="left-side font-monty lg:text-4xl text-xl sm:text-2xl md:text-3xl">
          <h1>NecroCity</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="right-side space-x-6 font-creepy hidden md:flex relative  lg:text-2xl md:text-2xl">
          <Link to="/">Home</Link>
          <div className="relative group">
            <button className="hover:text-gray-300">Champions</button>
            <div className="absolute left-0 top-full hidden group-hover:block bg-gray-800 text-white p-2 rounded shadow-lg space-y-2 transition-opacity duration-1000 opacity-0 group-hover:opacity-100">
              <Link to="/twistedfate" className="block hover:bg-gray-700 px-3 py-1 rounded whitespace-nowrap md:text-lg">Twisted Fate</Link>
              <Link to="/orianna" className="block hover:bg-gray-700 px-3 py-1 rounded whitespace-nowrap md:text-lg">Orianna</Link>
              <Link to="/lissandra" className="block hover:bg-gray-700 px-3 py-1 rounded whitespace-nowrap md:text-lg">Lissandra</Link>
            </div>
          </div>
          <div className="relative group">
            <button className="hover:text-gray-300">Movies</button>
            <div className="absolute left-0 top-full hidden group-hover:block bg-gray-800 text-white p-2 rounded shadow-lg space-y-2 transition-opacity duration-1000 opacity-0 group-hover:opacity-100">
              <Link to="/madagascarpenguins" className="block hover:bg-gray-700 px-3 py-1 rounded whitespace-nowrap text2-
               md:text-lg">Madagascar Penguins</Link>
              <Link to="/despicableme" className="block hover:bg-gray-700 px-3 py-1 rounded whitespace-nowrap text2-
               md:text-lg">Despicable Me</Link>
              <Link to="/wreckitralph" className="block hover:bg-gray-700 px-3 py-1 rounded whitespace-nowrap text-2xl md:text-lg">Ralph Breaks the Internet</Link>
            </div>
          </div>
          <Link to="/anime">Anime</Link>
        </nav>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl focus:outline-none"
          >
            &#9776;
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-800 text-white p-4 absolute top-14 left-0 w-full shadow-lg space-y-4 transition-transform duration-1000 ${
          isMobileMenuOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <Link to="/" onClick={handleLinkClick} className="block">Home</Link>

        {/* Champions Section */}
        <div>
          <button
            className="w-full text-left"
            onClick={() => setIsChampionsOpen(!isChampionsOpen)}
          >
            Champions
          </button>
          {isChampionsOpen && (
            <div className="pl-4 mt-2 space-y-2">
              <Link to="/twistedfate" onClick={handleLinkClick} className="block">Twisted Fate</Link>
              <Link to="/orianna" onClick={handleLinkClick} className="block">Orianna</Link>
              <Link to="/lissandra" onClick={handleLinkClick} className="block">Lissandra</Link>
            </div>
          )}
        </div>

        {/* Movies Section */}
        <div>
          <button
            className="w-full text-left"
            onClick={() => setIsMoviesOpen(!isMoviesOpen)}
          >
            Movies
          </button>
          {isMoviesOpen && (
            <div className="pl-4 mt-2 space-y-2">
              <Link to="/madagascarpenguins" onClick={handleLinkClick} className="block">Madagascar Penguins</Link>
              <Link to="/despicableme" onClick={handleLinkClick} className="block">Despicable Me</Link>
              <Link to="/wreckitralph" onClick={handleLinkClick} className="block">Ralph Breaks the Internet</Link>
            </div>
          )}
        </div>

        <Link to="/anime" onClick={handleLinkClick} className="block">Anime</Link>
      </div>
    </header>
  );
}

export default Nav;
