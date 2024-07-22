import React, { useState } from 'react'
import Modal from '../Modal' // Adjust the path as needed

const reports = [
  {
    year: '2023',
    file: 'path-to-report-2023.pdf',
  },
  {
    year: '2022',
    file: 'path-to-report-2022.pdf',
  },
  {
    year: '2021',
    file: 'path-to-report-2021.pdf',
  },
]

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
      // Create a temporary anchor element to trigger the download
      const link = document.createElement('a')
      link.href = report.file
      link.download = `${report.year}-annual-report.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      setMessage('')
    } else {
      setMessage('No report available for the selected year.')
    }
  }

  return (
    <Modal showModal={isOpen} handleClose={onRequestClose}>
      <h2 className="mb-4 text-2xl font-bold">
        Select Year to Download Report
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
      <button
        onClick={handleDownload}
        disabled={!selectedYear}
        className={`rounded-lg px-4 py-2 text-white ${selectedYear ? 'bg-blue-500 hover:bg-blue-600' : 'cursor-not-allowed bg-gray-400'}`}
      >
        Download Report
      </button>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </Modal>
  )
}

export default AnnualReportModal
