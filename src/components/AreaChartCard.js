import {
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  ResponsiveContainer
} from "recharts"

const AreaChartCard = ({
  data,
  className,
  dataKey,
  stroke,
  fill,
  yAxisLabel,
  Icon
}) => {
  return (
    <div className="p-4 rounded-lg shadow-md bg-gray-100 text-gray-900">
      <div className="flex items-center mb-2">
        <Icon className="icon h-6 w-6 mr-2" />
        <h3>{yAxisLabel}</h3>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart
          className={`${className}`}
          width={500}
          height={250}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <XAxis dataKey="time" />
          <YAxis
            label={{ value: yAxisLabel, angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Area type="monotone" dataKey={dataKey} stroke={stroke} fill={fill} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AreaChartCard
