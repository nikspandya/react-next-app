import { useState } from 'react';
import { Select } from 'antd';

export const TeamLeadComponent = (): JSX.Element => {

  const [teamLead, setTeamLead] = useState<string>('Nikul');
  const { Option } = Select;
  const selectWidth = { width: 120 };
  
  const handleChange = (value: string): void => setTeamLead(value);

  return (
    <div>
      <Select defaultValue='Nikul' style={selectWidth} onChange={handleChange}>
        <Option value='Nikul'>Nikul</Option>
        <Option value='Niks'>Niks</Option>
      </Select>

      <h3>
        {teamLead}
        {' '} 
        is now a Team Lead
      </h3>
    </div>
  );
};