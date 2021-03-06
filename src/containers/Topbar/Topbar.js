import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import notification from '@pam/components/Notification';

import appActions from '@pam/redux/app/actions';
import TopbarNotification from './TopbarNotification';
import TopbarUpload from './TopbarUpload';
import TopbarMessage from './TopbarMessage';
import TopbarSearch from './TopbarSearch';
import TopbarUser from './TopbarUser';
// import TopbarAddtoCart from './TopbarAddToCart';
import TopbarWrapper from './Topbar.styles';
import actions from '@pam/redux/youtubeSearch/actions';

const { Header } = Layout;
const { toggleCollapsed } = appActions;
const { Search } = Input;
const { youtubeSearch, onPageChange } = actions;

export default function Topbar() {
  const [selectedItem, setSelectedItem] = React.useState('');
  const customizedTheme = useSelector(state => state.ThemeSwitcher.topbarTheme);
  const { collapsed, openDrawer } = useSelector(state => state.App);
  const dispatch = useDispatch();
  const handleToggle = React.useCallback(() => dispatch(toggleCollapsed()), [
    dispatch,
  ]);
  const isCollapsed = collapsed && !openDrawer;
  const styling = {
    background: customizedTheme.backgroundColor,
    position: 'fixed',
    width: '100%',
    height: 70,
  };
  const onSearch = React.useCallback(value => {
    if(value && value.length > 0) {
      dispatch(youtubeSearch(value))
    } else {
      notification('error', 'Youtube API ERROR.');
    }
  }, [dispatch])
  return (
    <TopbarWrapper>
      <Header
        style={styling}
        className={
          isCollapsed ? 'isomorphicTopbar collapsed' : 'isomorphicTopbar'
        }
      >
        <div className="isoLeft">
          <button
              className={
                isCollapsed ? 'triggerBtn menuCollapsed' : 'triggerBtn menuOpen'
              }
              style={{ color: customizedTheme.textColor }}
              onClick={handleToggle}
            />
            <h3>
              <Link to="/"><i className={`ion-social-youtube`}/>{` `}{'YOUTUBE'}</Link>
            </h3>
        </div>
        <div className="isoCenter">
          <Search placeholder="input search text" style={{ width: 420 }} onSearch={onSearch} enterButton={(<Button type="primary" icon={<SearchOutlined />}>
    </Button>)} />
        </div>
        <ul className="isoRight">
          <li className="isoSearch">
            <TopbarSearch />
          </li>

              <li onClick={() => setSelectedItem('upload')}
              className="">
                <TopbarUpload />
              </li>

          <li
            onClick={() => setSelectedItem('notification')}
            className={selectedItem ? 'isoNotify active' : 'isoNotify'}
          >
            <TopbarNotification />
          </li>

          <li onClick={() => setSelectedItem('message')} className="isoMsg">
            <TopbarMessage />
          </li>
          {/* <li onClick={() => setSelectedItem('addToCart')} className="isoCart">
            <TopbarAddtoCart />
          </li> */}

          <li onClick={() => setSelectedItem('user')} className="isoUser">
            <TopbarUser />
          </li>
        </ul>
      </Header>
    </TopbarWrapper>
  );
}
