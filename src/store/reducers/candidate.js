const INITIAL_STATE = {
	candidateNameRedux: 'Johnny Ferreira',
};

export default function candidate(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'SET_NAME':
			return { ...state }
		default:
			return state;
	}
}