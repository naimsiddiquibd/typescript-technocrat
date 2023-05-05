// Example 1 (Simple variable)
let emni: any;
emni = "Next Level Web Development";
(emni as string).length;
(<string>emni).length; // It wown't be working in the TSX file. Best practice is to use the "as" operator.

// Example 2 (Function)
function kgToGram(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return value;
  }
  if (typeof param === "number") {
    const value = param * 1000;
    return value;
  }
}

const resultToBeString = kgToGram('5') as  string;
const resultToBeNumber = kgToGram(5) as number;

// Example 3 (Try Catch)
type customErrorType = {
    message: string;
}
try{
}catch(err){
    console.log((err as customErrorType).message);
}