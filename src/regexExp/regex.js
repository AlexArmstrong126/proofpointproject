/**
 * @desc Used to validate if the phrase starts with a capital letter
 * @returns boolean return either a true or false
 */
export const capitalStartCheck = new RegExp("^[A-Z]");

/**
 * @desc Used to validate if the phrase has an equal number of quotations
 * @returns boolean return either a true or false
 */
export const equalQuotesCheck = new RegExp('^^[^"]*("[^"]*"[^"]*)*$');

/**
 * @desc Used to validate if the phrase ends with a termination character
 * @returns boolean return either a true or false
 */
export const TerminationCharCheck = new RegExp("[.?!]$");

/**
 * @desc Used to validate if the phrase only has a period at the end
 * @returns boolean return either a true or false
 */
export const onePeriodCheck = new RegExp("^[^.]*.[.]*$");

/**
 * @desc Used to validate the phrase, specifically if numbers under 13 are spelt or numeric
 * @param phrase the phrase that will be tested
 * @returns boolean return either a true or false depending if the conditions are met
 */
export const under13SpellCheck = (phrase) => {
  const phraseArray = phrase.split(/[, ]+/);
  let result = null;
  outer_loop: for (let i = 0; i < 13; i++) {
    for (let j = 0; j < phraseArray.length; j++) {
      if (phraseArray[j] === i.toString()) {
        result = false;
        break outer_loop;
      } else {
        result = true;
      }
    }
  }

  return result;
};
