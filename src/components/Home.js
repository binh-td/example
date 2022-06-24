import { Button, Table, Modal, Form, Input } from 'antd';
import React, { useState } from 'react';

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm()
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a href="#">{text}</a>,
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
    {
      title: 'Action',
      key: 'action',
      dataIndex: 'id',
      render: (value) => {
        return <div><Button type="primary" onClick={showModal}>Sửa</Button><Button>Xóa</Button></div>
      }
    }
  ]

  const productData = [{ name: "Bình", age: 26, address: "HN" }, { name: "Đạt", age: 22, address: "VN" }];
  const productDataTable = productData.map((item,index) => ({...item, key: index}))

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function onFinish(values) {
    console.log("values",values)
  }

  console.log("form",form)
  
  return (
    <div style={{ margin: "0 40px"}}>
      <Button onClick={showModal}>Add</Button>
      <Table columns={columns} dataSource={productDataTable} />
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <Button onClick={() => console.log("getFieldValue", form.getFieldsValue(true))}>Get Name</Button>
        <Button onClick={() => form.setFieldsValue({ name: "Đạt" })}>Fill Name</Button>
        <Button onClick={() => form.resetFields()}>Reset Form</Button>
        <Form layout='vertical' onFinish={onFinish} form={form} initialValues={
          {
            name: "Đạt Đò",
            age: 22
          }
        }>
          <Form.Item
            label="Tên"
            name="name"
            rules={[
              {
                required: true,
                message: "Tên không được để trống"
              }
            ]}
          >
            <Input placeholder="Vui lòng điền tên"/>
          </Form.Item>
          <Form.Item
            label="Tuổi"
            name="age"
          >
            <Input placeholder="Vui lòng điền tuổi"/>
          </Form.Item>
          <Form.Item
          >
            <Button htmlType="button" onClick={handleCancel}>Cancel</Button>
            <Button htmlType="submit" type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
