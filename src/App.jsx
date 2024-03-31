import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
// import { useState } from "react";

const App = () => {
  // const copyText = () => {
  //   return document.getElementById("text").innerText;
  // };

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const [isCopied, setCopied] = useClipboard(transcript, {
    // `isCopied` will go back to `false` after 1000ms.
    successDuration: 1000,
  });

  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  return (
    <div className="">
      <div className="flex flex-col items-center gap-2 text-center mt-12">
        <h1 className="font-serif text-4xl font-medium tracking-wide">
          Speech to Text Converter
        </h1>
        <p className="tracking-widest  font-[200px]">
          Click on start button to listen,once done click on stop to stop
          listening,
          <br /> click on copy to copy to clipboard
        </p>
        <div
          id="text"
          className="mt-6 mb-1 w-[38rem] h-60 shadow-2xl rounded tracking-wider py-2 px-4"
          // onClick={() => setCopyText(transcript)}
        >
          {transcript}
        </div>
        <div className="p-4 flex gap-8 w-[38rem] justify-evenly h-auto rounded shadow-2xl">
          <button
            onClick={startListening}
            className="bg-orange-300 py-2 px-6 rounded-md hover:bg-orange-500 duration-300 tracking-widest"
          >
            Start
          </button>
          <button
            onClick={SpeechRecognition.stopListening}
            className="bg-orange-300 py-2 px-6 rounded-md  hover:bg-orange-500 duration-300 tracking-widest"
          >
            Stop
          </button>
          <button
            onClick={setCopied}
            className="bg-orange-300 py-2 px-6 rounded-md  hover:bg-orange-500 duration-300 tracking-widest"
          >
            {isCopied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
