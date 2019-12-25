import React from 'react';

import { Form, DatePicker, TimePicker, Button } from 'antd';

class TimeRelatedForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
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
    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="Date">
          {getFieldDecorator('date-picker', config)(<DatePicker />)}
        </Form.Item>
        
        <Form.Item label="Time">
          {getFieldDecorator('time-picker', config)(<TimePicker />)}
        </Form.Item>
        <Form.Item label="Flexibility Before">
          {getFieldDecorator('time-picker', config)(<TimePicker />)}
        </Form.Item>
        <Form.Item label="Flexibilty After">
          {getFieldDecorator('time-picker', config)(<TimePicker />)}
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const Booking = Form.create({ name: 'time_related_controls' })(TimeRelatedForm);

export default Booking;