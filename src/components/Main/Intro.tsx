"use client";
import React, { useEffect } from "react";

type Props = {};

const Intro = (props: Props) => {
  const [messageIndex, setMessageIndex] = React.useState(0);
  const messages = [
    "Hello,",
    "Bonjour",
    "Hola",
    "مرحبا",
    "Ciao",
    "Hallo",
    "Salut",
    "Hej",
    "你好",
  ];

  useEffect(() => {
    if (messageIndex < messages.length) {
      const interval = setInterval(() => {
        setMessageIndex((prevIndex) => prevIndex + 1);
      }, 300);
      return () => clearInterval(interval); // Clear interval on component unmount
    }
  }, [messageIndex]);

  return (
    <div className="h-screen w-full text-white">
      <div className="flex justify-center items-center h-full">
        {messageIndex < messages.length && (
          <h4
            className="text-5xl capitalize text-white font-bold"
            style={{
              opacity: messageIndex === messages.length - 1 ? 0 : 1,
              transition: "opacity 0.5s",
            }}
          >
            {messages[messageIndex]}
          </h4>
        )}
      </div>
    </div>
  );
};

export default Intro;
