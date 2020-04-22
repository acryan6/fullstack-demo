import React from 'react';

const BugReport = (props) => (
  <form onSubmit={props.handleSubmit}>
    <label>
      Reporter's name:
      <input
        name="reporter"
        type="text"
        onChange={props.handleChange}
        required
      />
    </label>
    <br />
    <label>
      Assigned to:
      <input
        name="assignedTo"
        type="text"
        onChange={props.handleChange}
        required
      />
    </label>
    <br />
    <label>
      Threat Level &nbsp;
      <select name="threatLevel" onChange={props.handleChange}>
        <option value="Low-Priority">Low-Priority</option>
        <option value="Important">Important</option>
        <option value="Critical">Critical</option>
        <option value="Midnight">Midnight</option>
      </select>
    </label>
    <br />
    <label>
      Description:
      <input
        name="description"
        type="text"
        onChange={props.handleChange}
        required
      />
    </label>
    <br />
    <label>
      Submit new threat:
      <input
        type="submit"
        value="Submit"
      />
    </label>
  </form>
);


export default BugReport;
