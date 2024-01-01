export const checkRegexEmail = (email: string) => {
  const regex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  return regex.test(email);
}