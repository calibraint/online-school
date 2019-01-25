import callApi from '../../util/apiCaller';

// Export Constants
export const SET_SELECTED_SCHOOLS = 'SET SELECTED SCHOOLS';

// Export Actions
export function setSelectedSchools(schools) {
  return {
    type: SET_SELECTED_SCHOOLS,
    schools,
  };
}

export function updateSelectedSchools(schools) {
  return (dispatch) => {
    return callApi('schools', 'post', schools)
      .then(res => dispatch(setSelectedSchools(res.schools)));
  };
}

export function fetchSelectedSchools() {
  return (dispatch) => {
    return callApi('schools', 'get')
      .then(res => dispatch(setSelectedSchools(res ? res.schools : [])))
      .catch(() => dispatch(setSelectedSchools([])));
  };
}
