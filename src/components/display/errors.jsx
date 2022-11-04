import React from "react";

/**
 * @desc Function
 * @param errorList array of stored errors
 */
const Errors = (errorList) => {
  const check = errorList.checkSub;
  const errorLength = errorList.errorList.length;
  if (check) {
    return (
      <div>
        <h1 id="displayTitle" className="pb-5">
          Errors Within Phrase: {errorLength}
        </h1>
        <ul>
          {errorLength > 0 ? (
            errorList.errorList.map((error, index) => {
              return (
                <li className="pb-3 text-red-600" key={index}>
                  {" "}
                  {error}
                </li>
              );
            })
          ) : (
            <li className="pb-3 text-green-500">🎉 No Errors 🎉</li>
          )}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h1 id="displayTitle" className="pb-5">
          Please Enter a Phrase
        </h1>
      </div>
    );
  }
};

export default Errors;
