import { useState, useRef } from "react"

import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  ArrowUpIcon,
  BoltIcon,
  ArrowTrendingUpIcon,
  ForwardIcon
} from "@heroicons/react/24/solid"

import { parseGPX } from "@/utils/gpxParser"
import SummaryCard from "@/components/SummaryCard"
import UploadButton from "@/components/UploadButton"
import AreaChartCard from "@/components/AreaChartCard"
import ScreenshotButton from "@/components/ScreenshotButton"
import IntroductionMessage from "@/components/IntroductionMessage"

const Index = () => {
  const summaryRef = useRef()

  const [fileData, setFileData] = useState(null)

  const handleFileChange = async (event) => {
    const file = event.target.files[0]
    const parsedData = await parseGPX(file)
    console.log(parsedData)
    setFileData(parsedData)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="p-4 flex flex-col space-y-4">
        {fileData === null && <IntroductionMessage />}
        <div className="flex space-x-4 ">
          <UploadButton
            onFileChange={handleFileChange}
            fileName={fileData && fileData.fileName}
          />
          {fileData && <ScreenshotButton targetRef={summaryRef} />}
        </div>
        {fileData && (
          <>
            <div ref={summaryRef} className="flex flex-col space-y-4">
              <h2 className="text-4xl font-bold text-blue-800 bg-gradient-to-r from-blue-200 to-blue-500 inline-block p-2 rounded-lg">
                Ride: {fileData.title}
              </h2>
              <div className="metrics-section grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <SummaryCard
                  title="Date"
                  value={fileData.date}
                  bgColor="bg-blue-100"
                  textColor="text-blue-900"
                  Icon={CalendarIcon}
                />
                <SummaryCard
                  title="Distance"
                  value={`${fileData.distance.toFixed(2)} km`}
                  bgColor="bg-green-100"
                  textColor="text-green-900"
                  Icon={MapPinIcon}
                />
                <SummaryCard
                  title="Duration"
                  value={`${fileData.duration.toFixed(2)} min`}
                  bgColor="bg-yellow-100"
                  textColor="text-yellow-900"
                  Icon={ClockIcon}
                />
                <SummaryCard
                  title="Average Speed"
                  value={`${fileData.averageSpeed.toFixed(2)} km/h`}
                  bgColor="bg-purple-100"
                  textColor="text-purple-900"
                  Icon={ForwardIcon}
                />
                <SummaryCard
                  title="Positive Elevation"
                  value={`+${fileData.posElevation.toFixed(1)}m`}
                  bgColor="bg-orange-100"
                  textColor="text-orange-900"
                  Icon={ArrowTrendingUpIcon}
                />
                <SummaryCard
                  title="Min & Max Elevation"
                  value={`${fileData.minElevation.toFixed(
                    1
                  )}m / ${fileData.maxElevation.toFixed(1)}m`}
                  bgColor="bg-red-100"
                  textColor="text-red-900"
                  Icon={ArrowTrendingUpIcon}
                />
              </div>
              <div className="charts-section grid grid-cols-1 gap-4">
                <AreaChartCard
                  Icon={ForwardIcon}
                  data={fileData.speedData}
                  dataKey="speed"
                  stroke="#dc6e00"
                  fill="#dc6e00"
                  yAxisLabel="Speed (km/h)"
                />
                <AreaChartCard
                  Icon={ArrowUpIcon}
                  data={fileData.elevationData}
                  dataKey="elevation"
                  stroke="#8884d8"
                  fill="#8884d8"
                  yAxisLabel="Elevation (m)"
                />
                <AreaChartCard
                  Icon={BoltIcon}
                  data={fileData.paceData}
                  dataKey="pace"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                  yAxisLabel="Pace (min/km)"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Index
