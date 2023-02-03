import { useMemo } from "react";

const ContactPage = () => {
  const inputs = useMemo(() => {
    return [
      {
        type: "text",
        name: "contact",
        label: "Your Name",
        required: true,
        placeholder: "e.g Rodgers M Gitau",
      },
      {
        type: "text",
        name: "company",
        label: "Company",
        required: true,
        placeholder: "e.g Top Brand Limited",
      },
      {
        type: "telephone",
        name: "phoneNumber",
        label: "Phone Number",
        required: false,
        placeholder: "e.g +254 712345678",
      },
      {
        type: "email",
        name: "email",
        label: "Email",
        required: true,
        placeholder: "e.g rodgersgitau@example.com",
      },
    ];
  }, []);
  return (
    <div className="w-90 md:w-[45vw] h-full mx-auto px-8 flex flex-col gap-4">
      <h1 className="font-black text-xl text-black dark:text-gray-400">
        Leave some details and I will reach out ...
      </h1>
      <form className="my-8 w-full h-full grid grid-cols-2 gap-10">
        {inputs.map(({ name, label, required, ...rest }) => {
          return (
            <div
              key={`input-${name}`}
              className="relative z-0 flex flex-col-reverse gap-2 w-full group text-sm text-black dark:text-gray-400"
            >
              <input
                {...rest}
                id={name}
                required={required}
                className="py-2.5 px-0 w-full bg-transparent  placeholder:text-gray-600 dark:placeholder:text-gray-500 appearance-none border-0 border-b-2 border-gray-600 dark:border-gray-300 focus:border-purple-600 dark:focus:border-purple-600 focus:outline-none focus:ring-0 peer"
              />
              <label
                htmlFor={name}
                className="text-sm font-semibold peer-focus:text-purple-500"
              >
                <div className="flex gap-1 items-center">
                  <span>{label}</span>
                  {required && <sup>*</sup>}
                </div>
              </label>
            </div>
          );
        })}
        <div className="col-span-2 relative z-0 flex flex-col-reverse gap-3 w-full group text-sm text-black dark:text-gray-400">
          <textarea
            rows={8}
            maxLength={300}
            placeholder="e.g I liked your portfolio and would like to discuss working on a project"
            className="p-2.5 w-full rounded-md bg-transparent placeholder:text-gray-600 dark:placeholder:text-gray-500 appearance-none border-2 border-gray-600 dark:border-gray-300 focus:border-purple-600 focus:outline-none focus:ring-0 peer"
          />
          <label
            htmlFor="message"
            className="text-sm font-semibold peer-focus:text-purple-500"
          >
            Your Message
          </label>
        </div>
        <button
          type="submit"
          className="col-span-2 opacity-80 text-[#fff] bg-black dark:bg-purple-600 hover:opacity-100 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:opacity-100"
        >
          Request For Callback
        </button>
      </form>
      <small className="text-right text-xs text-black dark:text-gray-500">
        * Required Fields
      </small>
    </div>
  );
};
export default ContactPage;