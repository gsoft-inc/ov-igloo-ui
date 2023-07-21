import React from 'react';
import VerticalBarChart from '@igloo-ui/vertical-bar-chart';
import tokens from '@igloo-ui/tokens/dist/base10/tokens.json';

const Example = () => {
  const getColorFromScore = (score) => {
    if (score >= 0 && score < 2) return tokens.coral400;
    if (score >= 2 && score < 4) return tokens.coral200;
    if (score >= 4 && score < 6) return tokens.creamsicle100;
    if (score >= 6 && score < 9) return tokens.seaweed200;
    return tokens.seaweed400;
  };
  
  const values = [12, 20, 35, 18, 3, 42, 60, 0, 16, 43, 15];
  const chartData = values.map((value, index) => {
    return {
      score: index,
      value,
      color: getColorFromScore(index), // This can be done with classes and css if preferred
    };
  });

  return (
    <div className="example example--max-with">
      <VerticalBarChart data={chartData} />
    </div>
  );
};

export default Example;
