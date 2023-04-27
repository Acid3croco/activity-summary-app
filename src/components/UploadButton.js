// components/UploadButton.js
import { useRef } from "react"

const UploadButton = ({ onFileChange, fileName }) => {
  const fileInputRef = useRef(null)

  const handleUploadClick = () => {
    fileInputRef.current.click()
  }

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={handleUploadClick}
      >
        {fileName ? "Upload another GPX file" : "Upload a GPX file"}
      </button>
      <input
        className="hidden"
        ref={fileInputRef}
        type="file"
        onChange={onFileChange}
      />
    </div>
  )
}

export default UploadButton
