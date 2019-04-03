import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import SiderDemo from '../components/Layout/MainLayout'

function IndexPage() {
  const menu = [{
    id: 1,
    name: 'test',
    pathname: '/',
  },
  ]
  const menuProps = {
    menu,
  }
  return (
    <SiderDemo />
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
