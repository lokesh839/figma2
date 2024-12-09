const NavLinks = ({ isMobile }) => {
    const links = ['Home', 'About', 'Process', 'Portfolio', 'Blog', 'Services'];
  
    return (
      <ul
        className={`${
          isMobile
            ? 'flex flex-col space-y-4 py-4 px-6 bg-gray-100'
            : 'hidden lg:flex space-x-9 text-gray-700 lg:items-center'
        }`}
      >
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="hover:text-purple-700">
              {link}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#"
            className={`${
              isMobile ? 'px-5 py-2' : 'px-5 py-4'
            } bg-purple-600 text-white rounded hover:bg-purple-500`}
          >
            Contact
          </a>
        </li>
      </ul>
    );
  };
  
  export default NavLinks;
  