import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { getUsers } from "../api/userApi";

const GridView = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "First Name", dataIndex: "firstName", key: "firstName" },
    { title: "Last Name", dataIndex: "lastName", key: "lastName" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    { title: "Gender", dataIndex: "gender", key: "gender" },
    { title: "City", dataIndex: ["address", "city"], key: "city" },
    { title: "University", dataIndex: "university", key: "university" },
  ];

  return (
    <Table
      dataSource={users}
      columns={columns}
      rowKey="id"
      scroll={{ x: true }}
    />
  );
};

export default GridView;
