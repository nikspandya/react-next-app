import { Button } from 'antd';
import { observer } from 'mobx-react';
import { developerStore } from '../store/DeveloperStore';

export const DeveloperListComponent = observer((): JSX.Element => {

  return (
    <div>      
      <h2>Developer List:</h2>
      {developerStore.developers.map((developer) => {
        const removeDeveloper = (): void => developerStore.removeDeveloper(developer.id);
        const markDeveloper = (): void => developerStore.markDeveloper(developer.id);

        return (
          <div key={developer.name} className='card'>
            
            <label htmlFor='mark'>
              <input
                id='mark'
                type='checkbox'
                onChange={markDeveloper}
              />
              {' '}
              <span>{developer.name}</span>
              {' '}
              
              <Button
                onClick={removeDeveloper}
              >
                Delete 
              </Button>
            </label>
            <br />
          </div>
        );           
      })}
    </div>
  );
});