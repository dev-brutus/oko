import React from 'react';
import {withRouter} from 'react-router-dom'

class CharacterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            charId: props.match.params.charId,
        }
    }

    render() {
        return (<div>Character form "{this.state.charId}"</div>)
    }
}

export default withRouter(CharacterForm)
