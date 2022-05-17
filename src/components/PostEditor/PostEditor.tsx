import React, { useRef, useEffect } from "react";
import SunEditor, { buttonList } from "suneditor-react";
import SunEditorCore from "suneditor/src/lib/core";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

const MyComponent = (props: any) => {
  const area = useRef();
  return (
    <div>
      <SunEditor
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        setDefaultStyle='font-size: 16px; font-weight: 700; font-family: "Smooch Sans"; line-height: 5px;'
        placeholder={props.placeholder}
        setOptions={{
          buttonList: [
            // default
            ["undo", "redo"],
            ["bold", "underline", "italic", "list"],
            ["image"],
            ["fullScreen"],
          ],
        }}
        height="570px"
      />
    </div>
  );
};
export default MyComponent;
