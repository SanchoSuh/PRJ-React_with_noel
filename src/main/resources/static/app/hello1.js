
import {fromJS, Map, List} from 'immutable';

const initialState = fromJS({
    header : 'this is a header'
});

export default (state = initialState, action = {}) => {
    switch (action.type) {
        default :
            return state;
    }
};