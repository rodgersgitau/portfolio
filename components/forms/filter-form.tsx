"use client";

export default function FilterForm() {
  return (
    <form
      className="flex flex-col justify-between w-full gap-8 md:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search for the tool you like"
          className="flex-1 bg-transparent border-2 rounded-lg md:w-80 border-foreground/50 focus:outline-none focus:border-accent"
        />
        <button
          type="submit"
          className="px-3 py-2 font-medium rounded-lg w-max text-accent-foreground bg-accent"
        >
          Search
        </button>
      </div>
      <select
        name="pricingType"
        defaultValue="All"
        className="relative tracking-wider bg-transparent border-2 rounded-lg outline-none w-max border-foreground/50 focus:outline-none focus:border-accent"
      >
        <option value="All">All</option>
        <option value="Freemium">Freemium</option>
        <option value="Free">Free</option>
        <option value="Paid">Paid</option>
      </select>
    </form>
  );
}
