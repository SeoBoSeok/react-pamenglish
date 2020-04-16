import React from 'react'
// import { Popover } from 'antd';
import { useSelector } from 'react-redux';
// import IntlMessages from '@pam/components/utility/intlMessages';
import { Link } from "react-router-dom";
import TopbarDropdownWrapper from './TopbarDropdown.styles';
import { Menu, Dropdown } from 'antd';
import { VideoCameraAddOutlined, UpSquareFilled } from '@ant-design/icons';

function TopbarUpload() {
    const [visible, setVisiblity] = React.useState(false);
    const customizedTheme = useSelector(state => state.ThemeSwitcher.topbarTheme);
  
    function handleVisibleChange() {
      setVisiblity(visible => !visible);
    }
  
    const content = (
      <TopbarDropdownWrapper className="topbarNotification">
        <div className="">
          <h3>
            {/* <IntlMessages id="sidebar.notification" /> */}
          </h3>
        </div>
        <div className="">
          {/* {demoNotifications.map(notification => (
            <a className="isoDropdownListItem" key={notification.id} href="# ">
              <h5>{notification.name}</h5>
              <p>{notification.notification}</p>
            </a>
          ))} */}
        </div>
        <a className="" href="# ">
          {/* <IntlMessages id="topbar.viewAll" /> */}
        </a>
      </TopbarDropdownWrapper>
    );
    const menu = (
        <Menu>
            <Menu.Item key="0"><Link to="/dashboard/my-profile" style={{display:'flex', justifyContent: 'center'}}><UpSquareFilled style={{fontSize: '20px', marginRight: '10px'}} /> 동영상 업로드</Link></Menu.Item>
        </Menu>
    );
    return (
      <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
        <VideoCameraAddOutlined fill="#eee" style={{fontSize: '24px', color: '#000'}}/>
      </Dropdown>
    );
}

export default TopbarUpload;
