import { useRef, useState } from 'react'
import './App.css'

function App() {
  let [inputValues, setInputValues] = useState({login:'',name:'',surname:'',email:'',password:''});
  let isActive = useRef(true);

  let [firstSymbolError, setFirstSymbolError] = useState(false);
  let [registerError, setRegisterError] = useState(false);
  let [lengthError, setLengthError] = useState(false);
  let [specialSymbolError, setSpecialSymbolError] = useState(false);
  let [emptyError, setEmptyError] = useState(false);

  function handleGetValues(ev) {
    setInputValues({...inputValues, [ev.target.name]: ev.target.value});
    isActive.current = !(checkValue(ev.target) && checkLengthes(ev.target));
  }

  function checkLengthes(target) {
    if (target.value.length < 8) {
      setLengthError(true);
      return false;
    }
    for (const key in inputValues) {
      if (key === target.name) {
        continue;
      }
      if (inputValues[key].length < 8) {
        
      setLengthError(true);
      return false;
      }
    }
    setLengthError(false);
    return true;
  }

  function checkValue(target) {
    if (target.name === "password") {
      if (target.value.length === 0 || target.value.trim("").length === 0) {
        setEmptyError(true);
        return false;
      }
      setEmptyError(false);
      if (target.value.length > 0 && !(target.value[0] <= 'Z' && target.value[0] >= 'A')) {
        setFirstSymbolError(true);
        return false
      }
      setFirstSymbolError(false);
      for (let i = 'A'; i <= 'Z'; i++) {
        if (target.value.slice(1).includes(i)) {
          setRegisterError(true);
          return false
        }
      }
      setRegisterError(false);
      for (let code = 0; code <= 127; code++) {
        let i = String.fromCharCode(code);
        
        if ((i <= 'z' && i >= 'a') || (i <= 'Z' && i >= 'A') || (i === '_' || i ==='.') || (i <= '9' && i >= '0')) {
          continue;
        }
        if (target.value.includes(i)) {
          setSpecialSymbolError(true);
          return false;
        }
      }
      setSpecialSymbolError(false);
    }
    return true;
  }

  return (
    <>
      <form action="">
        <input type="text" onChange={(ev) => handleGetValues(ev)} name="login" placeholder='login'/>
        <input type="text" onChange={(ev) => handleGetValues(ev)} name="name" placeholder='name'/>
        <input type="text" onChange={(ev) => handleGetValues(ev)} name="surname" placeholder='surname'/>
        <input type="email" onChange={(ev) => handleGetValues(ev)} name="email" placeholder='email'/>
        <input type="password" onChange={(ev) => handleGetValues(ev)} name="password" placeholder='password'/>
        <button disabled={isActive.current}>REGISTER</button>
      </form>
      <p>{inputValues.login}</p>
      <p>{inputValues.name}</p>
      <p>{inputValues.surname}</p>
      <p>{inputValues.email}</p>
      <p>{inputValues.password}</p>
      <div id="errors">
        <p id="firtstSymbolError" className={"error" + (firstSymbolError ? "" : " hidden")}>Первый символ обязан быть заглавной буковй</p>
        <p id="registerError" className={"error" + (registerError ? "" : " hidden")}>Загловной буквой может быть только первый символ</p>
        <p id="lengthError" className={"error" + (lengthError ? "" : " hidden")}>Длинна всех строк должна быть больше или равной 8</p>
        <p id="specialSymbolError" className={"error" + (specialSymbolError ? "" : " hidden")}>Из спец. символов допускаются только "." и "_"</p>
        <p id="emptyError" className={"error" + (emptyError ? "" : " hidden")}>Строка не может быть пустой</p>
      </div>
    </>
  )
}

export default App