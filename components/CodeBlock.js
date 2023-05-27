"use client";
import React, { useEffect, useState } from "react";
import { BsClipboard, BsClipboardCheck } from "react-icons/bs";
// import { Tooltip } from 'react-tooltip'
import Prism from "prismjs";
import "./prism.css";
import Image from "next/image";

export default function CodeBlock({ code }) {
  const [isCopied, setCopied] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    Prism.highlightAll(false, () => {
      setLoading(false);
    });
  }, []);

  return (
    <div
      className={
        "flex max-w-full items-center justify-between gap-3 rounded-md p-1 text-sm text-gray-400 lg:text-base " +
        (!isLoading && "bg-[#2d2d2d]")
      }
    >
      <div className={"min-w-0 overflow-auto " + (isLoading && "hidden")}>
        <pre>
          <code className="language-js">{code}</code>
        </pre>
      </div>
      <div className={"h-full " + (isLoading && "hidden")}>
        <button
          className={
            "relative flex flex-shrink-0 flex-grow-0 items-center justify-end pr-4 hover:text-white " +
            (isCopied ? "copied" : "copy")
          }
          onClick={() => {
            setCopied(false);
            navigator.clipboard
              .writeText(code)
              .then(() => {
                console.log("copied!");
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              })
              .catch(() => console.log("cannot copy"));
          }}
        >
          {!isCopied ? (
            <BsClipboard size={20} />
          ) : (
            <BsClipboardCheck size={20} className="text-cyan-400" />
          )}
        </button>
      </div>
      <div className={!isLoading && "hidden"}>
        <Image src='/spinner.gif' width={50} height={50}/>
      </div>
    </div>
  );
}
