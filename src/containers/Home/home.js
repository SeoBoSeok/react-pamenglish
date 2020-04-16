import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Row, Col } from 'antd';
import HomeComponent from '@pam/components/Home/HomeComponent';

import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import useWindowSize from '@pam/lib/hooks/useWindowSize';
import siteConfig from '@pam/config/site.config';
import appActions from '@pam/redux/app/actions';

import LayoutWrapper from '@pam/components/utility/layoutWrapper';
import basicStyle from '@pam/assets/styles/constants';

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
    const youtubeData = useSelector(state => state.YoutubeSearch.result);
    const { width, height } = useWindowSize();
    const { rowStyle, colStyle } = basicStyle;
    console.log('Home Page');
    return (
        <Layout style={{ height: height }}>
            <Topbar />
            <Layout style={styles.layout}>
            <Sidebar />
                <Layout
                    className="isoContentMainLayout"
                    // style={{
                    // height: appHeight,
                    // }}
                >
                    <Content className="isomorphicContent" style={styles.content}>
                        <LayoutWrapper>
                            <Row style={rowStyle} gutter={10} >
                                {/* <Col xl={6} lg={8} md={12} sm={24} xs={24} style={colStyle}>
                                    <HomeComponent></HomeComponent>
                                </Col>
                                <Col xl={6} lg={8} md={12} sm={24} xs={24} style={colStyle}>
                                    <HomeComponent></HomeComponent>
                                </Col>
                                <Col xl={6} lg={8} md={12} sm={24} xs={24} style={colStyle}>
                                    <HomeComponent></HomeComponent>
                                </Col>
                                <Col xl={6} lg={8} md={12} sm={24} xs={24} style={colStyle}>
                                    <HomeComponent></HomeComponent>
                                </Col> */}
                                {
                                    youtubeData && youtubeData.map((youtube, index) => (
                                            <React.Fragment key={index}>
                                                {
                                                    <Col xl={6} lg={8} md={12} sm={24} xs={24} style={colStyle}>
                                                        <HomeComponent url={youtube.id.videoId} />
                                                    </Col>
                                                }
                                            </React.Fragment>
                                        )
                                    )
                                }
                            </Row>
                        </LayoutWrapper>
                    </Content>
                    <Footer style={styles.footer}>{siteConfig.footerText}</Footer>
                </Layout>
            </Layout>
            {/* <ThemeSwitcher /> */}
        </Layout>
    )
}
