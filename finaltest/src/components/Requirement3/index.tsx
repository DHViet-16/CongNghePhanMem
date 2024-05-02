import React, { useState, useEffect } from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
const Requirement3 = () => {
    const [dataSource, setDataSource] = useState([]);
    useEffect(() => {
        fetch('https://internship-api.dev.altasoftware.vn/api/subject')
            .then(response => response.json())
            .then(data => {
                // Cập nhật state dataSource với dữ liệu từ API
                setDataSource(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    interface DataType {
        id: number;
        tenmonhoc: string;
        abbreation: string;
      }
    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Tên môn học',
            dataIndex: 'tenmonhoc',
            key: 'tenmonhoc',
        },
        {
            title: 'Từ viết tắt',
            dataIndex: 'abbreation',
            key: 'abbreation',
        },
        {
            title: 'Hành động',
            dataIndex: 'action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                  <a>Delete</a>
                </Space>
              ),
        },
    ];

    return (
        <div>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
}
export default Requirement3;