import React, { useState } from 'react'
import Modal from '../Modal' // Adjust the path as needed
import { reports } from './Model'

interface AnnualReportModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

const AnnualReportModal: React.FC<AnnualReportModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const [selectedYear, setSelectedYear] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const handleDownload = () => {
    const report = reports.find((report) => report.year === selectedYear)
    if (report) {
      // Trigger the download
      const link = document.createElement('a')
      link.href = report.file
      link.download = `${report.year}-annual-report.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      setMessage('')
      // Clear the selected year after download
      setSelectedYear('')
    } else {
      setMessage('No report available for the selected year.')
    }
  }

  const handleView = () => {
    const report = reports.find((report) => report.year === selectedYear)
    if (report) {
      // Open the report in a new tab
      window.open(report.file, '_blank')
      setMessage('')
    } else {
      setMessage('No report available for the selected year.')
    }
  }

  return (
    <Modal showModal={isOpen} handleClose={onRequestClose}>
      <h2 className="mb-4 text-2xl font-bold">
        Select Year to Download or View Report
      </h2>
      <select
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
        className="mb-4 w-full rounded border p-2"
      >
        <option value="" disabled>
          Select Year
        </option>
        {reports.map((report, index) => (
          <option key={index} value={report.year}>
            {report.year}
          </option>
        ))}
      </select>
      <div className="flex justify-between">
        <button
          onClick={handleDownload}
          disabled={!selectedYear}
          className={`rounded-lg px-4 py-2 text-white ${selectedYear ? 'bg-blue-500 hover:bg-blue-600' : 'cursor-not-allowed bg-gray-400'}`}
        >
          Download Report
        </button>
        <button
          onClick={handleView}
          disabled={!selectedYear}
          className={`rounded-lg px-4 py-2 text-white ${selectedYear ? 'bg-green-500 hover:bg-green-600' : 'cursor-not-allowed bg-gray-400'}`}
        >
          View Report
        </button>
      </div>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </Modal>
  )
}

export default AnnualReportModal
