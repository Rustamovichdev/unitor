import {
    Button,
    Checkbox,
    Col,
    DatePicker,
    Drawer,
    Form,
    Input,
    InputNumber,
    Modal,
    Radio,
    Row,
} from "antd";
import { useState, type FC } from "react";
import SearchSide from "../search";
import type { FieldNamesType } from "antd/es/cascader";

interface IAddMember {
    open: boolean;
    setOpen: (value: boolean) => void;
}

interface IformAddMember {
    username: string;
    number: number;
    date: number;
    remember: string;
}

const AddMember: FC<IAddMember> = ({ open, setOpen }) => {
    return (
        <>
            <section>
                (
                <Modal
                    open={open}
                    onOk={() => setOpen(false)}
                    onCancel={() => setOpen(false)}
                >
                    <Form layout='vertical'>
                        <div>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item<IformAddMember>
                                        label='Username'
                                        name='username'
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Please input your username!",
                                            },
                                        ]}
                                        className='flex flex-col'
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item<IformAddMember>
                                        label='Date of Birth'
                                        name='date'
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Please input your number!",
                                            },
                                        ]}
                                    >
                                        <DatePicker />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item<IformAddMember>
                                        label='Phone Number'
                                        name='number'
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Please input your number!",
                                            },
                                        ]}
                                    >
                                        <InputNumber
                                            style={{ width: "100%" }}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label='Gender'>
                                        <Radio.Group>
                                            <Radio value='male'> Male </Radio>
                                            <Radio value='female'>
                                                {" "}
                                                Female{" "}
                                            </Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </div>
                    </Form>
                </Modal>
                )
            </section>
        </>
    );
};
export default AddMember;
