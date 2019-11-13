import React from 'react';
import {Route} from 'react-router-dom';
import RootForm from "./forms/RootForm";
import LoginForm from "./forms/LoginForm";
import CharacterForm from "./forms/CharacterForm";
import EveCallback from "./forms/EveCallback";

function Body() {
    return (<div>
        <Route exact path="/" component={RootForm}/>
        <Route exact path="/login" component={LoginForm}/>
        <Route exact path="/characters/:charId" component={props => <CharacterForm {...props} />}/>
        <Route exact path="/oko/eve-callback">
            <EveCallback/>
        </Route></div>)
}

export default Body
