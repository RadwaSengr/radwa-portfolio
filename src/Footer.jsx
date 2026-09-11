function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 bg-body-tertiary border-top border-primary-subtle text-center mt-auto">
      <div className="container">
        <p className="mb-1 text-body-secondary fw-semibold">© {currentYear} Radwa Usama Sengr. All rights reserved.</p>
        <p className="small text-primary mb-0 fw-bold">Built with React & Bootstrap</p>
      </div>
    </footer>
  );
}

export default Footer;
