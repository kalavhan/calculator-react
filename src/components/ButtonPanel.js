import React from 'react';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => (
  <div className="buttonPanel">
    <div className="buttonPanel-row">
      <Button
        buttonName="AC"
        color="light-gray"
        handleClick={clickHandler}
      />
      <Button
        buttonName="+/-"
        color="light-gray"
        handleClick={clickHandler}
      />
      <Button
        buttonName="%"
        color="light-gray"
        handleClick={clickHandler}
      />
      <Button
        buttonName="÷"
        handleClick={clickHandler}
      />
    </div>
    <div className="buttonPanel-row">
      <Button
        buttonName="7"
        color="light-gray"
        handleClick={clickHandler}
      />
      <Button
        buttonName="8"
        color="light-gray"
        handleClick={clickHandler}
      />
      <Button
        buttonName="9"
        color="light-gray"
        handleClick={clickHandler}
      />
      <Button
        buttonName="x"
        handleClick={clickHandler}
      />
    </div>
    <div className="buttonPanel-row">
      <Button
        buttonName="4"
        color="light-gray"
        handleClick={clickHandler}
      />
      <Button
        buttonName="5"
        color="light-gray"
        handleClick={clickHandler}
      />
      <Button
        buttonName="6"
        color="light-gray"
        handleClick={clickHandler}
      />
      <Button
        buttonName="-"
        handleClick={clickHandler}
      />
    </div>
    <div className="buttonPanel-row">
      <Button
        buttonName="1"
        color="light-gray"
        handleClick={clickHandler}
      />
      <Button
        buttonName="2"
        color="light-gray"
        handleClick={clickHandler}
      />
      <Button
        buttonName="3"
        color="light-gray"
        handleClick={clickHandler}
      />
      <Button
        buttonName="+"
        handleClick={clickHandler}
      />
    </div>
    <div className="buttonPanel-row">
      <Button
        buttonName="0"
        color="light-gray"
        wide
        handleClick={clickHandler}
      />
      <Button
        buttonName="."
        color="light-gray"
        handleClick={clickHandler}
      />
      <Button
        buttonName="="
        handleClick={clickHandler}
      />
    </div>
  </div>
);

export default ButtonPanel;
