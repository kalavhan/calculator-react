import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <div className="buttonPanel">
    <div className="buttonPanel-row">
      <Button
        buttonName="AC"
        color="light-gray"
      />
      <Button
        buttonName="+/-"
        color="light-gray"
      />
      <Button
        buttonName="%"
        color="light-gray"
      />
      <Button
        buttonName="÷"
      />
    </div>
    <div className="buttonPanel-row">
      <Button
        buttonName="7"
        color="light-gray"
      />
      <Button
        buttonName="8"
        color="light-gray"
      />
      <Button
        buttonName="9"
        color="light-gray"
      />
      <Button
        buttonName="x"
      />
    </div>
    <div className="buttonPanel-row">
      <Button
        buttonName="4"
        color="light-gray"
      />
      <Button
        buttonName="5"
        color="light-gray"
      />
      <Button
        buttonName="6"
        color="light-gray"
      />
      <Button
        buttonName="-"
      />
    </div>
    <div className="buttonPanel-row">
      <Button
        buttonName="1"
        color="light-gray"
      />
      <Button
        buttonName="2"
        color="light-gray"
      />
      <Button
        buttonName="3"
        color="light-gray"
      />
      <Button
        buttonName="+"
      />
    </div>
    <div className="buttonPanel-row">
      <Button
        buttonName="0"
        color="light-gray"
        wide
      />
      <Button
        buttonName="."
        color="light-gray"
      />
      <Button
        buttonName="="
      />
    </div>
  </div>
);

export default ButtonPanel;
