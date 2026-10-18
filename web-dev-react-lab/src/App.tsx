import { useState } from 'react';
import Hello from './Hello';

function App() {
  const [name, setName] = useState<string>('');
  const [inputName, setInputName] = useState<string>('');

  const sayHello = () => {
    setName(inputName);
    setInputName('');
  };

  return (
    <>
      <Hello name={name}>How are you today ?</Hello>
      <input value={inputName} onChange={(e) => setInputName(e.target.value)} />
      <button onClick={sayHello}>Say hello</button>
    </>
  );
}

export default App;
