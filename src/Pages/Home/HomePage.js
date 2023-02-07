import React, { useEffect, useState } from "react";
import "./Home.css";
import { Form, message, Modal, Select, Table } from "antd";
import Layout from "../../Components/Layout/Layout";
import FormItem from "antd/es/form/FormItem";
import Input from "antd/es/input/Input";
import axios from "axios";
import Loading from "../../Components/Loader/Loading";

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allTransaction, setAllTransaction] = useState([]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Table data
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Reference",
      dataIndex: "reference",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Actions",
    },
  ];

  // Adding the transaction
  const handleAddFormSubmit = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem("users"));
      setLoading(true);
      await axios.post("/transaction/add-transaction", {
        ...values,
        userid: user._id,
      });
      setLoading(false);
      message.success("Transaction Added Successfully");
      setIsModalOpen(false);
    } catch (error) {
      setLoading(false);
      message.error("Failed to add transaction");
    }
  };

  // Get all the transactions
  const getAllTransactions = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("users"));
      setLoading(true);
      const res = await axios.post("/transaction/get-transaction", {
        userid: user._id,
      });
      setLoading(false);
      setAllTransaction(res.data);
      console.log(res.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
      message.error("Fetch Issues With Transaction");
    }
  };

  // Use Effect Hook
  useEffect(() => {
    getAllTransactions();
  }, []);
  return (
    <>
      <Layout>
        {loading && <Loading />}
        <div className="filters">
          <div>range filter</div>
          <div>
            <button className="btn btn-primary" onClick={showModal}>
              Add New{" "}
            </button>
          </div>
        </div>
        <div className="content-page">
          <Table
            className="table-content"
            columns={columns}
            dataSource={allTransaction}
          />
        </div>

        <Modal
          title="Add Transaction"
          open={isModalOpen}
          onCancel={handleCancel}
          footer={false}
        >
          <Form layout="vertical" onFinish={handleAddFormSubmit}>
            <FormItem label="Amount" name="amount">
              <Input type="text" />
            </FormItem>

            <FormItem label="Type" name="type">
              <Select>
                <Select.Option value="income">Income</Select.Option>
                <Select.Option value="expense ">Expense</Select.Option>
              </Select>
            </FormItem>

            <FormItem label="Category" name="category">
              <Select>
                <Select.Option value="salary">Salary</Select.Option>
                <Select.Option value="bonus">Bonus</Select.Option>
                <Select.Option value="project">Project</Select.Option>
                <Select.Option value="food">Food</Select.Option>
                <Select.Option value="movie">Movie</Select.Option>
                <Select.Option value="bills">Bills</Select.Option>
                <Select.Option value="medicals">Medicals</Select.Option>
                <Select.Option value="tax">Tax</Select.Option>
                <Select.Option value="fees">Fees</Select.Option>
              </Select>
            </FormItem>

            <FormItem label="Date" name="date">
              <Input type="date" />
            </FormItem>

            <FormItem label="Reference" name="reference">
              <Input type="text" />
            </FormItem>

            <FormItem label="Description" name="description">
              <Input type="text" />
            </FormItem>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">
                SAVE
              </button>
            </div>
          </Form>
        </Modal>
      </Layout>
    </>
  );
}

export default HomePage;
