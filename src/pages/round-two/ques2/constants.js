export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  python: "3.10.0",
  java: "15.0.2",
  cpp:"10.2.0",
  c:"10.2.0",
};
export const HIDDEN_LINES = {
  javascript:[1,2,3],  // Hide the greet("Alex"); line for JavaScript
  python: [],      // Hide the greet("Alex") line for Python
  java: [],        // Hide the main function's output for Java
  cpp: [],         // Hide the cout line for C++
  c: [],           // Hide the printf("Hello World") line for C
};

// 
// 


export const CODE_SNIPPETS = {
  javascript: `//two  \nfunction greet(name) {\nconsole.log("Hello, " + name + "!");\n}\ngreet("Alex");\n`,
  // typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Alex" });\n`,
  python: ` //two \n def greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`,
  java: `public class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
  cpp:` #include <iostream> \n using namespace std; \n int main() { \n  std::cout << "Hello World!"; \n return 0;\n}`,
  c:`#include <stdio.h>\n
int main()\n {
   // printf() displays the string inside quotation
   printf("Hello, World!");\n
   return 0;\n
}
`
};
