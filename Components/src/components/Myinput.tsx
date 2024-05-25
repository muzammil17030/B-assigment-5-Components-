import  { useState } from 'react';

const Myinput = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e:any) => {
    setValue(e.target.value);
    if(e.target.value.length < 3) {
      setError('Input should be at least 3 characters long');
    } else {
      setError('');
    }
   console.log(e.target.value)  
};

  return (
    <div id='mainDiv'>
        <h3 id='compo'>component of input:</h3>
      <label>
       <b> Input:</b>
        <input type="text" value={value} onChange={handleChange} />
      </label>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Myinput;