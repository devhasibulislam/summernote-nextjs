"use client";

import { useEffect, useRef, useState } from "react";

function App() {
  const [content, setContent] = useState<string>(
    "<p>The fastest way to get <b>Summernote</b> is to download the precompiled and minified versions of our CSS and JavaScript. No documentation or original source code files are included.</p>"
  );
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && editorRef.current) {
      const $ = (window as any).$;
      $(editorRef.current).summernote({
        placeholder: content,
        tabsize: 2,
        height: 500,
        toolbar: [
          ["insert", ["picture", "link", "video", "table", "hr"]],
          ["fontstyle", ["fontname", "fontsize", "fontsizeunit"]],
          [
            "font",
            [
              "bold",
              "italic",
              "underline",
              "strikethrough",
              "superscript",
              "subscript",
              "clear",
            ],
          ],
          ["history", ["undo", "redo"]],
          ["color", ["forecolor", "backcolor"]],
          ["para", ["ol", "ul", "paragraph", "height"]],
          ["misc", ["fullscreen", "codeview", "help"]],
          [
            "style",
            [
              "style",
              "p",
              "blockquote",
              "pre",
              "h1",
              "h2",
              "h3",
              "h4",
              "h5",
              "h6",
            ],
          ],
        ],
        codeviewFilter: false,
        codeviewIframeFilter: true,
        callbacks: {
          onChange: (contents: string) => {
            console.log(contents);
            setContent(contents);
          },
        },
      });
    }

    return () => {
      if (editorRef.current) {
        const $ = (window as any).$;
        $(editorRef.current).summernote("destroy");
      }
    };
  }, []);

  return (
    <section className="custom-section">
      <div className="custom-grid">
        <div className="custom-editor">
          <h1 className="custom-title">Summernote in React</h1>
          <div ref={editorRef} id="summernote"></div>
        </div>
        <div className="custom-preview">
          <h1 className="custom-title">Content Preview</h1>
          <div
            className="custom-prose"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </section>
  );
}

export default App;
