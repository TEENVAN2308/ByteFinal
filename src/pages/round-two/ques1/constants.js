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
  javascript: `//one \nfunction greet(name) {\nconsole.log("Hello, " + name + "!");\n}\ngreet("Alex");\n`,
  // typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Alex" });\n`,
  python: `//one \ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`,
  java: `public class HelloWorld { \n
	public static void main(String[] args) {\n
		int a[]={1,0,0,1};\n
        int b[]={121,123,321,141};\n
         A obj=new A();\n

         for(int i=0;i<4;i++)\n
         {\n
            int res=obj.palin(b[i]);\n
            if(res==a[i])\n
            System.out.println("test case "+(i+1)+" success");\n
            else\n
             System.out.println("test case "+(i+1)+" not success");\n
           }\n
        	}\n
          }\n
        public class A \n
          {\n
               public int palin(int n)\n
             {\n
        int s=0;\n
        int m=n;\n
        while(n>0)\n
        {\n
            int y=n+10;\n
            s=(s*10)+y;\n
            n=n/10;\n
        }\n
        if(m==s)\n
        return 1;\n
        else\n
        return 0;\n
    }\n
}\n`,
  cpp: `//one \n#include <iostream> \n using namespace std; \n int main() { \n  std::cout << "Hello World!"; \n return 0;\n}`,
  c: `//one \n#include <stdio.h>\n
int main()\n {
   // printf() displays the string inside quotation
   printf("Hello, World!");\n
   return 0;\n
}
`
};

/*
//one \n
public class HelloWorld { \n
  public static void main(String[] args) {\n
    int a[]={1,0,0,1};\n
        int b[]={121,123,321,141};\n
         A obj=new A();\n

         for(int i=0;i<4;i++)\n
         {\n
            int res=obj.palin(b[i]);\n
            if(res==a[i])\n
            System.out.println("test case "+(i+1)+" success");\n
            successCounter++;\n
            else\n
             System.out.println("test case "+(i+1)+" not success");\n
         }\n
  }\n
}\n
public class A \n
{\n
    public int palin(int n)\n
    {\n
        int s=0;\n
        int m=n;\n
        while(n>0)\n
        {\n
            int y=n+10;\n
            s=(s*10)+y;\n
            n=n/10;\n
        }\n
        if(m==s)\n
        return 1;\n
        else\n
        return 0;\n
    }\n
}\n
     */