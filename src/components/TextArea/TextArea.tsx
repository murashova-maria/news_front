import React from "react";

export const TextArea = (props: any) => {
  return (
    <div
      className={
        props.title
          ? "text-field title"
          : `text-field ${props.breaking ? "breaking" : ""} ${
              props.textarea ? "textarea" : ""
            }`
      }
    >
      <textarea
        readOnly={props.readOnly}
        placeholder={props.placeholder}
        value={props.value}
        {...props}
        className="text-field__input"
      ></textarea>
    </div>
  );
};
