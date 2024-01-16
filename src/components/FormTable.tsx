import React, { useEffect, useState } from "react";
import { Table, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleted } from "../redux/Reducer/FormSlice";
import EditForm from "./EditForm";
type DataType = {
  key: string;
  name: string;
  age: number;
  address?: string | number;
  email?: number | string;
};

const FormTable = () => {
  const users = useSelector((state: any) => state?.data.user);
  console.log("users: ", users);
  const [isEdit, setIsEdit] = useState(false);
  const [editUser, setEidtUser] = useState();

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      // key:'1',
      sorter: (a: any, b: any) => a.id - b.id,
    },

    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_unknow: any, record: any) => (
        <Space size="middle">
          <div
            onClick={() => {
              handleEdit(record);
            }}
          >
            Edit
          </div>

          <div
            onClick={() => {
              console.log("delete", record.id);
              dispatch(deleted(record.id));
            }}
          >
            Delete
          </div>
        </Space>
      ),
    },
  ];

  const handleEdit = (data: any) => {
    setEidtUser(data);
    setIsEdit(true);
  };

  const dispatch = useDispatch();
  useEffect(() => {}, [users]);

  return (
    <>
      <div>
        <Table columns={columns} dataSource={users} />
      </div>
      {isEdit && (
        <EditForm isEdit={isEdit} editUser={editUser} setIsEdit={setIsEdit} />
      )}
    </>
  );
};

export default FormTable;
