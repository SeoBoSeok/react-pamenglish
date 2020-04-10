import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout } from 'antd';

import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import useWindowSize from '@pam/lib/hooks/useWindowSize';
import siteConfig from '@pam/config/site.config';
import appActions from '@pam/redux/app/actions';

const { Content, Footer } = Layout;
const { toggleAll } = appActions;
const styles = {
  layout: { flexDirection: 'row', overflowX: 'hidden' },
  content: {
    padding: '70px 0 0',
    flexShrink: '0',
    background: '#f1f3f6',
    position: 'relative',
  },
  footer: {
    background: '#ffffff',
    textAlign: 'center',
    borderTop: '1px solid #ededed',
  },
};

export default function Home() {
    const dispatch = useDispatch();
    const appHeight = useSelector(state => state.App.height);
    const { width, height } = useWindowSize();

    return (
        <Layout style={{ height: height }}>
            <Topbar />
            <Layout style={styles.layout}>
            <Sidebar />
                <Layout
                    className="isoContentMainLayout"
                    style={{
                    height: appHeight,
                    }}
                >
                    <Content className="isomorphicContent" style={styles.content}>

                    </Content>
                    <Footer style={styles.footer}>{siteConfig.footerText}</Footer>
                </Layout>
            </Layout>
            {/* <ThemeSwitcher /> */}
        </Layout>
    )
}
