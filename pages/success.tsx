import { FiArrowLeft } from "react-icons/fi";

export default function () {
  return (
    <div className="min-h-[60vh] w-max h-max">
      <div className="flex flex-col gap-12">
        <h1 className="font-sans text-2xl font-semibold">Thank you!</h1>
        <p className="font-sans">
          Your form submission have been received. I will reach out soon
        </p>
        <a
          href="/"
          className="col-span-2 opacity-80 text-[#fff] bg-black dark:bg-purple-600 hover:opacity-100 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:opacity-100"
        >
          <div className="flex items-center gap-8">
            <FiArrowLeft fontSize="1.25rem" />
            <span>Back to the homepage</span>
          </div>
        </a>
      </div>
    </div>
  );
}
