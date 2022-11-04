import React, { useState, useEffect } from "react";
import {
  capitalStartCheck,
  TerminationCharCheck,
  equalQuotesCheck,
  onePeriodCheck,
  under13SpellCheck,
} from "../../regexExp/regex";
import Errors from "./errors";

// Component used to house the input component
const Input = () => {
  const [phrase, setPhrase] = useState("");
  const [errors, setErrors] = useState([]);
  const [checkSub, setCheckSub] = useState(false);
  /**
   * @desc Handles the change of input and stores it within the state
   * @param event eventObject
   */
  const handleChange = (event) => {
    setPhrase(event.target.value);
  };

  useEffect(() => {
    setErrors(errors);
  }, [errors]);

  /**
   * @desc Handles the submission of the phrase
   * @param e event taken
   */
  function handleSubmit(e) {
    e.preventDefault();
    setCheckSub(true);
    validate(phrase);
  }

  /**
   * @desc Used to validate the phrase using imported checks
   * @param phrase that has been tested
   * @returns {Array} returns an array containing the errors that the phrase includes
   */
  const validate = (phase) => {
    setErrors([]);
    if (!phase) {
      console.log("nothing");
    }
    if (!capitalStartCheck.test(phase)) {
      setErrors((prev) => [...prev, "Phrase must start with a capital letter"]);
    }
    if (!TerminationCharCheck.test(phase)) {
      setErrors((prev) => [
        ...prev,
        `String must end with one of the following sentence termination characters: ".", "?", "!"`,
      ]);
    }
    if (!equalQuotesCheck.test(phase)) {
      setErrors((prev) => [
        ...prev,
        "String must have an even number of quotation marks.",
      ]);
    }
    if (!onePeriodCheck.test(phase)) {
      setErrors((prev) => [
        ...prev,
        "Period characters must only appear at the end of the string",
      ]);
    }
    if (!under13SpellCheck(phase)) {
      setErrors((prev) => [...prev, "Numbers below 13 must be spelled out "]);
    }
  };

  return (
    <>
      <div className="grid grid-cols-12">
        <div className="xl:col-span-9 xl:ml-6 sm:ml-6 sm:mr-6 sm:col-span-full">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="input">Please Enter Your Phrase</label>
              <input
                type="text"
                id="input"
                className="bg-gray-50 border border-gray-300 mt-4 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="phase"
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              id="submitBtn"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="xl:col-span-3 sm:col-span-full sm:pt-10">
          <Errors errorList={errors} checkSub={checkSub} />
        </div>
      </div>
    </>
  );
};

export default Input;
