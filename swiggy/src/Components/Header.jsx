function Header() {
  return (
      <header className="flex flex-col gap-5 md:flex-row md:justify-between md:items-center px-5 md:px-16 py-5 shadow-md">
      <h1 className="text-orange-500 text-3xl font-bold">
        Swiggy
      </h1>

      <nav className="flex gap-10">
        <a href="#" className="text-gray-700 hover:text-orange-500">
          Search
        </a>

        <a href="#" className="text-gray-700 hover:text-orange-500">
          Offers
        </a>

        <a href="#" className="text-gray-700 hover:text-orange-500">
          Help
        </a>

        <a href="#" className="text-gray-700 hover:text-orange-500">
          Sign in
        </a>

        <a href="#" className="text-gray-700 hover:text-orange-500">
          Cart
        </a>
      </nav>

    </header>
  );
}

export default Header;