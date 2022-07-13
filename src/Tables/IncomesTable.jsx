import '../App.css';
import {useState} from 'react';
import Incomes from '../Components/Incomes';

function IncomesTable() {

    const [data, setData] = useState([])
  
    const addData = (newData) => {
      setData([...data, newData])
    }
  
    return (
      <div className="app-container">
          <table>
            <thead>
              <tr>
                <th>Reason</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map( (dataItem) =>  (          
               <tr key={Math.random()*10000}>
                <td>{dataItem.reason}</td>
                <td>${dataItem.amount}</td>
                <td>{dataItem.date}</td>
              </tr> 
              
              ))}
            </tbody>
          </table>
          <Incomes addData={addData}/>
      </div>
      
    );
  }

  export default IncomesTable;