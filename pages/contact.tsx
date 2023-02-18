import { useEffect, useMemo, useState } from "react";

import { useForm } from "@formspree/react";

const FormId =
  process.env.NEXT_PUBLIC_FORMSPREE_ID || process.env.NEXT_PUBLIC_FORM;

interface MessageType {
  type: "info" | "success" | "error";
  text: string;
}

const ContactPage = () => {
  const [state, handleSubmit] = useForm(FormId || "");
  const [message, setMessage] = useState<MessageType | undefined>(undefined);

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
        required: false,
        placeholder: "e.g Top Brand Limited",
      },
      {
        type: "tel",
        name: "phoneNumber",
        label: "Phone Number",
        required: false,
        placeholder: "e.g +254712345678",
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

  useEffect(() => {
    if (state.succeeded) {
      setMessage({
        type: "success",
        text: `Thank you! Your form submission have been received. I will reach out soon`,
      });
    } else if (state.errors.length > 0) {
      const { code, message } = state.errors[0];
      setMessage({
        type: "error",
        text: `${code}! ${message}`,
      });
    }

    return () => {
      setMessage(undefined);
    };
  }, [state.succeeded, state.errors.length]);

  return (
    <div className="h-full w-90 md:w-[45vw] mx-auto flex flex-col gap-4">
      <h1 className="text-xl font-black text-black dark:text-gray-400">
        Leave some details and I will reach out ...
      </h1>
      {typeof message !== "undefined" && (
        <div
          className={`${alertStyling(
            message.type
          )} w-full px-4 py-2.5 flex items-center gap-8 rounded-md`}
        >
          <p className="flex-1 text-sm font-semibold ">{message.text}</p>
          <button
            onClick={() => setMessage(undefined)}
            className="text-lg font-semibold bg-transparent"
          >
            x
          </button>
        </div>
      )}
      <form
        method="POST"
        name="RGitauContactForm"
        onSubmit={handleSubmit}
        className="grid flex-1 w-full h-full grid-cols-2 gap-10"
      >
        <p className="hidden">
          <label id="contact-form-bot-label">
            Don't fill this out if you're human:{" "}
            <input name="bot-field" aria-labelledby="contact-form-bot-label" />
          </label>
        </p>
        {inputs.map(({ name, label, required, ...rest }) => {
          return (
            <div
              key={`input-${name}`}
              className="relative z-0 flex flex-col-reverse w-full gap-2 text-sm text-black group dark:text-gray-400"
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
                <div className="flex items-center gap-1">
                  <span>{label}</span>
                  {required && <sup>*</sup>}
                </div>
              </label>
            </div>
          );
        })}
        <div className="relative z-0 flex flex-col-reverse w-full col-span-2 gap-3 text-sm text-black group dark:text-gray-400">
          <textarea
            rows={8}
            id="message"
            name="message"
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
          disabled={state.submitting}
          className="col-span-2 opacity-80 text-[#fff] bg-black dark:bg-purple-600 hover:opacity-100 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:opacity-100"
        >
          Request For Callback
        </button>
      </form>
      <small className="text-xs text-right text-black dark:text-gray-500">
        * Required Fields
      </small>
    </div>
  );
};

const alertStyling = (type: MessageType["type"]) => {
  switch (type) {
    case "error":
      return "bg-pink-100 text-pink-900";
    case "success":
      return "bg-emerald-100 text-emerald-900";
    default:
      return "bg-purpleGray text-black";
  }
};

export default ContactPage;
