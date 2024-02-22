

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
        <div>
            <a
              href="/"
              className="uppercase font-bold text-2xl sm:text-3xl flex gap-2"
            >
              <img
                src={"https://i.ibb.co/H2BCyjK/shopper.png"}
                alt="logo"
                className="w-10"
              />
              shopline
            </a>
          </div>
        </aside> 
        <nav>
          <h6 className="footer-title">Services</h6> 
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav> 
        <nav>
          <h6 className="footer-title">Company</h6> 
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
          <h6 className="footer-title">Legal</h6> 
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    );
};

export default Footer;