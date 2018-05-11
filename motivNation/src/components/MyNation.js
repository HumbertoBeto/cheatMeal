import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { postFetch, goalFetch } from '../actions';
import PostItems from './PostItems';


class MyNation extends Component {

  componentWillMount() {
    this.props.goalFetch();
    this.props.postFetch();
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
    //const user = GoogleSignin.currentUser();
    return <PostItems goal={goal} />;
  }

  render() {
    //const user = GoogleSignin.currentUser();
    console.log(this.props);
    return (
      <ListView
        style={{ marginBottom: -2 }}
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

export default connect(mapStateToProps, { postFetch, goalFetch })(MyNation);
