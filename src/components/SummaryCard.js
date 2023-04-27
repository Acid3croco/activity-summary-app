import React from "react"

const SummaryCard = ({ title, value, bgColor, textColor, Icon }) => {
  return (
    <div className={`card ${bgColor} ${textColor}`}>
      <div className="flex items-center">
        <Icon className="icon h-10 w-10 mr-2" />
        <div className="title">{title}</div>
      </div>
      <div className="value">{value}</div>
    </div>
  )
}

export default SummaryCard
