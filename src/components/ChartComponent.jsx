import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

const LineChartComponent = ({ title, data, dataKey, color }) => {
  return (
    <div className="bg-white/5 backdrop-blur rounded-xl border border-white/10 p-4 h-full flex flex-col items-center justify-center">
      <h3 className="text-white text-sm font-semibold mb-2">{title}</h3>
      <div className="w-full h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" vertical={false} />
            <XAxis 
              dataKey="year" 
              stroke="#ccc" 
              fontSize={10} 
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#ccc" 
              fontSize={10} 
              tickLine={false}
              axisLine={false}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '10px' }}
              itemStyle={{ color: '#fff' }}
              labelStyle={{ color: '#aaa', marginBottom: '4px' }}
            />
            <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: '10px', color: '#ccc' }} />
            <Line 
              type="monotone" 
              dataKey={dataKey} 
              stroke={color || "#0088FE"} 
              strokeWidth={2}
              dot={{ r: 4, fill: color || "#0088FE", strokeWidth: 2 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChartComponent;
