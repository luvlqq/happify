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

/**
 * This function calculates the age of a user based on their birth date.
 * @param birthDate The birth date of the user.
 * @returns The age of the user.
 */
export async function calculateUserAge(birthDate: string): Promise<number> {
  const [day, month, year] = birthDate.split('.').map(Number);
  const today = new Date();
  const birth = new Date(year, month - 1, day);
  const age = today.getFullYear() - birth.getFullYear();

  return today.getMonth() < birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())
    ? age - 1
    : age;
}

/**
 * This function calculates the BMI of a user based on their weight and height.
 * @param weight The weight of the user.
 * @param height The height of the user.
 * @returns The BMI of the user.
 */
export async function calculateUserBmi(
  weight: number,
  height: number,
): Promise<number> {
  return Number((weight / Math.pow(height / 100, 2)).toFixed(2));
}
