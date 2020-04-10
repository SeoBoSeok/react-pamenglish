import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'antd';
import PageHeader from '@pam/components/utility/pageHeader';
import Box from '@pam/components/utility/box';
import LayoutWrapper from '@pam/components/utility/layoutWrapper';
import { InputSearch } from '@pam/components/uielements/input';
import IntlMessages from '@pam/components/utility/intlMessages';
import notification from '@pam/components/Notification';
import YoutubeResult from '@pam/components/YoutubeSearch/Result';
import basicStyle from '@pam/assets/styles/constants';
import actions from '@pam/redux/youtubeSearch/actions';
import NoAPIKey from '@pam/components/utility/noApiKey';
import youtubeSearchApi from '@pam/config/youtube_search.config';

const { youtubeSearch, onPageChange } = actions;

export default function YoutubeSearch() {
  const YoutubeSearch = useSelector(state => state.YoutubeSearch);
  const dispatch = useDispatch();
  const onSearch = React.useCallback(
    value => {
      if (value && value.length > 0) {
        dispatch(youtubeSearch(value));
      } else {
        notification('error', 'Please type something');
      }
    },
    [dispatch]
  );
  const handlePageChange = React.useCallback(
    (text, token) => {
      dispatch(onPageChange(text, token));
    },
    [dispatch]
  );
  React.useEffect(() => {
    onSearch(YoutubeSearch.searcText);
  }, [onSearch, YoutubeSearch.searcText]);
  const { rowStyle, colStyle, gutter } = basicStyle;
  return (
    <LayoutWrapper>
      <PageHeader>
        <IntlMessages id="sidebar.youtubeSearch" />
      </PageHeader>

      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={24} sm={24} xs={24} style={colStyle}>
          {youtubeSearchApi ? (
            <Box style={{ minHeight: 220 }}>
              <InputSearch
                placeholder="Search on Youtube"
                defaultValue={YoutubeSearch.searcText}
                onSearch={onSearch}
              />
              <YoutubeResult
                YoutubeSearch={YoutubeSearch}
                onPageChange={handlePageChange}
              />
            </Box>
          ) : (
            <NoAPIKey />
          )}
        </Col>
      </Row>
    </LayoutWrapper>
  );
}
