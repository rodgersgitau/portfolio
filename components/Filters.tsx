import { Dispatch, FC, SetStateAction } from "react";

export interface FilterProps {
  filters: string[];
  activeFilter: string;
  setActiveFilter: Dispatch<SetStateAction<string>>;
}

export const Filters: FC<FilterProps> = ({
  filters,
  activeFilter,
  setActiveFilter,
}) => {
  return (
    <div className="flex flex-wrap items-center space-x-12">
      {filters.map((filter) => (
        <span
          key={filter}
          style={{ cursor: "pointer" }}
          onClick={() => setActiveFilter(filter)}
          className={`text-lg capitalize font-semibold font-serif ${
            filter === activeFilter
              ? "text-purple-600/75 underline underline-offset-2"
              : "dark:text-brightGray/75 text-black/75"
          } hover:underline hover:underline-offset-2`}
        >
          {filter}
        </span>
      ))}
    </div>
  );
};

export default Filters;
