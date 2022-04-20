import React from "react";

export const Input = (props: any) => {
  return (
    <div className="text-field">
      <input
        className="text-field__input"
        placeholder={props.placeholder}
        value={props.value}
        {...props}
      />
    </div>
  );
};
