import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Sider } from 'antd'
import { Link } from 'react-router-dom'

const Menus = ({ menu }) => {
  const getMenuItems = () => {
    return menu.map((item) => {
      return (
        <Menu.Item key={item.id}>
          <Link to={item.pathname}>
            {item.name}
          </Link>
        </Menu.Item>
      )
    })
  }
  const menuItem = getMenuItems(menu)
  return (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      {menuItem}
    </Menu>
  )
}

Menus.propTypes = {
  menu: PropTypes.array,
}

export default Menus;
