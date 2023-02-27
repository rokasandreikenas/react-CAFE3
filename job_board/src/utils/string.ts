export const getFullName = (firstName: string, lastName: string) => {
  return `${firstName} ${lastName}`;
};

export const showHiddenPassword = (password: string) => {
  return "*".repeat(password.length);
};

// function that converts string to * e.g. rokas => *****
