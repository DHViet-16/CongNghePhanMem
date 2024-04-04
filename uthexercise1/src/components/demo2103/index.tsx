import { Space, Button, Table } from "antd";
import React, { useState } from "react";
import type { TableProps } from "antd";
import { setDefaultResultOrder } from "dns";
const Demo2103 = () => {
  const [searchData, setSearchData] = useState<DataType[]>([]);;
  const [origin, setOrigin]= useState('');
  interface DataType {
    key: string;
    name: string;
    age: number;
    origin: string;
    address: string;
    isEditable: boolean;
  }
  const dataSource: DataType[] = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      origin: 'America',
      address: '10 Downing Street',
      isEditable: true,
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      origin: 'Canada',
      address: '10 Downing Street',
      isEditable: false,
    },
  ];

  const columns: TableProps<DataType>['columns'] = [
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
      title: 'Origin',
      dataIndex: 'origin',
      key: 'origin',
      render: (key, record, index) => {
        return (
          <>
            {!record.isEditable
              ?
              <a onClick={() => {
                alert(record.origin)
              }}>{record.origin}</a>
              : <input value={record.origin}/>
              // : <input type="text" value={record.origin} onChange={(e) => {
              //   setOrigin(e.currentTarget.value)
              // }} />
            }
          </>
        )
      }
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      render: (key, record, index) => {
        return (
          // <Button type="primary">Delete</Button>
          <Button type="primary" onClick={() => {
            setSearchData(dataSource.filter(x => x.name != record.name));
            //alert(record.name);
          }}>Delete</Button>
        )
      }
    },
  ];

  return (
    <div>
      <select onChange={(e) => {
        setSearchData(dataSource.filter(x => x.age < Number(e.currentTarget.value)));
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

