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
  javascript: ``,
  python: ``,
  java: `import java.util.Scanner;\n
        public class ReverseString {\n

      public static void main(String[] args) {\n
        Scanner scanner = new Scanner(System.in);\n
        String input = scanner.nextLine();\n
       String reversed = reverse(input);\n
         System.out.println(reversed);\n
        /*if you want to check any test cases write it here! 
        DO NOT ALTER ANY OTHER CODE!! \n
        */
        // String test="testcase";\n
       // System.out.println(reverse(test));\n
        
        scanner.close();\n

    }\n


    public static String reverse(String str) {\n

        StringBuilder sb = new StringBuilder(str);\n
        return sb.reverse().toString();\n

    }\n
}`,
  cpp: ``,
  c: `#include <stdio.h>\n
#include <string.h>\n

// Function to take input dynamically from Piston API\n
void takeInput(char *input) {\n
    // Modify this part to take input from Piston API\n
    printf("Enter a string: ");\n
    // fgets(input, 100, stdin);\n
    input[strcspn(input, "\n")] = '\0'; // To remove the newline character\n
}
\n
// Function to reverse the string\n
void reverseString(char *str) {\n
    int n = strlen(str);\n
    for (int i = 0; i < n / 2; i++) {\n
        char temp = str[i];\n
        str[i] = str[n - i - 1];\n
        str[n - i - 1] = temp;\n
    }\n
}\n
\n
// Main function\n
int main() {\n
    char input[100];\n
    takeInput(input);\n
    reverseString(input);\n
    printf("%s\n", input);\n
    return 0;\n
}\n
`
};