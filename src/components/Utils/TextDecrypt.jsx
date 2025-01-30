import React, { useEffect } from "react";
import { useDencrypt } from "use-dencrypt-effect";

const decryptOptions = {
  chars: [
    "-",
    ".",
    "/",
    "*",
    "!",
    "?",
    "#",
    "%",
    "&",
    "@",
    "$",
    "€",
    "(",
    ")",
    "[",
    "]",
    "{",
    "}",
    "<",
    ">",
    "~",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  interval: 50,
};

const TextDecrypt = (props) => {
  const [value, setValue] = useDencrypt();

  useEffect(() => {
    const updateText = () => {
      setValue(props.text || "");
    };

    updateText();
    // No need to clear timeout as it was set for 0ms
  }, [props.text]);

  return <span onClick={() => setValue(props.text)}>{value}</span>;
};

export default TextDecrypt;
