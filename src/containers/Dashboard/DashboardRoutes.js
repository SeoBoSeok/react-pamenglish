import React, { lazy, Suspense } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import Loader from '@pam/components/utility/loader';

const routes = [
  // {
  //   path: '',
  //   component: lazy(() => import('@pam/containers/Widgets/Widgets')),
  //   exact: true,
  // },
  // {
  //   path: 'inbox',
  //   component: lazy(() => import('@pam/containers/Mail/Mail')),
  // },
  {
    path: 'my-profile',
    component: lazy(() => import('@pam/containers/Profile/Profile')),
  },
  // {
  //   path: 'quiz/:quizid',
  //   component: lazy(() => import('@pam/containers/Quiz/SingleQuiz')),
  // },
  // {
  //   path: 'quiz',
  //   component: lazy(() => import('@pam/containers/Quiz/Quiz')),
  // },
  // {
  //   path: 'swiperslider',
  //   component: lazy(() =>
  //     import('@pam/containers/UIElements/SwiperSlider/SwiperSlider')
  //   ),
  // },
  // {
  //   path: 'scrum-board',
  //   component: lazy(() => import('@pam/containers/ScrumBoard')),
  //   exact: false,
  // },
  // {
  //   path: 'mailbox',
  //   component: lazy(() => import('@pam/containers/Mail/Mail')),
  // },
  // {
  //   path: 'calendar',
  //   component: lazy(() => import('@pam/containers/Calendar/Calendar')),
  // },
  // {
  //   path: 'googlemap',
  //   component: lazy(() => import('@pam/containers/Map/GoogleMap/GoogleMap')),
  // },
  // {
  //   path: 'leafletmap',
  //   component: lazy(() => import('@pam/containers/Map/Leaflet/Leaflet')),
  // },
  // {
  //   path: 'table_ant',
  //   component: lazy(() => import('@pam/containers/Tables/AntTables/AntTables')),
  // },
  // {
  //   path: 'allFormComponent',
  //   component: lazy(() => import('@pam/containers/Forms/Forms')),
  // },
  // {
  //   path: 'InputField',
  //   component: lazy(() => import('@pam/containers/Forms/Input/Input')),
  // },
  // {
  //   path: 'editor',
  //   component: lazy(() => import('@pam/containers/Forms/Editor/Editor')),
  // },
  // {
  //   path: 'stepperForms',
  //   component: lazy(() =>
  //     import('@pam/containers/Forms/StepperForms/StepperForms')
  //   ),
  // },
  // {
  //   path: 'FormsWithValidation',
  //   component: lazy(() =>
  //     import('@pam/containers/Forms/FormsWithValidation/FormsWithValidation')
  //   ),
  // },
  // {
  //   path: 'progress',
  //   component: lazy(() => import('@pam/containers/Forms/Progress/Progress')),
  // },
  // {
  //   path: 'button',
  //   component: lazy(() => import('@pam/containers/Forms/Button/Button')),
  // },
  // {
  //   path: 'tab',
  //   component: lazy(() => import('@pam/containers/Forms/Tab/Tab')),
  // },
  // {
  //   path: 'autocomplete',
  //   component: lazy(() =>
  //     import('@pam/containers/Forms/AutoComplete/AutoComplete')
  //   ),
  // },
  // {
  //   path: 'checkbox',
  //   component: lazy(() => import('@pam/containers/Forms/Checkbox/Checkbox')),
  // },
  // {
  //   path: 'radiobox',
  //   component: lazy(() => import('@pam/containers/Forms/Radiobox/Radiobox')),
  // },
  // {
  //   path: 'selectbox',
  //   component: lazy(() => import('@pam/containers/Forms/Select/Select')),
  // },
  // {
  //   path: 'transfer',
  //   component: lazy(() => import('@pam/containers/Forms/Transfer/Transfer')),
  // },
  // {
  //   path: 'gridLayout',
  //   component: lazy(() => import('@pam/containers/Box/GridLayout')),
  // },
  // {
  //   path: 'notes',
  //   component: lazy(() => import('@pam/containers/Note/Note')),
  // },
  // {
  //   path: 'todo',
  //   component: lazy(() => import('@pam/containers/Todo/Todo')),
  // },
  // {
  //   path: 'articles',
  //   component: lazy(() =>
  //     import('@pam/containers/FirestoreCRUD/Article/Article')
  //   ),
  // },
  // {
  //   path: 'investors',
  //   component: lazy(() =>
  //     import('@pam/containers/FirestoreCRUD/Investor/Investor')
  //   ),
  // },
  // {
  //   path: 'contacts',
  //   component: lazy(() => import('@pam/containers/Contacts/Contacts')),
  // },
  // {
  //   path: 'alert',
  //   component: lazy(() => import('@pam/containers/Feedback/Alert/Alert')),
  // },
  // {
  //   path: 'modal',
  //   component: lazy(() => import('@pam/containers/Feedback/Modal/Modal')),
  // },
  // {
  //   path: 'message',
  //   component: lazy(() => import('@pam/containers/Feedback/Message/Message')),
  // },
  // {
  //   path: 'notification',
  //   component: lazy(() =>
  //     import('@pam/containers/Feedback/Notification/Notification')
  //   ),
  // },
  // {
  //   path: 'Popconfirm',
  //   component: lazy(() =>
  //     import('@pam/containers/Feedback/Popconfirm/Popconfirm')
  //   ),
  // },
  // {
  //   path: 'spin',
  //   component: lazy(() => import('@pam/containers/Feedback/Spin/Spin')),
  // },
  // {
  //   path: 'shuffle',
  //   component: lazy(() => import('@pam/containers/Shuffle/Shuffle')),
  // },
  // {
  //   path: 'affix',
  //   component: lazy(() => import('@pam/containers/Navigation/Affix')),
  // },
  // {
  //   path: 'breadcrumb',
  //   component: lazy(() =>
  //     import('@pam/containers/UIElements/Breadcrumb/Breadcrumb')
  //   ),
  // },
  // {
  //   path: 'backToTop',
  //   component: lazy(() => import('@pam/containers/Navigation/BackToTop')),
  // },
  // {
  //   path: 'dropdown',
  //   component: lazy(() =>
  //     import('@pam/containers/UIElements/Dropdown/Dropdown')
  //   ),
  // },
  // {
  //   path: 'op_badge',
  //   component: lazy(() => import('@pam/containers/UIElements/Badge/Badge')),
  // },
  // {
  //   path: 'op_card',
  //   component: lazy(() => import('@pam/containers/UIElements/Card/Card')),
  // },
  // {
  //   path: 'op_carousel',
  //   component: lazy(() =>
  //     import('@pam/containers/UIElements/Carousel/Carousel')
  //   ),
  // },
  // {
  //   path: 'op_collapse',
  //   component: lazy(() =>
  //     import('@pam/containers/UIElements/Collapse/Collapse')
  //   ),
  // },
  // {
  //   path: 'op_tooltip',
  //   component: lazy(() => import('@pam/containers/UIElements/Tooltip/Tooltip')),
  // },
  // {
  //   path: 'rating',
  //   component: lazy(() => import('@pam/containers/UIElements/Rating/Rating')),
  // },
  // {
  //   path: 'tree',
  //   component: lazy(() => import('@pam/containers/UIElements/Tree/Tree')),
  // },
  // {
  //   path: 'op_tag',
  //   component: lazy(() => import('@pam/containers/UIElements/Tag/Tag')),
  // },
  // {
  //   path: 'op_timeline',
  //   component: lazy(() =>
  //     import('@pam/containers/UIElements/Timeline/Timeline')
  //   ),
  // },
  // {
  //   path: 'pagination',
  //   component: lazy(() =>
  //     import('@pam/containers/UIElements/Pagination/Pagination')
  //   ),
  // },
  // {
  //   path: 'op_popover',
  //   component: lazy(() => import('@pam/containers/UIElements/Popover/Popover')),
  // },
  // {
  //   path: 'googleChart',
  //   component: lazy(() =>
  //     import('@pam/containers/Charts/GoogleChart/GoogleChart')
  //   ),
  // },
  // {
  //   path: 'reecharts',
  //   component: lazy(() => import('@pam/containers/Charts/Recharts/Recharts')),
  // },
  // {
  //   path: 'menu',
  //   component: lazy(() => import('@pam/containers/Navigation/NavigationMenu')),
  // },
  // {
  //   path: 'ReactChart2',
  //   component: lazy(() =>
  //     import('@pam/containers/Charts/ReactChart2/ReactChart2')
  //   ),
  // },
  // {
  //   path: 'card',
  //   component: lazy(() => import('@pam/containers/Ecommerce/Card/Card')),
  // },
  // {
  //   path: 'cart',
  //   component: lazy(() => import('@pam/containers/Ecommerce/Cart/Cart')),
  // },
  // {
  //   path: 'checkout',
  //   component: lazy(() =>
  //     import('@pam/containers/Ecommerce/Checkout/Checkout')
  //   ),
  // },
  // {
  //   path: 'shop',
  //   component: lazy(() =>
  //     import('@pam/containers/Ecommerce/Algolia/InstantSearch')
  //   ),
  // },
  // {
  //   path: 'reactDates',
  //   component: lazy(() =>
  //     import('@pam/containers/AdvancedUI/ReactDates/ReactDates')
  //   ),
  // },
  // {
  //   path: 'codeMirror',
  //   component: lazy(() =>
  //     import('@pam/containers/AdvancedUI/CodeMirror/CodeMirror')
  //   ),
  // },
  // {
  //   path: 'uppy',
  //   component: lazy(() => import('@pam/containers/AdvancedUI/Uppy/Uppy')),
  // },
  // {
  //   path: 'dropzone',
  //   component: lazy(() =>
  //     import('@pam/containers/AdvancedUI/Dropzone/Dropzone')
  //   ),
  // },
  // {
  //   path: 'youtubeSearch',
  //   component: lazy(() =>
  //     import('@pam/containers/YoutubeSearch/YoutubeSearch')
  //   ),
  // },
  // {
  //   path: 'frappeChart',
  //   component: lazy(() =>
  //     import('@pam/containers/Charts/FrappeChart/FrappeChart')
  //   ),
  // },
  // {
  //   path: 'invoice/:invoiceId',
  //   component: lazy(() => import('@pam/containers/Invoice/SingleInvoice')),
  // },
  // {
  //   path: 'invoice',
  //   component: lazy(() => import('@pam/containers/Invoice/Invoices')),
  // },
  // {
  //   path: 'chat',
  //   component: lazy(() => import('@pam/containers/Chat/Chat')),
  // },

  // {
  //   path: 'githubSearch',
  //   component: lazy(() => import('@pam/containers/GithubSearch/GithubSearch')),
  // },
  // {
  //   path: 'blank_page',
  //   component: lazy(() => import('@pam/containers/BlankPage')),
  // },
];

export default function AppRouter() {
  const { url } = useRouteMatch();
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {routes.map((route, idx) => (
          <Route exact={route.exact} key={idx} path={`${url}/${route.path}`}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </Suspense>
  );
}
