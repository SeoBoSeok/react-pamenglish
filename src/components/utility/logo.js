import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import siteConfig from '@pam/config/site.config';
import appActions from '@pam/redux/app/actions';

const { toggleCollapsed } = appActions;

export default ({ collapsed }) => {
  const { iscollapsed, openDrawer } = useSelector(state => state.App);

  const dispatch = useDispatch();
  const handleToggle = React.useCallback(() => dispatch(toggleCollapsed()), [
    dispatch,
  ]);
  return (
    <div className="isoLogoWrapper">
      {collapsed ? (
          <div className="isoLeft">
            <button
              className={
                iscollapsed ? 'triggerBtn menuCollapsed' : 'triggerBtn menuOpen'
              }
              onClick={handleToggle}
            />
          </div>
      ) : (
        <>
        <div className="isoLeft">
          <button
            className={
              iscollapsed ? 'triggerBtn menuCollapsed' : 'triggerBtn menuOpen'
            }
            onClick={handleToggle}
          />
        </div>
        <h3>
          <Link to="/"><i className={`ion-social-youtube`}/>{` `}{'YOUTUBE'}</Link>
        </h3>
        </>
      )}
    </div>
  );
};
