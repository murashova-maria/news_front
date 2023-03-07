import React, { useRef, useEffect } from "react";
import SunEditor, { buttonList } from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import { ADMIN_DOMAIN } from "../../config";
import { useHttp } from "../../hooks/useHttp";

const MyComponent = (props: any) => {
  const {request} = useHttp()


  const handleImageUplaod = (files: Array<File>, info: object, uploadHandler: Function) => {
    const data = new FormData()
    files.forEach((f, index) => {
      data.append(`file-${index}`, f)
    })
    request({
      path: `/editorimage/`,
      method: "POST",
      body: data,
    }).then(imagesRes => {
      if(imagesRes?.result) {
        imagesRes.result = imagesRes.result.map((i: any) => {
          return {
            ...i,
            url: `${ADMIN_DOMAIN}${i.url}`
          }
        })
      }
      console.log(imagesRes);
      uploadHandler(imagesRes)    
    })
  }

  console.log(props.defaultValue);
  return (
    <div>
      <SunEditor
        setContents={props.defaultValue}
        onChange={props.onChange}
        onImageUploadBefore={handleImageUplaod}
        setDefaultStyle='font-size: 16px; font-weight: 400; font-family: "Smooch Sans";'
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
