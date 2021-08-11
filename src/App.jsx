/* eslint-disable no-eval */

import { useState } from 'react';
import './App.scss';

function App() {

  window.document.onkeyup = (event) => {
    
    let keypress = event.key
    
    switch (keypress){
      case ("1"):
        display("1")
        break
      case ("2"):
        display("2")
        break
      case ("3"):
        display("3")
        break
      case ("4"):
        display("5")
        break
      case ("5"):
        display("5")
        break
      case ("6"):
        display("6")
        break
      case ("7"):
        display("7")
        break
      case ("8"):
        display("8")
        break
      case ("9"):
        display("9")
        break
      case ("0"):
        display("0")
        break
      case ("Enter"):
        resolve()     
        break
      case ("Delete"):
        clear()
        break
      case ("+"):
        display("+")
        break
      case ("*"):
        display("*")
        break
      case ("-"):
        display("-")
        break
      case ("/"):
        display("/")
        break
      case("="):
        resolve()
        break    
      default:
        return    
    }
  }

  const [answer, setAnswer] = useState("0");
  const [expression, setExpression] = useState("");

  const display = (symbol) => {
    switch (answer){
      case 0:
        setExpression(symbol)
        setAnswer("")
        break
      case "Sintax Error":
        setExpression(symbol)
        setAnswer("")
      break
      case "0":
        setExpression(symbol)
        setAnswer("")
        break
      case undefined:
        setExpression(symbol)
        setAnswer("")
        break      
      default:
        if (answer !== 0 && answer !== ""){
          setExpression(answer + symbol)
          setAnswer("")
        } else{
          setExpression((prev) => prev + symbol)
        }
        
    }

    
  }

  const resolve = () => {
    let regex = /^[0]*$/
    if (expression === ""){
      // NOTHING ;)
    }else if(regex.test(expression)){
      setExpression("")
      setAnswer("0")
    }else {
      try {
        if (eval(expression).toString().length > 12){
          let ans = eval(expression).toString()
          let anss = ans.substring(0, 3);
          setAnswer(anss)
          setExpression("")
        }
        setAnswer(eval(expression))
        setExpression(""); 
        
      } catch (e) {
        if (e instanceof SyntaxError) {
          setExpression("")
          setAnswer("Sintax Error")
        }
      } 
    }
  }

  const clear = () => {
    setExpression("")
    setAnswer("0")
  }

  return (
    <div className="App">
      <div id="calculator">

     <div id="display">
       <div id="input">{expression}</div>
       <div id="output">{answer}</div>
    </div>
     <div id="buttons">
       <div onClick={() => clear("c")} id="clear" className="button">C</div>       
       <div onClick={() => display("/")} id="divide" className="button op">/</div>
       <div onClick={() => display("*")} id="multiply" className="button op">X</div>
       <div onClick={() => display("7")} id="seven" className="button">7</div>
       <div onClick={() => display("8")} id="eight" className="button">8</div>
       <div onClick={() => display("9")} id="nine" className="button">9</div>
       <div onClick={() => display("-")} id="subtract" className="button op">-</div>
       <div onClick={() => display("4")} id="four" className="button">4</div>
       <div onClick={() => display("5")} id="five" className="button">5</div>
       <div onClick={() => display("6")} id="six" className="button">6</div>
       <div onClick={() => display("+")} id="add" className="button op">+</div>
       <div onClick={() => display("1")} id="one" className="button">1</div>
       <div onClick={() => display("2")} id="two" className="button">2</div>
       <div onClick={() => display("3")} id="three" className="button">3</div>
       <div onClick={() => display("0")} id="zero" className="button">0</div>
       <div onClick={() => display(".")} id="decimal" className="button">.</div>
       <div onClick={() => resolve()} id="equals" className="button">=</div>
     </div>
      </div>
      <div class="footer">by <a href="https://github.com/franco14lorenzo" target="_blank" rel="noreferrer"><u>Franco Lorenzo</u></a></div>
    </div>
  );
}

export default App;



