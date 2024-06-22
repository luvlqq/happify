/**
 * This function appends the current date to the given word and returns it.
 * @param word The word to which the current date will be appended.
 * @param userData Optional parameter to be used for add additional user data.
 * @returns The word with the current date appended to it. Type: `${currentDate}_${word}`
 */
export async function appendCurrentDateToFile(
  word: string,
  userData?: string,
): Promise<string> {
  const currentDate = new Date().toISOString().split('T')[0].replace(/-/g, '');
  return userData
    ? `${currentDate}_${word}_${userData}`
    : `${currentDate}_${word}`;
}
