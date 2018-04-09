import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, ImageBackground } from 'react-native';
import { goalFetch } from '../actions';
import ListItems from './ListItems';

class MyGoals extends Component {
  componentWillMount() {
    this.props.goalFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ goals }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(goals);
  }

renderRow(goal) {
  return <ListItems goal={goal} />;
}
  render() {
    console.log(this.props);
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const goals = _.map(state.goals, (val, uid) => {
    return { ...val, uid };
  });
  return { goals };
};

export default connect(mapStateToProps, { goalFetch })(MyGoals);
