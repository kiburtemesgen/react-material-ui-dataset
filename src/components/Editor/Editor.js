import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-solarized_dark";

const Editor = ({ setQuery, value, setValue, isOpen }) => {
  const onChange = (newValue) => {
    setValue(newValue);
  };

  const onSubmit = () => {
    var Z = value.toLowerCase().slice(value.indexOf("from") + "from".length);
    setQuery(Z.split(" ")[1]);
  };

  return (
    <main>
      <AceEditor
        placeholder="write your code here"
        mode="mysql"
        width="100%"
        theme="solarized_dark"
        name="blah2"
        fontSize={14}
        minLines={20}
        maxLines={40}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        style={{ color: "white", backgroundColor: "#2c3a47" }}
        value={``}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </main>
  );
};

export default Editor;
