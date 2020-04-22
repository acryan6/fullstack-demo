import React from 'react';

const BugReport = (props) => (
  <form>
    <label>
      Reporter's name:
      <input
        name="reporter"
        type="text"
        onChange={props.handleChange}
        required
      />
    </label>

    <label>
      Assigned to:
      <input
        name="assignedTo"
        type="text"
        onChange={props.handleChange}
        required
      />
    </label>

    <label>
      Threat Level &nbsp;
      <select onChange={(e) => props.filterHandler(e.target.value)}>
        <option value="Low-Priority">Low-Priority</option>
        <option value="Important">Important</option>
        <option value="Critical">Critical</option>
        <option value="Midnight">Midnight</option>
      </select>
    </label>

    <label>
      <input
        name="description"
        type="text"
        onChange={props.handleChange}
        required
      />
    </label>
  </form>
);


export default BugReport;
