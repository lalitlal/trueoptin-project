"use client";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { AdContext } from "../context/AdContext";
import ImageUploader from "./ImageUploader";

const InputCTAForm = () => {
  const router = useRouter();
  const adcontext = useContext(AdContext);
  const imageUploader = <ImageUploader></ImageUploader>;
  const [formData, setFormData] = useState({
    headline: "",
    description: "",
    cta: "",
    // message: "",
  });

  const [formErrors, setFormErrors] = useState({
    headline: false,
    description: false,
    cta: false,
    // message: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (e.target.name == "headline") {
      adcontext.setHeadline(e.target.value);
    }

    if (e.target.name == "cta") {
      adcontext.setCTA(e.target.value);
    }

    if (e.target.name == "description") {
      adcontext.setDescription(e.target.value);
    }

    setFormErrors({
      ...formErrors,
      [e.target.name]: false,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errorsExist = false;
    const newFormErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newFormErrors[key] = true;
        errorsExist = true;
      }
    });
    if (errorsExist) {
      setFormErrors(newFormErrors);
      return;
    }
    setIsSubmitting(true);

    // Simulate a loading delay of 2 seconds
    adcontext.setIsDeployed(true);
    router.push("/demo");
    adcontext.setCurrentPage(0);
    setIsSubmitting(false);
  };

  const maxDescription = 70;
  const maxHeadline = 30;
  const maxCTA = 10;

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="mb-4">
        <label
          htmlFor="headline"
          className="block text-gray-700 font-bold mb-2"
        >
          Headline
        </label>
        <input
          type="text"
          name="headline"
          maxLength={maxHeadline}
          value={formData.headline}
          onChange={handleChange}
          className={`border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full ${
            formErrors.headline ? "border-red-500" : "focus:border-indigo-500"
          }`}
          placeholder="Enter your headline"
        />
        <div style={{ fontSize: "0.8rem", color: "#888" }}>
          Maximum {maxHeadline - formData.headline.length} characters remaining
        </div>
        {formErrors.headline && (
          <p className="text-red-500 text-sm mt-1">This field is required</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-bold mb-2"
        >
          Description
        </label>
        <input
          type="text"
          name="description"
          maxLength={maxDescription}
          value={formData.description}
          onChange={handleChange}
          className={`border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full ${
            formErrors.description
              ? "border-red-500"
              : "focus:border-indigo-500"
          }`}
          placeholder="Enter your description"
        />
        <div style={{ fontSize: "0.8rem", color: "#888" }}>
          Maximum {maxDescription - formData.description.length} characters
          remaining
        </div>
        {formErrors.description && (
          <p className="text-red-500 text-sm mt-1">This field is required</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="cta" className="block text-gray-700 font-bold mb-2">
          Call to Action
        </label>
        <input
          type="text"
          name="cta"
          value={formData.cta}
          maxLength={maxCTA}
          onChange={handleChange}
          className={`border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full ${
            formErrors.cta ? "border-red-500" : "focus:border-indigo-500"
          }`}
          placeholder="Enter your CTA"
        />
        <div style={{ fontSize: "0.8rem", color: "#888" }}>
          Maximum {maxCTA - formData.cta.length} characters remaining
        </div>
        {formErrors.cta && (
          <p className="text-red-500 text-sm mt-1">This field is required</p>
        )}
      </div>

      {/* <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.cta}
          onChange={handleChange}
          className={`border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full ${
            formErrors.cta ? "border-red-500" : "focus:border-indigo-500"
          }`}
          placeholder="Enter your email address"
        />
        {formErrors.cta && (
          <p className="text-red-500 text-sm mt-1">This field is required</p>
        )}
      </div> */}
      {/* <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full h-32 resize-none ${
            formErrors.message ? "border-red-500" : "focus:border-indigo-500"
          }`}
          placeholder="Enter your message"
        />
        {formErrors.message && (
          <p className="text-red-500 text-sm mt-1">This field is required</p>
        )}
      </div> */}
      <div className="mb-4">{imageUploader}</div>
      <button
        type="submit"
        className={`bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline relative w-full h-full ${
          isSubmitting ? "cursor-not-allowed opacity-50" : ""
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="flex justify-center items-center">
            <div role="status">
              <svg
                aria-hidden="true"
                class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div
            className="flex justify-center items-center"
            // onClick={() => {
            //   adcontext.setCurrentPage(0);
            //   adcontext.setIsDeployed(true);
            // }}
          >
            Deploy
          </div>
        )}
      </button>
    </form>
  );
};

export default InputCTAForm;
