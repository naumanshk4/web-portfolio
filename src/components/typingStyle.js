import { TypeAnimation } from 'react-type-animation';

function TypingComponent() {

  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Hello World!',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Bonjour World!',
        1000,
        'Sallam World!',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ color:"white",fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default TypingComponent;