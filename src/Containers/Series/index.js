import React, { Component } from 'react';
import SeriesList from '../../components/SericeList';
import Loder from '../../components/Loder';
import Intro from '../../components/Intro';
class Series extends Component {
  state = {
    series: [],
    seriesName: '',
    isFetching: false,
  };

  onSeriesInputchange = (e) => {
    this.setState({ seriesName: e.target.value, isFetching: true });
    fetch('http://api.tvmaze.com/search/shows?q=' + e.target.value)
      .then((response) => response.json())
      .then((json) => this.setState({ series: json, isFetching: false }));
  };
  render() {
    const { series, seriesName, isFetching } = this.state;
    return (
      <div>
        <Intro msg="Hello i am from gujrat"></Intro>
        <div>
          <input
            value={seriesName}
            type="text"
            onChange={this.onSeriesInputchange}
          ></input>
        </div>
        {!isFetching && series.length === 0 && seriesName.trim() === '' && (
          <p>Plese enter series name into input</p>
        )}
        {!isFetching && series.length === 0 && seriesName.trim() !== '' && (
          <p>No Tv serise found</p>
        )}
        {isFetching && <Loder></Loder>}
        {!isFetching && <SeriesList list={this.state.series}></SeriesList>}
      </div>
    );
  }
}
export default Series;
