"use client";
//break-all
import React, { useState } from "react";
import { BsClipboard, BsClipboardCheck } from "react-icons/bs";
import Link from "next/link";

export default function URLBlock({ urlArr, urlHighlight }) {
  const [isCopied, setCopied] = useState(false);
  const url = process.env.NEXT_PUBLIC_URL + urlArr.join("");

  return (
    <div className="flex w-fit max-w-full items-center justify-between gap-4 rounded-md bg-slate-700 px-4 py-3 text-left text-sm text-gray-300 lg:text-base ">
      <div className="min-w-0 max-w-full font-mono">
        <span className="break-all">
          {process.env.NEXT_PUBLIC_URL}
          <wbr />
        </span>
        {urlHighlight.map((isHightlight, index) => {
          return isHightlight == 1 ? (
            <span key={index} className="text-orange-400">
              {urlArr[index]}
              <wbr />
            </span>
          ) : (
            <span key={index}>
              {urlArr[index]}
              <wbr />
            </span>
          );
        })}
      </div>

      <div className={"h-full "}>
        <button
          className={
            "relative flex flex-shrink-0 flex-grow-0 items-center justify-end text-gray-400 hover:text-white " +
            (isCopied ? "copied" : "copy")
          }
          onClick={() => {
            setCopied(false);
            navigator.clipboard
              .writeText(url)
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
    </div>
  );
}
