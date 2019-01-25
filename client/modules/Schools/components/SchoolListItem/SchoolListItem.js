import React from 'react';
import PropTypes from 'prop-types';

function SchoolListItem(props) {
  return (
    <div>
      <label htmlFor={`checkbox-${props.school}`}>
        <input id={`checkbox-${props.school}`} type="checkbox" onChange={() => props.toggleSchool(props.school)} defaultChecked={props.isChecked} />
        {props.school}
      </label>
    </div>
  );
}

SchoolListItem.propTypes = {
  toggleSchool: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
  school: PropTypes.string,
};

export default SchoolListItem;
