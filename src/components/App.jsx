import React from 'react';
import Nav from './Nav.jsx';
import BugTile from './BugTile.jsx';
import exampleData from '../example-data/exampleData';
import BugReport from './BugReport.jsx'

import '../styles/App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: exampleData,
      bugs: exampleData,
      bugReport: {
        reportedBy: '',
        assignedTo: '',
        threatLevel: 'Low-Priority',
        bugDescription: '',
      }
    };
    this.filterHandler = this.filterHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  filterHandler(filter) {
    this.setState({
      filter: filter === 'None' ? this.state.bugs : this.state.bugs.filter(bug => bug.threatLevel === filter),
    });
  }

  handleChange(e) {
    e.persist();
    if (e.target.name === 'reporter') {
      this.setState(prevState => ({
        bugReport: {
          ...prevState.bugReport,
          reportedBy: e.target.value
        },
      }), () => console.log(this.state.bugReport));
    } else if (e.target.name === 'assignedTo') {
      this.setState(prevState => ({
        bugReport: {
          ...prevState.bugReport,
          assignedTo: e.target.value
        },
      }), () => console.log(this.state.bugReport));
    } else if (e.target.name === 'threatLevel') {
      this.setState(prevState => ({
        bugReport: {
          ...prevState.bugReport,
          threatLevel: e.target.value
        },
      }), () => console.log(this.state.bugReport));
    } else if (e.target.name === 'description') {
      this.setState(prevState => ({
        bugReport: {
          ...prevState.bugReport,
          bugDescription: e.target.value
        },
      }), () => console.log(this.state.bugReport));
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submit');
    this.setState({
      bugs: [...this.state.bugs, {
        ...this.state.bugReport,
        id: this.state.bugs.length + 1,

      }],
    });
  }

  render() {
    return (
      <div>
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

        <BugReport handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </div>

    );
  }
}

export default App;
