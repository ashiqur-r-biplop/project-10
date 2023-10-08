import logo from "/public/Logo.png";
const Footer = () => {
  return (
    <div className="bg-[#000] py-[100px]">
      <div className="container mx-auto">
        <footer className="grid grid-cols-1 md:grid-cols-4  p-10 ] text-neutral-content">
          <nav className="flex flex-col">
            <header className="footer-title">
              <img width={80} src={logo} alt="" />
            </header>
            <p className="lg:w-[60%] text-justify">
              Hello welcome to my jewelery Zone we have good quality jewelery
              here
            </p>
          </nav>
          <nav className="flex flex-col">
            <header className="footer-title text-[#EFC65E]">Services</header>
            <a className="link link-hover">Custom Jewelry Design</a>
            <a className="link link-hover">Watch Repair</a>
            <a className="link link-hover">Jewelry Rental</a>
            <a className="link link-hover">Jewelry Engraving</a>
          </nav>
          <nav className="flex flex-col">
            <header className="footer-title text-[#EFC65E]">Company</header>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">All Jewelry</a>
            <a className="link link-hover">My Jewelry</a>
            <a className="link link-hover">Add Jewelry</a>
            <a className="link link-hover">Blogs</a>
          </nav>
          <nav className="flex flex-col ">
            <header className="footer-title text-[#EFC65E]">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
