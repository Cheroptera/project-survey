import React, { useState } from 'react';
import { FirstQuestion } from 'Components/FirstQuestion';
import { SecondQuestion } from 'Components/SecondQuestion';
import { ThirdQuestion } from 'Components/ThirdQuestion';
import { FourthQuestion } from 'Components/FourthQuestion';
import { Result } from 'Components/Result';

export const App = () => {
  const [step, setStep] = useState(1);
  const [adjective, setAdjective] = useState('');
  const [foodNoun, setFoodNoun] = useState('');
  const [ingVerb, setIngVerb] = useState('');
  const [clothingNoun, setClothingNoun] = useState('');

  const handleProgress = () => {
    setStep(step + 1);
  }
  return (
    <>
      {step === 1 && (
        <FirstQuestion adjective={adjective} setAdjective={setAdjective} />
      )}
      {step === 2 && (
        <SecondQuestion foodNoun={foodNoun} setFoodNoun={setFoodNoun} />
      )}
      {step === 3 && (
        <ThirdQuestion ingVerb={ingVerb} setIngVerb={setIngVerb} />
      )}
      {step === 4 && (
        <FourthQuestion clothingNoun={clothingNoun} setClothingNoun={setClothingNoun} />
      )}
      {step === 5 && (
        <Result
          adjective={adjective}
          foodNoun={foodNoun}
          ingVerb={ingVerb}
          clothingNoun={clothingNoun} />
      )}
      {step < 5 && (
        <>
          <p className="counterText"> Questions answered: {step}/9 </p>
          <button className="button" type="button" onClick={handleProgress}>Next question</button>
        </>
      )}
    </>
  )
}