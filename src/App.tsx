import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Posts from './Pages/Posts';
import SignlePostPage from './Pages/SinglePostPage';

const App = () => {
    return(
        <Switch>
            <Route path="/" exact component={Posts} />
            <Route path="/posts/:id" component={SignlePostPage} />
        </Switch>
    )
}

export default App;