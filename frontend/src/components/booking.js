import React from 'react';

import { Table, Divider, Modal, Button } from 'antd';
import Booking from './booking-form';
import MainLayout from './main-layout';

//Modal Code 

class AddBooking extends React.Component {
  state = {
    visible: false,
    confirmLoading: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible, confirmLoading } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
            Add Booking
        </Button>
        <Modal
          title="Title"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <Booking/>
        </Modal>
      </div>
    );
  }
}

const { Column } = Table;

const BComponent = (props) => {
  return(
    <div>
      <MainLayout>
          <AddBooking/>
          <Table dataSource={props.data} rowKey="id">
          <Column title="Date" dataIndex="date" key="date" />
          <Column title="Time" dataIndex="time" key="time" />
          <Column title="Flexibility Before" dataIndex="flexibility_before" key="flexibility_before" />
          <Column title="Flexibility After" dataIndex="flexibility_after" key="flexibility_after" />
          <Column
          title="Action"
          key="action"
          render={(text, record) => (
              <span>
              <a href="/">Edit</a>  
              <Divider type="vertical" />
              <a href="/">Delete</a>
              </span>
          )}
          />
        </Table>  
      </MainLayout>
    </div>
  );
}
export default BComponent;

//Set the Edit and Delete options to modify the bookings