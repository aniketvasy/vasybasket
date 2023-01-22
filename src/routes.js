
// import React from 'react'



// const routes = () => {
//   return (
//     <div>router</div>
//   )
// }

// export default routes






// import React, { lazy, Suspense } from 'react';
// import {
//   Route,
//   Redirect,
//   BrowserRouter as Router,
//   Router,
// } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// import ErrorBoundary from './ErrorBoundary';
// import { PUBLIC_ROUTE } from './route.constants';
// import Loader from '@iso/components/utility/loader';

// // const Dashboard = lazy(() => import('./containers/Dashboard/Dashboard'));

// const PrivateRoute = [
//   {
//     path: PUBLIC_ROUTE.LANDING,
//     exact: true,
//     component: lazy(() => import('@iso/containers/Pages/SignIn/SignIn')),
//   }
// ];
// function PrivateRoute({ children, ...rest }) {
//   const isLoggedIn = useSelector((state) => state.Auth.idToken);

//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         isLoggedIn ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: '/signin',
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// }

// export default function Routes() {
//   return (
//     <ErrorBoundary>
//       <Suspense fallback={<Loader />}>
//         <Router>
//           <Routes>
//             {PrivateRoute.map((route, index) => (
//               <Route key={index} path={route.path} exact={route.exact}>
//                 <route.component />
//               </Route>
//             ))}
//             {/* <PrivateRoute path="/dashboard">
//               <Dashboard />
//             </PrivateRoute> */}
//           </Routes>
//         </Router>
//       </Suspense>
//     </ErrorBoundary>
//   );
// }
