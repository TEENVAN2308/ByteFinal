import { useRef, useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector2";
import { CODE_SNIPPETS } from "./constants";
import Output from "./Output2";
import  "../../../stylesheet/hidecode.css";
import Submit from "./submit_two";
const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");
  const onMount = (editor, monaco) => {
    editorRef.current = editor;
    editor.focus();
  };

  

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };
  
  return (
    <Box>
      <HStack spacing={4}>
        <Box w="50%">
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
              lineNumbers:'on',
              readOnly:false,
            }}
            height="75vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </Box>
        <Output editorRef={editorRef} language={language} />
        <Submit sourceCode={editorRef} language={language} />
      </HStack>
    </Box>
  );
};
export default CodeEditor;
