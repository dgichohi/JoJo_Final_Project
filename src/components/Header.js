const Header = ({ title, subtitle, showLogo = false }) => {
  return (
    <header className="mb-10 text-center">
      {showLogo && (
        <div className="flex justify-center mb-6">
          <img
            src="/images/Jojos-Bizarre-Adventure-Logo.png"
            alt="JoJo's Bizarre Adventure"
            className="w-[300px] md:w-[450px]"
          />
        </div>
      )}

      {title && (
        <h1 className="text-4xl font-extrabold">
          {title}
        </h1>
      )}

      {subtitle && (
        <p className="text-white/70 mt-2 text-lg">
          {subtitle}
        </p>
      )}
    </header>
  );
};

export default Header;
