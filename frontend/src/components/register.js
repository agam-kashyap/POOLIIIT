
import React from 'react';
import 'antd/dist/antd.css';
import './css/register.css';
import {
  Form,
  Input,
  Select,
  Button,
} from 'antd';
import MainLayout from './main-layout';

const { Option } = Select;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
//Time part begins

//Time part ends
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, fieldsValue) => {
      if (err) {
        return;
      }

      // Should format date value before submit.
      const values = {
        ...fieldsValue,
        'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
        'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
      };
      console.log('Received values of form: ', values);
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+91</Option>
      </Select>,
    );

    return (
    <div>
      <MainLayout>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="First Name">
            {getFieldDecorator('fname', {
                rules: [
                {
                    required: true,
                    message: 'Please input your First name',
                },
                ],
            })(<Input />)}
            </Form.Item>
            <Form.Item label="Last Name">
            {getFieldDecorator('lname', {
                rules: [
                {
                    required: true,
                    message: 'Please input your Last name',
                },
                ],
            })(<Input />)}
            </Form.Item>
            <Form.Item label="E-mail">
            {getFieldDecorator('email', {
                rules: [
                {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                },
                {
                    required: true,
                    message: 'Please input your E-mail!',
                },
                ],
            })(<Input />)}
            </Form.Item>
            <Form.Item label="Password" hasFeedback>
            {getFieldDecorator('password', {
                rules: [
                {
                    required: true,
                    message: 'Please input your password!',
                },
                {
                    validator: this.validateToNextPassword,
                },
                ],
            })(<Input.Password />)}
            </Form.Item>
            <Form.Item label="Confirm Password" hasFeedback>
            {getFieldDecorator('confirm', {
                rules: [
                {
                    required: true,
                    message: 'Please confirm your password!',
                },
                {
                    validator: this.compareToFirstPassword,
                },
                ],
            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
            </Form.Item>
            
            <Form.Item label="Phone Number">
            {getFieldDecorator('phone', {
                rules: [{ required: true, message: 'Please input your phone number!' }],
            })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
            </Form.Item>

            {/* <Form.Item label="DatePicker">
            {getFieldDecorator('date-picker', config)(<DatePicker />)}
            </Form.Item>
            
            <Form.Item label="TimePicker">
            {getFieldDecorator('time-picker', config)(<TimePicker />)}
            </Form.Item>
             */}
            <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
                Register
            </Button>
            </Form.Item>
        </Form>
      </MainLayout>
    </div>
    );
  }
}

const Register = Form.create({ name: 'register' })(RegistrationForm);

export default Register;