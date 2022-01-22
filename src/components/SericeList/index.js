import React from 'react';
const SeriesListItem = ({ series }) => <li>{series.show.name}</li>;
const SeriesList = (props) => {
  return (
    <div>
      <ul>
        {props.list.map((series) => (
          <SeriesListItem series={series} key={series.show.id}></SeriesListItem>
        ))}
      </ul>
    </div>
  );
};
export default SeriesList;
