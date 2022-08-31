import React from 'react';
import ReactECharts from 'echarts-for-react';
import { EChartsOption } from 'echarts-for-react/lib/types';

interface ChartComponent {
  chartData: EChartsOption;
}

const Charts: React.FC<ChartComponent> = ({ chartData }) => {
  return <ReactECharts option={chartData} />;
};

export default Charts;
