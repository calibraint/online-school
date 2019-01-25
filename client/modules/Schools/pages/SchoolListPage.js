import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Components
import SchoolListItem from '../components/SchoolListItem/SchoolListItem';

// Import Actions
import { fetchSelectedSchools, updateSelectedSchools } from '../SchoolActions';

// Import Selectors
import { getSchools, getSelectedSchools, getUnselectedSchools } from '../SchoolReducer';

class SchoolListPage extends Component {

  constructor(props) {
    super(props);
    this.state = { selectedSchools: props.selectedSchools };
  }

  componentDidMount() {
    this.props.dispatch(fetchSelectedSchools());
  }

  componentWillReceiveProps = (props) => {
    this.setState({
      selectedSchools: props.selectedSchools,
    });
  };

  onConfirmation = (event) => {
    event.preventDefault();
    this.props.dispatch(updateSelectedSchools(this.state.selectedSchools));
    event.preventDefault();
  };

  toggleSchool = (schoolToToggle) => {
    if (this.state.selectedSchools.includes(schoolToToggle)) {
      this.setState((state) => ({
        selectedSchools: state.selectedSchools.filter(school => school !== schoolToToggle),
      }));
    } else {
      this.setState((state) => ({
        selectedSchools: [schoolToToggle, ...state.selectedSchools],
      }));
    }
  };

  render() {
    return (
      <form onSubmit={this.onConfirmation}>
        {
          this.props.schools.map(school => <SchoolListItem key={school} school={school} toggleSchool={this.toggleSchool} isChecked={this.state.selectedSchools.includes(school)} />)
        }
        <input type="submit" value="Confirm" disabled={!this.state.selectedSchools.length} />
      </form>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
SchoolListPage.need = [() => { return fetchSelectedSchools(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    schools: getSchools(state),
    selectedSchools: getSelectedSchools(state),
    unselectedSchools: getUnselectedSchools(state),
  };
}

SchoolListPage.propTypes = {
  schools: PropTypes.arrayOf(PropTypes.string),
  selectedSchools: PropTypes.arrayOf(PropTypes.string),
  unselectedSchools: PropTypes.arrayOf(PropTypes.string),
  dispatch: PropTypes.func.isRequired,
};

SchoolListPage.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(SchoolListPage);
