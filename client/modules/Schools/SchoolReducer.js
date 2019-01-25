import { SET_SELECTED_SCHOOLS } from './SchoolActions';

// Initial State
const initialState = {
  schools: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  selectedSchools: [],
};

const SchoolReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_SCHOOLS:
      return {
        ...state,
        selectedSchools: action.schools,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all Schools
export const getSchools = state => state.schools.schools;

export const getSelectedSchools = state => state.schools.selectedSchools;

export const getUnselectedSchools = state => state.schools.selectedSchools;

// Export Reducer
export default SchoolReducer;
