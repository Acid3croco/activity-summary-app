// components/ScreenshotButton.js
import { useRef } from "react"
import html2canvas from "html2canvas"

const ScreenshotButton = ({ targetRef }) => {
  const linkRef = useRef(null)

  const handleScreenshot = async () => {
    const canvas = await html2canvas(targetRef.current)
    const dataUrl = canvas.toDataURL()
    linkRef.current.href = dataUrl
    linkRef.current.download = "activity-summary.png"
    linkRef.current.click()
  }

  return (
    <>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-md"
        onClick={handleScreenshot}
      >
        Download summary
      </button>
      <a className="hidden" ref={linkRef} />
    </>
  )
}

export default ScreenshotButton
