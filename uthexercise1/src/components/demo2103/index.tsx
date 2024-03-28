import { Table } from "antd";
import React, { useState } from "react";
const Demo2103 = () => {
  const [searchData, setSearchData] = useState<{ key: string; name: string; age: number; address: string; }[]>([]);
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (
    <div>
      <select onChange={(e) => {
        setSearchData(dataSource.filter(x => x.age < Number(e.currentTarget.value) ));
      }}>
        <option value="30">Under Age:30</option>
        <option value="40">Under Age:40</option>
        <option value="50">Under Age:50</option>
      </select>
      <Table columns={columns} dataSource={searchData} />
      <button onClick={() => {
        localStorage.clear();
        window.location.reload();
      }}>Logout</button>
    </div>
  )
}
export default Demo2103;

