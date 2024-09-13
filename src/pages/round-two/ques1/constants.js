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
  javascript: `function correctWord(s, n) {\n
    // Function body\n
}
\n
let n = parseInt(prompt());\n
let s = prompt();\n

correctWord(s, n);\n

console.log(s);`,

  python: `def correct_word(s, n):\n
    # Function body\n
    pass\n

n = int(input())\n
s = input()\n

correct_word(s, n)\n

print(s)`,
  java: `import java.util.Scanner;\n

public class Main {\n
    public static void correctWord(StringBuilder s, int n) {\n
        // Function body\n
    }\n
    
    public static void main(String[] args) {\n
        Scanner sc = new Scanner(System.in);\n
        int n = sc.nextInt();\n
        String s = sc.next();\n
        StringBuilder sb = new StringBuilder(s);\n
        
        correctWord(sb, n);\n
        
        System.out.println(sb.toString());\n
        sc.close();\n
    }\n
}`,
  cpp: `#include <iostream>\n
#include <string>\n

void correctWord(std::string& s, int n) {\n
    // Function body\n
}\n

int main() {\n
    int n;\n
    std::string s;\n
    std::cin >> n >> s;\n
    
    correctWord(s, n);\n
    
    std::cout << s << std::endl;\n
    return 0;\n
}`,
  c: `#include <stdio.h>\n
#include <string.h>\n

void correctWord(char* s, int n) {\n
    // Function body\n
}\n

int main() {\n
    int n;\n
    char s[101];\n
    scanf("%d", &n);\n
    scanf("%s", s);\n
    
    correctWord(s, n);\n
    
    printf("%s\n", s);\n
    return 0;\n
}`,
};