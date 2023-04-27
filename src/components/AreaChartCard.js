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
  const startDate = data[0].time.getTime()
  data = data.map((item) => ({
    ...item,
    time: toHoursAndMinutes((item.time.getTime() - startDate) / 1000)
  }))

  return (
    <div className="p-4 rounded-lg shadow-md bg-gray-100 text-gray-900">
      <div className="flex items-center mb-2">
        <Icon className="icon h-6 w-6 mr-2" />
        <h3>{yAxisLabel}</h3>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart
          syncId="anyId"
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

function toHoursAndMinutes(totalSeconds) {
  const seconds = totalSeconds % 60
  const minutes = Math.floor(totalSeconds / 60)

  const seconds_str = seconds < 10 ? `0${seconds}` : seconds
  const minutes_str = minutes < 10 ? `0${minutes}` : minutes

  return `${minutes_str}:${seconds_str}`
}

export default AreaChartCard
