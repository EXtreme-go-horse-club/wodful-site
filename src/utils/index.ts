export const isValidDocument = (value: string) => {
  if (typeof value !== "string") {
    return false;
  }

  value = value.replace(/[^\d]+/g, "");
  if ((value.length == 8 || value.length == 9) && !value.match(/(\d)\1{10}/)) {
    return true;
  }

  if (value.length !== 11 || !!value.match(/(\d)\1{10}/)) {
    return false;
  }

  const values = value.split("").map((el) => +el);
  const rest = (count: any) =>
    ((values
      .slice(0, count - 12)
      .reduce((soma, el, index) => soma + el * (count - index), 0) *
      10) %
      11) %
    10;

  return rest(10) === values[9] && rest(11) === values[10];
};

export const regexOnlyNumber = (value: string) => {
  return value.replace(/[^0-9]/g, "").trim();
};
