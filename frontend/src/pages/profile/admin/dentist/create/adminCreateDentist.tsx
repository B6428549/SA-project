import React, { FC, useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { DentistsInterface } from "../../../../../interfaces/IDentist";
import { GendersInterface } from "../../../../../interfaces/IGender";
import { CreateDentist, GetGender, GetAdmin } from "../../../../../services/https";
import { useNavigate, Link } from "react-router-dom";
import dayjs from "dayjs";
import type { DatePickerProps } from "antd";
import {
  Space,
  Button,
  Col,
  Row,
  Divider,
  Form,
  Input,
  Card,
  message,
  Select,
  DatePicker,
} from "antd";
import { AdminInterface } from "../../../../../interfaces/IAdmin";
const { Option } = Select;
const dateFormat = "DD/MM/YYYY";

const customFormat: DatePickerProps["format"] = (value) =>
  `${value.format(dateFormat)}`;

const AdminCreateDentist: FC = () => {
  const handleChange = (value: string) => {
    console.log(`select ${value}`);
  };

  const onDateChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const navigate = useNavigate();
  const [genders, setGenders] = useState<GendersInterface[]>([]);
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values: DentistsInterface) => {
    values.AdminID = 1;
    console.log(values.AdminID);
    let res = await CreateDentist(values);
    if (res.status) {
      messageApi.open({
        type: "success",

        content: "บันทึกข้อมูลสำเร็จ",
      });

      setTimeout(function () {
        navigate("/admin/data/dentist");
      }, 2000);
    } else {
      messageApi.open({
        type: "error",
        content: "บันทึกข้อมูลไม่สำเร็จ",
      });
    }
  };

  const getGenders = async () => {
    let res = await GetGender();
    if (res) {
      setGenders(res);
    }
  };


  useEffect(() => {
    getGenders();
  }, []);

  return (
    <div className="AdminDetistCreate">
      {contextHolder}
      <Card>
        <Form
          name="basic"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <h2> เพิ่มข้อมูลทันตแพทย์</h2>
          <Divider />
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={8}></Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={16}>
              <Card>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={10} md={10} lg={10} xl={10}>
                    <Form.Item
                      label="ชื่อ"
                      name="Username"
                      rules={[
                        { required: true, message: "กรุณากรอกชื่อบัญชี" },
                      ]}
                    >
                      <Input placeholder="ชื่อบัญชี" />
                    </Form.Item>
                  </Col>
                  <Col xs={0} sm={2} md={2} lg={2} xl={2} />
                  <Col xs={24} sm={10} md={10} lg={10} xl={10}>
                    <Form.Item
                      label="นามสกุล"
                      name="Password"
                      rules={[{ required: true, message: "กรุณากรอกรหัสผ่าน" }]}
                    >
                      <Input placeholder="รหัสผ่าน" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={10} md={10} lg={10} xl={10}>
                    <Form.Item
                      label="ชื่อ"
                      name="FirstName"
                      rules={[{ required: true, message: "กรุณากรอกชื่อ" }]}
                    >
                      <Input placeholder="ชื่อ" />
                    </Form.Item>
                  </Col>
                  <Col xs={0} sm={2} md={2} lg={2} xl={2} />
                  <Col xs={24} sm={10} md={10} lg={10} xl={10}>
                    <Form.Item
                      label="นามสกุล"
                      name="LastName"
                      rules={[{ required: true, message: "กรุณากรอกนามสกุล" }]}
                    >
                      <Input placeholder="นามสกุล" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={10} md={10} lg={10} xl={10}>
                    <Form.Item
                      label="อีเมล"
                      name="Email"
                      rules={[
                        { type: "email", message: "รูปแบบอีเมลไม่ถูกต้อง !" },
                        { required: true, message: "กรุณากรอกอีเมล" },
                      ]}
                    >
                      <Input placeholder="อีเมล" />
                    </Form.Item>
                  </Col>
                  <Col xs={0} sm={2} md={2} lg={2} xl={2} />
                  <Col xs={24} sm={10} md={10} lg={10} xl={10}>
                    <Form.Item
                      label="เบอโทรศัพท์"
                      name="Phone_number"
                      rules={[
                        { required: true, message: "กรุณากรอกเบอร์โทรทัศพ์" },
                      ]}
                    >
                      <Input placeholder="เบอโทรศัพท์" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={10} md={10} lg={10} xl={10}>
                    <Form.Item
                      label="เพศ"
                      name="GenderID"
                      rules={[{ required: true, message: "กรุณาเลือกเพศ" }]}
                    >
                      <Select onChange={handleChange}>
                        {genders.map((item) => (
                          <Option value={item.ID} key={item.Name}>
                            {item.Name}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col xs={0} sm={2} md={2} lg={2} xl={2} />
                  <Col xs={24} sm={10} md={10} lg={10} xl={10}>
                    <Form.Item
                      label="วันเกิด"
                      name="Birthday"
                      rules={[{ required: true, message: "กรุณากรอกวันเกิด" }]}
                    >
                      <DatePicker
                        onChange={onDateChange}
                        defaultValue={dayjs("01/01/2000", dateFormat)}
                        format={customFormat}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row justify="end">
                  <Col style={{ marginTop: "40px" }}>
                    <Form.Item>
                      <Space>
                        <Link to="/admin/dentist">
                          <Button
                            htmlType="button"
                            style={{ display: "flex", marginRight: "10px" }}
                          >
                            ยกเลิก
                          </Button>
                        </Link>
                        <Button
                          type="primary"
                          htmlType="submit"
                          icon={<PlusOutlined />}
                        >
                          บันทึกข้อมูล
                        </Button>
                      </Space>
                    </Form.Item>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};
export default AdminCreateDentist;
