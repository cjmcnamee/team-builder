import React, { useState } from 'react';

const Card = ( {name, email, role, teamList} ) => {
  const [testList, useTestList] = useState(teamList);
  const [testName, setTestName] = useState(name);

  return (
    <div>
      {name}
      <div>
        {email}
        <div>
          {role}
          <div>
            {testList}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
