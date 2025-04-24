import SearchBar from "./SearchBar"

function Header({ searchTerm, setSearchTerm }) {
  return (
    <header className="w-full bg-[#2d6ab1] flex justify-start items-center py-2 px-2.5">
      <h1 className="text-2xl text-white font-bold">
        <a
          href="/"
          className="hover:bg-[rgba(255,255,255,0.4)] px-0.5 transition"
        >
          GOOJARA.to
        </a>
      </h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </header>
  );
}

export default Header
