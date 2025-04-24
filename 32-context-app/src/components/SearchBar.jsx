function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="w-[350px] ml-6 max-w-[50%]">
      <input
        className="w-full py-[1px] px-[5px] rounded-[2px] text-white bg-[#81A6D0] block align-top leading-[1.6] "
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
    </div>
  );
}

export default SearchBar
