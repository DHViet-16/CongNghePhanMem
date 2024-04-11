// 1 / fillter
//     < tên biến >.fillter(x => <điều kiện lọc>)
// 2/ findIndex
//     (x=> <Biểu thức lamda>) => số nguyên
//     let index:Number = data.findIndex (x =>x.studentCode=='0909003')
//     console.log (index) =>1

import React, { useState } from "react";
import { Table, Input } from "antd";
import { title } from "process";
import { timeEnd, timeLog } from "console";


const Test1 = () => {
    const [searchText, setSearchText] = useState('');
    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'Student Code', dataIndex: 'studentCode', key: 'studentCode' },
        { title: 'Student Name', dataIndex: 'studentName', key: 'studentName' },
        { title: 'Final Test', dataIndex: 'result', key: 'result' },
        { title: 'Home Town', dataIndex: 'hometown', key: 'hometown' }

    ]
    const data = [
        { id: 1, studentCode: '0909001', studentName: 'Lê Văn Thắng', result: 8, hometown: 'TPHCM' },
        { id: 2, studentCode: '0909003', studentName: 'Trần Minh Tâm', result: 7.5, hometown: 'Đồng Nai' },
        { id: 3, studentCode: '0909002', studentName: 'Lý Uyển Nhi', result: 8.6, hometown: 'TPHCM' },
        { id: 4, studentCode: '0909004', studentName: 'Trịnh Thị Thu Thảo', result: 6, hometown: 'Tiền Giang' },
        { id: 5, studentCode: '0909005', studentName: 'Lê Văn Lợi', result: 8, hometown: 'Khánh Hòa' },
    ]
    const [searchData, setSearchData] = useState(data);
    const myProvinces = ['TPHCM', 'Đồng Nai'];
    return (
        // <Table columns={columns} dataSource={data.filter(x => x.studentName.includes('Văn'))} />
        // <Table columns={columns} dataSource={data} />
        <div>
            Find student by name: <Input type="text" value={searchText} onChange={(e) => setSearchText(e.currentTarget.value)}
                onKeyPress={(e) => {
                    if (e.key == 'Enter') {
                        setSearchData(data.filter(x => x.studentName.toLowerCase().includes(searchText.toLowerCase().trim())))
                    }
                }} />
            <Table columns={columns} dataSource={searchData} />
        </div>
    )
}
export default Test1;