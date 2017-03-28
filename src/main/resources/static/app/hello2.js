
import {fromJS, Map, List} from 'immutable';

const initialState = fromJS({
    header : 'this is a header222222'
});

export default (state = initialState, action = {}) => {
    switch (action.type) {
        default :
            return state;
    }
};
