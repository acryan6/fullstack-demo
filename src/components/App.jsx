import React from 'react';
import Nav from './Nav.jsx';
import BugTile from './BugTile.jsx';
import exampleData from '../example-data/exampleData';
import moduleName from './BugReport.jsx'

import '../styles/App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: exampleData,
      bugs: exampleData,
      bugReport: {
        reporter: '',
        assignedTo: '',
        threatLevel: 'Low-Priority',
        description: '',
      }
    };
    this.filterHandler = this.filterHandler.bind(this);
  }

  filterHandler(filter) {
    this.setState({
      filter: filter === 'None' ? this.state.bugs : this.state.bugs.filter(bug => bug.threatLevel === filter),
    });
  }

  handleChange(e) {
    if (e.target.name === 'reporter') {
      this.setState(prevState => ({
        bugReport: {
          ...prevState.bugReport,
          reporter: e.target.value
        },
      }));
    } else if (e.target.name === 'assignedTo') {
      this.setState(prevState => ({
        bugReport: {
          ...prevState.bugReport,
          assignedTo: e.target.value
        },
      }));
    } else if (e.target.name === 'threatLevel') {
      this.setState(prevState => ({
        bugReport: {
          ...prevState.bugReport,
          threatLevel: e.target.value
        },
      }));
    } else if (e.target.name === 'description') {
      this.setState(prevState => ({
        bugReport: {
          ...prevState.bugReport,
          description: e.target.value
        },
      }));
    }
  }

  render() {
    return (
      <table>
        <Nav
          filterHandler={this.filterHandler}
        />
        {this.state.filter.map((bug) => (
          <BugTile
            bugName={bug.bugName}
            bugDescription={bug.bugDescription}
            reportedBy={bug.reportedBy}
            createdDate={bug.createdDate}
            assignedTo={bug.assignedTo}
            threatLevel={bug.threatLevel}
            key={bug.bugName}
          />
        ))}
      </table>
      <BugReport handleChange={this.handleChange} />
    );
  }
}

export default App;
