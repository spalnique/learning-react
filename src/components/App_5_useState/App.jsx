import Button from './Button';
import { useState } from 'react';

export const App = () => {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <>
      <Button value={clicks} onClickHandler={handleClick} />
      <Button value={clicks} onClickHandler={handleClick} />
      <Button value={clicks} onClickHandler={handleClick} />
      <Button value={clicks} onClickHandler={handleClick} />
    </>
  );
};
