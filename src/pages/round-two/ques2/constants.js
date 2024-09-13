export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  python: "3.10.0",
  java: "15.0.2",
  cpp:"10.2.0",
  c:"10.2.0",
};


export const CODE_SNIPPETS = {
  javascript: `function printButterflyPattern(rows) {\n
    // write your actual code here\n
}\n

let rows = parseInt(prompt("Enter the number of rows: "));\n
printButterflyPattern(rows);`,
  // typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Alex" });\n`,
  python: `def print_butterfly_pattern(rows):\n
    # write your actual code here\n
    pass\n

rows = int(input("Enter the number of rows: "))\n
print_butterfly_pattern(rows) `,
  java: `import java.util.Scanner;\n

public class Main {\n
    public static void printButterflyPattern(int rows) {\n
        // write your actual code here\n
    }\n

    public static void main(String[] args) {\n
        Scanner sc = new Scanner(System.in);\n
        System.out.print("Enter the number of rows: ");\n
        int rows = sc.nextInt();\n

        printButterflyPattern(rows);\n
    }\n
}`,
  c:`#include <stdio.h>\n

void printButterflyPattern(int rows) {\n
    // write your actual code here\n
}\n

int main() {\n
    int rows;\n
    printf("Enter the number of rows: ");\n
    scanf("%d", &rows);\n

    printButterflyPattern(rows);\n

    return 0;\n
} `,
  cpp:`#include <iostream>\n

void printButterflyPattern(int rows) {\n
    // write your actual code here\n
}\n

int main() {\n
    int rows;\n
    std::cout << "Enter the number of rows: ";\n
    std::cin >> rows;\n

    printButterflyPattern(rows);\n

    return 0;\n
}`,
};
