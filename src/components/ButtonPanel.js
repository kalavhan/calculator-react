import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <div className="buttonPanel">
    <div className="buttonPanel-row">
      <Button
        name={"AC"}
        elmntClass={"w25"}
      />
      <Button
        name={"+/-"}
        elmntClass={"w25"}
      />
      <Button
        name={"%"}
        elmntClass={"w25"}
      />
      <Button
        name={"÷"}
        elmntClass={"w25"}
      />
    </div>
    <div className="buttonPanel-row">
      <Button
        name={"7"}
        elmntClass={"w25"}
      />
      <Button
        name={"8"}
        elmntClass={"w25"}
      />
      <Button
        name={"9"}
        elmntClass={"w25"}
      />
      <Button
        name={"X"}
        elmntClass={"w25"}
      />
    </div>
    <div className="buttonPanel-row">
      <Button
        name={"4"}
        elmntClass={"w25"}
      />
      <Button
        name={"5"}
        elmntClass={"w25"}
      />
      <Button
        name={"6"}
        elmntClass={"w25"}
      />
      <Button
        name={"-"}
        elmntClass={"w25"}
      />
    </div>
    <div className="buttonPanel-row">
      <Button
        name={"1"}
        elmntClass={"w25"}
      />
      <Button
        name={"2"}
        elmntClass={"w25"}
      />
      <Button
        name={"3"}
        elmntClass={"w25"}
      />
      <Button
        name={"+"}
        elmntClass={"w25"}
      />
    </div>
    <div className="buttonPanel-row">
      <Button
        name={"0"}
        elmntClass={"w50"}
      />
      <Button
        name={"."}
        elmntClass={"w25"}
      />
      <Button
        name={"="}
        elmntClass={"w25"}
      />
    </div>
  </div>
);

export default ButtonPanel;
