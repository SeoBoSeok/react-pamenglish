import React,  { useCallback, useEffect } from 'react'
import Container from '@pam/ui/UI/Container/Container';
import AvatarCard from '@pam/components/AvatarCard/AvatarCard';

import { useSelector, useDispatch } from 'react-redux';
import profileActions from '@pam/redux/profile/actions';

export default function DashSidebarInfo() {
    const data = useSelector(state => state.profile.data);
    const dispatch = useDispatch();

    // const getProfile = useCallback(
    //     () => dispatch(profileActions.fetchProfileDataStart()),
    //     [dispatch]
    //   );

    // useEffect(() => {
    // getProfile();
    // }, [getProfile]);
    return (
        <div>
            <Container className="container">
              <AvatarCard
                avatar={data.avatar}
                name={data.name}
                username={data.username}
                sidebar={true}
              />
            </Container>
        </div>
    )
}
