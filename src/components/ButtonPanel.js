import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const firstRow = ['AC', '+/-', '%', '/'];
const secondRow = ['7', '8', '9', 'x'];
const thirdRow = ['4', '5', '6', '-'];
const fourthRow = ['1', '2', '3', '+'];
const fifthRow = ['0', '.', '='];
const orangeButtons = ['/', 'x', '-', '+', '='];

const ButtonPanel = ({ clickHandler }) => (
  <>
    <div>
      {firstRow.map((name) => (
        <Button
          buttonName={name}
          key={name}
          clickHandler={clickHandler}
          wide={(name === '0')}
          color={(orangeButtons.includes(name))}
        />
      ))}
    </div>
    <div>
      {secondRow.map((name) => (
        <Button
          buttonName={name}
          key={name}
          clickHandler={clickHandler}
          wide={(name === '0')}
          color={(orangeButtons.includes(name))}
        />
      ))}
    </div>
    <div>
      {thirdRow.map((name) => (
        <Button
          buttonName={name}
          key={name}
          clickHandler={clickHandler}
          wide={(name === '0')}
          color={(orangeButtons.includes(name))}
        />
      ))}
    </div>
    <div>
      {fourthRow.map((name) => (
        <Button
          buttonName={name}
          key={name}
          clickHandler={clickHandler}
          wide={(name === '0')}
          color={(orangeButtons.includes(name))}
        />
      ))}
    </div>
    <div>
      {fifthRow.map((name) => (
        <Button
          buttonName={name}
          key={name}
          clickHandler={clickHandler}
          wide={(name === '0')}
          color={(orangeButtons.includes(name))}
        />
      ))}
    </div>
  </>
);

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
