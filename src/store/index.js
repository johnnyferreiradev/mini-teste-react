import { createStore } from 'redux';

const INITIAL_STATE = {
	candidateNameRedux: 'Johnny Ferreira',
};

function candidate(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'SET_NAME':
			return { ...state }
		default:
			return state;
	}
}

const store = createStore(candidate);

export default store;