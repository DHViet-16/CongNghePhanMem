import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let myArr: any[] = [{ id: 0, color: 'red' }]
  console.log(myArr);
  const [universities, setUniversities] = useState<any[]>([]);
  useEffect(() => {
    fetch('https://internship-api.dev.altasoftware.vn/api/University', {
      method: 'GET'
    })
      .then(response => response.json())
      .then((data: any) => {
        console.log(data);
        setUniversities(data)
      })
  }, [])
  return (
    // <div>
    //       {universities.filter(x=>x.tentruong.includes('HCM')).map((item) => {
    //     return(
    //       <h1 style={{color:'green'}}>{item.tentruong}</h1>
    //     )
    //     })}
    // </div>
    <table style={{ width: '400px', border: '2px solid black' }}>
      <tr style={{ border: '2px solid black',color:'red' }}><td>STT</td>Tên trường</tr>
      {
        universities.filter(x => x.tentruong.includes('HCM')).map((item, index) => {
          return (
            <tr>
              <td>{index + 1}</td><td>{item.tentruong}</td>
            </tr>
          )
        }
        )
      }
    </table>
  );
}
export default App;
