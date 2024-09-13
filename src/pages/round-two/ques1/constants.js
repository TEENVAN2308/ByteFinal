export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  python: "3.10.0",
  java: "15.0.2",
  cpp: "10.2.0",
  c: "10.2.0",
};
export const HIDDEN_LINES = {
  javascript: [1, 2, 3],  // Hide the greet("Alex"); line for JavaScript
  python: [],      // Hide the greet("Alex") line for Python
  java: [],        // Hide the main function's output for Java
  cpp: [],         // Hide the cout line for C++
  c: [],           // Hide the printf("Hello World") line for C
};

// 
// 


export const CODE_SNIPPETS = {
  javascript: `\n function greet(name) {\n console.log("Hello, " + name + "!");\n}\ngreet("Alex");\n`,
  python: ``,
  java: ``,
  cpp: ``,
  c: ``,
};