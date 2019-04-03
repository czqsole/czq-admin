import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Table, Button } from 'antd';
import Modal from '../components/Modal';

const Work = ({ list, dispatch, work }) => {
  const columns = [{
    title: '工作项',
    dataIndex: 'workName',
  }, {
    title: '描述',
    dataIndex: 'workDesc',
  }, {
    title: '进度（%）',
    dataIndex: 'processPercent',
  }, {
    title: '状态',
    dataIndex: 'status',
  }];

  const tableData = [];
  for (let i = 0; i < 5; i++) {
    tableData.push({
      key: i,
      workName: 'test'.concat(i),
      workDesc: 'This is a test work.',
      processPercent: 33 + i,
      status: '进行中',
    });
  }
  // const { list } = work;
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log('selectedRowKeys changed: ', selectedRowKeys)
      console.log(selectedRowKeys)
    }
  }

  const pagination = {
    total: tableData.length,
    showSizeChanger: true,
    onShowSizeChange(current, pageSize) {
      console.log('Current: ', current, '; PageSize: ', PAGE_SIZE)
    },
    onChange(current) {
      console.log('Current: ', current)
    }
  }

  const modalVisible = work.modalVisible;
  const modalProps = {
    visible: modalVisible,
    onOk(data) {
      dispatch({
        type: 'work/add',
        payload: data,
      });
    },
    onCancel() {
      dispatch({
        type: 'work/hideModal',
      });
    }
  }
  function showModal() {
    dispatch({
      type: 'work/showModal',
    });
  }
  return (
    <div>
      <Button type="primary" onClick={showModal} >新增任务</Button>
      <Table
        columns={columns}
        dataSource={list}
        rowSelection={rowSelection}
        pagination={pagination}
        bordered
      />
      <Modal {...modalProps} />
    </div>
  );
}

Work.prototype = {
  work: PropTypes.object,
  list: PropTypes.object,
  dispatch: PropTypes.func,
}

function mapStateToProps(state) {
  const { list } = state.work;
  return {
    list,
    work: state.work,
  };
}

export default connect(mapStateToProps)(Work);
