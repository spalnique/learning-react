// import { useState } from 'react';

// Multiple isolated states

// const Button = () => {
//   const [clicks, setClicks] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         gap: 10,
//         alignItems: 'center',
//         height: 300,
//       }}>
//       <button
//         style={{
//           padding: 15,
//           width: 500,
//           backgroundColor: 'cadetblue',
//           color: 'white',
//           border: 'none',
//           borderRadius: 5,
//           textTransform: 'uppercase',
//         }}
//         onClick={() => {
//           setClicks(clicks + 1);
//           setIsOpen(!isOpen);
//         }}>
//         {!clicks
//           ? 'You have never clicked me'
//           : clicks === 1
//           ? "You've clicked me once"
//           : `You've clicked me ${clicks} times`}
//       </button>
//       {isOpen && <p>I&apos;m visible</p>}
//     </div>
//   );
// };

const Button = ({ value, onClickHandler }) => {
  return <button onClick={onClickHandler}>Current: {value}</button>;
};

export default Button;
