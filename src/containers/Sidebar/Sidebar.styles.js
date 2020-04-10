import styled from 'styled-components';
import { palette } from 'styled-theme';
import { transition, borderRadius } from '@pam/lib/helpers/style_utils';
import WithDirection from '@pam/lib/helpers/rtl';

const SidebarWrapper = styled.div`
  .isomorphicSidebar {
    z-index: 1000;
    background: ${palette('color', 14)};
    width: 280px;
    flex: 0 0 280px;

    .scrollarea {
      height: calc(100vh - 70px);
    }

    @media only screen and (max-width: 767px) {
      width: 240px !important;
      flex: 0 0 240px !important;
    }

    &.ant-layout-sider-collapsed {
      @media only screen and (max-width: 767px) {
        width: 0;
        min-width: 0 !important;
        max-width: 0 !important;
        flex: 0 0 0 !important;
      }
    }
    
    .isoLogoWrapper {
      display: flex;
      align-item: center;
      justify-content: center;
      height: 70px;
      backgrond-color: #fff;
      // background: rgba(0, 0, 0, 0.3);
      margin: 0;
      padding: 0 10px;
      text-align: center;
      overflow: hidden;
      ${borderRadius()};

      h3 {
        a {
          font-size: 21px;
          font-weight: 300;
          line-height: 70px;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-left: 20px;
          color: inherit;
          display: block;
          text-decoration: none;
        }
        i {
          color: red;
        }
      }

      .isoLeft {
        display: flex;
        align-items: center;

        @media only screen and (max-width: 767px) {
          margin: ${props =>
            props['data-rtl'] === 'rtl' ? '0 0 0 20px' : '0 20px 0 0'};
        }
  
        .triggerBtn {
          width: 24px;
          height: 100%;
          display: -webkit-inline-flex;
          display: -ms-inline-flex;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: transparent;
          border: 0;
          outline: 0;
          position: relative;
          color: ${palette('grayscale', 1)}
          cursor: pointer;
  
          &:before {
            content: '\f20e';
            font-family: 'Ionicons';
            font-size: 26px;
            color: inherit;
            line-height: 0;
            position: absolute;
          }
        }
      }

    }

    &.ant-layout-sider-collapsed {
      .isoLogoWrapper {
        padding: 0;

        h3 {
          a {
            font-size: 27px;
            font-weight: 500;
            letter-spacing: 0;
          }
        }

        .isoLeft {
          display: flex;
          align-items: center;
    
          @media only screen and (max-width: 767px) {
            margin: ${props =>
              props['data-rtl'] === 'rtl' ? '0 0 0 20px' : '0 20px 0 0'};
          }
    
          .triggerBtn {
            width: 24px;
            height: 100%;
            display: -webkit-inline-flex;
            display: -ms-inline-flex;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background-color: transparent;
            border: 0;
            outline: 0;
            position: relative;
            cursor: pointer;
    
            &:before {
              content: '\f20e';
              font-family: 'Ionicons';
              font-size: 26px;
              color: inherit;
              line-height: 0;
              position: absolute;
            }
          }
        }
      }
    }

    .isoDashboardMenu {
      // padding-top: 35px;
      padding-bottom: 35px;
      background: transparent;

      a {
        text-decoration: none;
        font-weight: 400;
      }

      .ant-menu-item {
        width: 100%;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        padding: 0 24px;
        margin: 0;
      }

      .isoMenuHolder {
        display: flex;
        align-items: center;

        i {
          font-size: 19px;
          color: inherit;
          margin: ${props =>
            props['data-rtl'] === 'rtl' ? '0 0 0 30px' : '0 24px 0 0'};
          width: 18px;
          ${transition()};
        }
      }

      .anticon {
        font-size: 18px;
        margin-right: 30px;
        color: inherit;
        ${transition()};
      }

      .nav-text {
        font-size: 14px;
        color: inherit;
        font-weight: 400;
        ${transition()};
      }

      .ant-menu-item-selected {
        background-color: rgba(0, 0, 0, 0.15) !important;
        i {
          color: red;
        }
        .nav-text {
          color: inherit;
        }
      }

      > li {
        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
          i {
            color: red;
          }
        }
      }
    }

    .ant-menu-dark .ant-menu-inline.ant-menu-sub {
      background: rgba(0, 0, 0, 0.15);
    }

    .ant-menu-submenu-inline,
    .ant-menu-submenu-vertical {
      > .ant-menu-submenu-title {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 24px;

        > span {
          display: flex;
          align-items: center;
        }

        .ant-menu-submenu-arrow {
          left: ${props => (props['data-rtl'] === 'rtl' ? '25px' : 'auto')};
          right: ${props => (props['data-rtl'] === 'rtl' ? 'auto' : '25px')};

          &:before,
          &:after {
            width: 8px;
            ${transition()};
          }

          &:before {
            transform: rotate(-45deg) translateX(3px);
          }

          &:after {
            transform: rotate(45deg) translateX(-3px);
          }

          ${'' /* &:after {
            content: '\f123';
            font-family: 'Ionicons' !important;
            font-size: 16px;
            color: inherit;
            left: ${props => (props['data-rtl'] === 'rtl' ? '16px' : 'auto')};
            right: ${props => (props['data-rtl'] === 'rtl' ? 'auto' : '16px')};
            ${transition()};
          } */};
        }

        &:hover {
          .ant-menu-submenu-arrow {
            &:before,
            &:after {
              color: inherit;
            }
          }
        }
      }

      .ant-menu-inline,
      .ant-menu-submenu-vertical {
        > li:not(.ant-menu-item-group) {
          padding-left: ${props =>
            props['data-rtl'] === 'rtl' ? '0px !important' : '74px !important'};
          padding-right: ${props =>
            props['data-rtl'] === 'rtl' ? '74px !important' : '0px !important'};
          font-size: 13px;
          font-weight: 400;
          margin: 0;
          color: inherit;
          ${transition()};

          &:hover {
            a {
              color: #ffffff !important;
            }
          }
        }

        .ant-menu-item-group {
          padding-left: 0;

          .ant-menu-item-group-title {
            padding-left: 100px !important;
          }
          .ant-menu-item-group-list {
            .ant-menu-item {
              padding-left: 125px !important;
            }
          }
        }
      }

      .ant-menu-sub {
        box-shadow: none;
        background-color: transparent !important;
      }
    }

    &.ant-layout-sider-collapsed {
      .nav-text {
        display: none;
      }

      .ant-menu-submenu-inline > {
        .ant-menu-submenu-title:after {
          display: none;
        }
      }

      .ant-menu-submenu-vertical {
        > .ant-menu-submenu-title:after {
          display: none;
        }

        .ant-menu-sub {
          background-color: transparent !important;

          .ant-menu-item {
            height: 35px;
          }
        }
      }
    }
  }
`;

export default WithDirection(SidebarWrapper);
