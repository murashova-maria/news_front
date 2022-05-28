import React, { useRef, useEffect } from "react";
import SunEditor, { buttonList } from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

const MyComponent = (props: any) => {
  const area = useRef();
  return (
    <div>
      <SunEditor
        setContents={props.defaultValue}
        onChange={props.onChange}
        setDefaultStyle='font-size: 16px; font-weight: 400; font-family: "Smooch Sans";'
        placeholder={props.placeholder}
        setOptions={{
          imageUploadSizeLimit: 10000000,
          fontSize : [
            8, 10, 14, 16, 18, 20, 22, 24, 36
        ],
          buttonList: [
            // default
            ["undo", "redo"],
            ["bold", "underline", "italic", "list"],
            ["image"],
            ["fullScreen"],
            ['fontSize'],
          ],
        }}
        height="570px"
      />
    </div>
  );
};
export default MyComponent;
