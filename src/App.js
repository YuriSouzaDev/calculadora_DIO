import { Container, Content, Row } from './styles';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import React from 'react';

function App() {
  const [currentNumber, setCurrentNumber] = React.useState('0');
  const [firstNumber, setFirstNumber] = React.useState('0');
  const [operation, setOperation] = React.useState('');

  function handleOnClear() {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  function handleAddNumber(num) {
    setCurrentNumber((prev) => `${prev === '0' ? '' : prev}${num}`);
  }

  function handleSumNumbers() {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  function handleMinusNumber() {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  function handleEquals() {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumber();
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="C" />
          <Button label="DEL" onClick={handleOnClear} />
          <Button label="/" />
          <Button label="X" />
        </Row>
        <Row>
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="-" onClick={handleMinusNumber} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
