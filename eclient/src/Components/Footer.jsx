function Footer() {
  return (
    <footer className=" w-full border-t fixed bottom-0 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-4 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Project by Nithesh Shetty
        </p>
      </div>
    </footer>
  );
}

export default Footer;
