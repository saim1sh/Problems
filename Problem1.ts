function formatValue(
  input: string | number | boolean
): string | number | boolean {
  if (typeof input === "string") {
    const upperCase = input.toUpperCase();
    return upperCase;
  } else if (typeof input === "number") {
    const multiply = input * 10;
    return multiply;
  } else if (typeof input === "boolean") {
    const boolValue = input == true ? false : true;
    return boolValue;
  }
}

console.log(formatValue("hello"));
console.log(formatValue(5));
console.log(formatValue(true));
