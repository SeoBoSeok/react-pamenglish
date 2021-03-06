import React, { useState, useEffect, useCallback } from 'react';
import Spin from '@pam/ui/Antd/Spin/Spin';
import Modal from '@pam/ui/Antd/Modal/Modal';
import Container from '@pam/ui/UI/Container/Container';
import AvatarCard from '@pam/components/AvatarCard/AvatarCard';
import Posts from './Posts/Posts';
import Followers from './Followers/Followers';
import Following from './Following/Following';
import Wrapper, { Banner, Navigation, ContentWrapper } from './Profile.styles';
import { useSelector, useDispatch } from 'react-redux';
import profileActions from '@pam/redux/profile/actions';
import UploadVideo from './Upload/UploadVideo';

const MyProfile = () => {
  const data = useSelector(state => state.profile.data);
  const loading = useSelector(state => state.profile.loading);
  const dispatch = useDispatch();
  const getProfile = useCallback(
    () => dispatch(profileActions.fetchProfileDataStart()),
    [dispatch]
  );

  const [active, setActive] = useState('post');
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  const handleMenu = type => {
    if (type === 'post') {
      setActive(type);
    }
    if (type === 'followers') {
      setActive(type);
      setVisible(true);
    }
    if (type === 'following') {
      setActive(type);
      setVisible(true);
    }
  };

  const handleCancel = () => {
    setVisible(false);
    setActive('post');
  };
  console.log('Profile Page');
  return (
    <Wrapper>
      {loading !== true ? (
        <>
          <Banner
            className="profile-banner"
            style={{ backgroundImage: `url(${data.profile_bg})` }}
          >
            <Container className="container">
              <AvatarCard
                avatar={data.avatar}
                name={data.name}
                username={data.username}
              />
            </Container>
          </Banner>

          <Navigation className="navigation">
            <Container className="container">
              <ul className="menu">
                <li
                  className={active === 'post' ? 'active' : ''}
                  onClick={() => handleMenu('post')}
                >
                  <strong>{data.post.length}</strong> 업로드
                </li>
                <li
                  className={active === 'followers' ? 'active' : ''}
                  onClick={() => handleMenu('followers')}
                >
                  <strong>{data.followers.length}</strong> 실시간 스트리밍
                </li>
                {/* <li
                  className={active === 'following' ? 'active' : ''}
                  onClick={() => handleMenu('following')}
                >
                  <strong>{data.following.length}</strong> Following
                </li> */}
              </ul>
            </Container>
          </Navigation>

          <ContentWrapper>
            <Container className="container">
              <Posts
                avatar={data.avatar}
                username={data.username}
                data={data.post}
              />
              <Modal
                wrapClassName="follow-modal"
                visible={visible}
                onCancel={handleCancel}
                footer={null}
              >
                <UploadVideo />
                {active === 'followers' && <Followers data={data.followers} />}
                {active === 'following' && <Following data={data.following} />}
              </Modal>
            </Container>
          </ContentWrapper>
        </>
      ) : (
        <div
          style={{
            minHeight: '150px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Spin />
        </div>
      )}
    </Wrapper>
  );
};

export default MyProfile;
