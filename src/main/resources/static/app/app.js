
import React from 'react';
import {connect} from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <div>
                아유 졸리고 배고파
                {this.props.returnReducer1.get('header')}
                {this.props.returnReducer2.get('header')}
            </div>
        );
    }
}

export default connect(state => {
    return {
        returnReducer1 : state.hello1,
        returnReducer2 : state.hello2
    };
})(App);