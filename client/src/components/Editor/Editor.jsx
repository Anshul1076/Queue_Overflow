"use client"; // If using Next.js

import React, { useRef } from "react";
import JoditEditor from "jodit-react";

export default function Editor({ value, onChange }) {
  const editor = useRef(null);

  // Jodit Configuration (similar to Quill)
  const config = {
    readonly: false, // User can edit
    toolbar: true,
    height: 300,
    buttons: [
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "|",
      "superscript",
      "subscript",
      "|",
      "ul",
      "ol",
      "|",
      "align",
      "|",
      "undo",
      "redo",
      "|",
      "image",
      "table",
      "link",
      "unlink",
      "|",
      "brush",
      "paragraph",
      "|",
      "fontsize",
      "font",
      "color",
      "|",
      "hr",
      "eraser",
      "copyformat",
    ],
  };

  return (
    <JoditEditor
      ref={editor}
      value={value}
      config={config}
      onBlur={(newContent) => onChange(newContent)} // Save when losing focus
      onChange={(newContent) => onChange(newContent)} // Save on every change
    />
  );
}
