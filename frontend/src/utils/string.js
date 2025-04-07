const isEmail = (input) => {
  if (input.trim() === "") return false;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(input);
};

export default isEmail;
