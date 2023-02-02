import { useMemo } from "react";

const ContactPage = () => {
  const inputs = useMemo(() => {
    return [
      { type: "text", name: "firstName", label: "First Name", required: true },
      { type: "text", name: "lastName", label: "Last Name", required: true },
      { type: "email", name: "email", label: "Email", required: true },
      { type: "text", name: "company", label: "Company", required: true },
    ];
  }, []);
  return (
    <div className="w-90 md:w-[40vw] h-full mx-auto flex items-center justify-center">
      <form className="w-full h-full flex flex-col gap-8 p-8">
        {inputs.map(({ name, label, ...rest }) => {
          return (
            <div
              key={`input-${name}`}
              className="relative z-0 w-full group text-sm text-black dark:text-gray-400"
            >
              <label htmlFor={name} className="text-sm focus:text-purple-600">
                {label}
              </label>
              <input
                id={name}
                {...rest}
                className="py-2.5 px-0 w-full bg-transparent appearance-none border-0 border-b-2 border-gray-600 dark:border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-0 peer"
              />
            </div>
          );
        })}
        <button
          type="submit"
          className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        >
          Request For Callback
        </button>
      </form>
    </div>
  );
};
export default ContactPage;
