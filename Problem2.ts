function getLength(input: string | number[]): number {
  if (typeof input === "string") {
    let count = 0;
    for (let char of input) {
      count++;
    }
    return count;
  } else if (Array.isArray(input)) {
    let count = 0;
    for (let char of input) {
      count++;
    }
    return count;
  }
}

console.log(getLength("typescript"));
console.log(getLength([10, 20, 30, 40]));
