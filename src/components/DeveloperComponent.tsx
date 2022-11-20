import { Button } from 'antd';
import { observer } from 'mobx-react';
import { useState } from 'react';
import { developerStore } from '../store/DeveloperStore';

export const DeveloperComponent = observer((): JSX.Element => {

  const [userInput, setUserInput] = useState<string>('');

  const clearUserInput = (): void => {
    setUserInput('');
  };

  const addDeveloper = (): void => {
    if (userInput) {
      developerStore.addDeveloper(userInput);
      clearUserInput();
    }
  };

  const setInputValue = (event: React.ChangeEvent<HTMLInputElement>): void => setUserInput(event.target.value);

  return (
    <div>      
      <input
        type='text'
        value={userInput}
        onChange={setInputValue}
      />
      {' '}
      <Button
        type='primary'
        onClick={addDeveloper}
      >
        Add new Developer
      </Button>
    </div>
  );
});