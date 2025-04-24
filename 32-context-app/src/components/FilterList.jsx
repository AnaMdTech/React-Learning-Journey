const links = [
  { name: "Browse", href: "/" },
  { name: "Movies", href: "/about" },
  { name: "Series", href: "/contact" },
  { name: "Forum", href: "/forum" },
];

function FilterList() {
  return (
    <div className="bg-[#e5e8f799]">
      <div>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`inline-block px-3 leading-[36px] text-[#333] mr-[5px] border-b-[3px] border-transparent hover:border-[#2d6ab1] transition-colors`}
          >
            {link.name}
          </a>
        ))}
      </div>
      <hr className="m-0 border-b-1 border-[#00000026]" />
    </div>
  );
}

export default FilterList;
