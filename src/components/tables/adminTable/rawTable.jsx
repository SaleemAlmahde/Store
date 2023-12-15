import React from 'react';

const RawTable = ({index,name,price,number}) => {
    return (
        
            <tr>
          <td>{index}</td>
          <td>{name}</td>
          <td>{price}</td>
          <td>{number}</td>
        </tr>
        
    );
}

export default RawTable;
