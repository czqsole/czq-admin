import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input, InputNumber } from 'antd';

const FormItem = Form.Item

const modal = ({
  item = {},
  onOk,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
  },
  ...modalProps
}) => {
  const handleOk = () => {
    validateFields((errors) => {
      if (errors) {
        return;
      }
      const data = {
        ...getFieldsValue(),
        key: item.key,
      }
      onOk(data);
    });
  }
  const modalOpts = {
    ...modalProps,
    onOk:handleOk,
  }
  return (
    <Modal {...modalOpts}>
      <Form>
        <FormItem label="Name">
          {getFieldDecorator('workName', {
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="Description">
          {getFieldDecorator('workDesc', {
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="ProcessPercent">
          {getFieldDecorator('processPercent', {
            rules: [
              {
                required: true,
              },
            ],
          })(<InputNumber />)}
        </FormItem>
        <FormItem label="status">
          {getFieldDecorator('status', {
            rules: [
              {
                required: true,
              },
            ],
          })(<InputNumber />)}
        </FormItem>
      </Form>
    </Modal>
  );
}

modal.propTypes = {
  form: PropTypes.object.isRequired,
  onOk: PropTypes.func,
}

export default Form.create()(modal);
