const Navigation = () => {
  return (
    <nav className="w-full flex flex-col md:flex-row items-center gap-10">
      <a
        href="/"
        title="Homepage"
        className="font-semibold text-2xl text-pink-500  transition-all ease-out hover:translate-y-1"
      >
        RMG
      </a>
      <div className="flex-1 flex gap-8 justify-center items-center">
        <a
          href="/about"
          className="underline underline-offset-8 hover:text-pink-500  transition-all ease-out hover:translate-y-1"
        >
          Info
        </a>
        <a
          href="/journal"
          className="underline underline-offset-8 hover:text-pink-500  transition-all ease-out hover:translate-y-1"
        >
          Journal
        </a>
        <a
          href="/work"
          className="underline underline-offset-8 hover:text-pink-500  transition-all ease-out hover:translate-y-1"
        >
          Work
        </a>
        <a
          href="/experiments"
          className="underline underline-offset-8 hover:text-pink-500  transition-all ease-out hover:translate-y-1"
        >
          Play
        </a>
        <a
          href="/contact"
          className="sr-only underline underline-offset-8 hover:text-pink-500  transition-all ease-out hover:translate-y-1"
        >
          Contact
        </a>
      </div>
      <div className="hidden md:flex md:items-center">
        <button className="px-4 py-3 rounded-md bg-pink-100 text-pink-800 hover:bg-pink-500 hover:text-white capitalize font-semibold transition-all ease-out hover:translate-y-1">
          Let's Talk
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
