import React, { Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './apolloClient';
import Album from 'client/Album';
import Detail from 'client/Detail';

function App () {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Fragment>
          <Route exact={true} path={'/'} component={Album}/>
          <Route exact={true} path={'/details/:albumId'} component={Detail}/>
        </Fragment>
      </Router>
    </ApolloProvider>
  );
}

export default App;
