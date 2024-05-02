import { useState } from "react";

export default function ({ questions }) {
  const [hasGuessed, setHasGuessed] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const random = Math.floor(Math.random() * questions.length);
  console.log(random);
  const onGuess = (answerIsCorrect) => {
    console.log("hola");
    setHasGuessed(true);
    setIsCorrect(answerIsCorrect);
  };
  return (
    <div className="bg-white bg-opacity-15 backdrop-blur shadow-lg rounded-lg p-12 items-center flex flex-col">
      <h2 className="font-bold text-2xl p-8">{questions[random].pregunta}</h2>
      <div className="flex flex-col gap-4 w-full">
        {questions[random].respuestas.map((respuesta) => (
          <button
            onClick={() => {
              onGuess(respuesta.correct);
            }}
            className={`py-4  bg-opacity-60 rounded-md text-2xl ${
              respuesta.correct ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {respuesta.text}
          </button>
        ))}
      </div>
      {hasGuessed ? <p>{questions[random].fundamento}</p> : <></>}
    </div>
  );
}
