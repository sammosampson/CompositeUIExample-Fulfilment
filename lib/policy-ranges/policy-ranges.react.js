import React from 'react';
import Panel from 'react-components/panel.react';
import PolicyRangesStore from './policy-ranges-store';
import PolicyRangesActions from './policy-ranges-actions';
import TextInput from 'react-components/text-input.react';

export default class PolicyRanges extends React.Component {
  constructor(props) {
    super(props);
    this.state = { range: PolicyRangesStore.range };
    this.changeCallback = this._onChange.bind(this);
    PolicyRangesStore.addChangeListener(this.changeCallback);
    PolicyRangesActions.fetch(229);
  }

  componentWillUnmount() {
    PolicyRangesStore.removeChangeListener(this.changeCallback);
  }

  _onChange() {
    this.setState({ range: PolicyRangesStore.range })
  }

  render() {
    return (
      <Panel title="Policy number range">
        <TextInput title="Low" value={this.state.range.PolicyNumberLow}></TextInput>
        <TextInput title="High" value={this.state.range.PolicyNumberHigh}></TextInput>
      </Panel>
    );
  }
}
