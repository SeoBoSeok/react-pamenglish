import React, { Component } from 'react'
import {Form,
    Select,
    InputNumber,
    Switch,
    Radio,
    Slider,
    Button,
    Upload,
    Rate,
    Checkbox,
    Row,
    Col} from 'antd';
import {LoadingOutlined, PlusOutlined, InboxOutlined, UploadOutlined } from '@ant-design/icons';

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
    //   message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
    //   message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }
  
  const { Option } = Select;
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };
  
  const normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

export default class UploadVideo extends Component {zdfsdfsdfxcvx
    state = {
        formData: null
    }
    formRef = React.createRef();
    componentDidMount() {
        this.formRef.current.setFieldsValue({

        })
    }
    handleChange = e => {
        const key = [...Object.keys(e)];
        this.setState({
            formData: {
                [key]: e[key]
            }
        }, () => {
            console.log(this.state);
        })
    }
    handleClear = () => {
        this.setState({
            formData: null
        }, () => {
            console.log(this.state);
        });
        // this.props.form.resetFields();
        this.formRef.current.setFieldsValue({
            select: "",
            "select-multiple": []
        })
    }
    handleForm = e => {
        console.log(e);
    }
    render(){
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };
    return (
        <Form.Provider>
            <Form
                name="validate_other"
                {...formItemLayout}
                onFinish={onFinish}
                initialValues={{}}
                onValuesChange={this.handleChange}
                ref={this.formRef}
            >
                <Form.Item label="Plain Text">
                <span className="ant-form-text">UPLOAD</span>
                </Form.Item>
                <Form.Item
                name="select"
                label="Select"
                hasFeedback
                rules={[{ required: true, message: 'Please select your country!' }]}
                >
                <Select placeholder="Please select a country">
                    <Option value="china">China</Option>
                    <Option value="usa">U.S.A</Option>
                </Select>
                </Form.Item>
        
                <Form.Item
                name="select-multiple"
                label="Select[multiple]"
                rules={[{ required: true, message: 'Please select your favourite colors!', type: 'array' }]}
                >
                <Select mode="multiple" placeholder="Please select favourite colors">
                    <Option value="red">Red</Option>
                    <Option value="green">Green</Option>
                    <Option value="blue">Blue</Option>
                </Select>
                </Form.Item>
        
                <Form.Item label="InputNumber">
                <Form.Item name="input-number" noStyle>
                    <InputNumber min={1} max={10} />
                </Form.Item>
                <span className="ant-form-text"> machines</span>
                </Form.Item>
        
                <Form.Item name="switch" label="Switch" valuePropName="checked">
                <Switch />
                </Form.Item>
        
                <Form.Item name="slider" label="Slider">
                <Slider
                    marks={{
                    0: 'A',
                    20: 'B',
                    40: 'C',
                    60: 'D',
                    80: 'E',
                    100: 'F',
                    }}
                />
                </Form.Item>
        
                <Form.Item name="radio-group" label="Radio.Group">
                <Radio.Group>
                    <Radio value="a">item 1</Radio>
                    <Radio value="b">item 2</Radio>
                    <Radio value="c">item 3</Radio>
                </Radio.Group>
                </Form.Item>
        
                <Form.Item name="radio-button" label="Radio.Button">
                <Radio.Group>
                    <Radio.Button value="a">item 1</Radio.Button>
                    <Radio.Button value="b">item 2</Radio.Button>
                    <Radio.Button value="c">item 3</Radio.Button>
                </Radio.Group>
                </Form.Item>
        
                <Form.Item name="checkbox-group" label="Checkbox.Group">
                <Checkbox.Group>
                    <Row>
                    <Col span={8}>
                        <Checkbox value="A" style={{ lineHeight: '32px' }}>
                        A
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox value="B" style={{ lineHeight: '32px' }} disabled>
                        B
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox value="C" style={{ lineHeight: '32px' }}>
                        C
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox value="D" style={{ lineHeight: '32px' }}>
                        D
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox value="E" style={{ lineHeight: '32px' }}>
                        E
                        </Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox value="F" style={{ lineHeight: '32px' }}>
                        F
                        </Checkbox>
                    </Col>
                    </Row>
                </Checkbox.Group>
                </Form.Item>
        
                <Form.Item name="rate" label="Rate">
                <Rate />
                </Form.Item>
        
                <Form.Item
                name="upload"
                label="Upload"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                extra=""
                >
                <Upload name="logo" action="/upload.do" listType="picture">
                    <Button>
                    <UploadOutlined /> Click to upload
                    </Button>
                </Upload>
                </Form.Item>
        
                <Form.Item label="Dragger">
                <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                    <Upload.Dragger name="files" action="/upload.do">
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                    </Upload.Dragger>
                </Form.Item>
                </Form.Item>
        
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button type="danger" onClick={this.handleClear}>
                    CLEAR
                </Button>
                </Form.Item>
            </Form>
        </Form.Provider>
        );
    }
      
}
