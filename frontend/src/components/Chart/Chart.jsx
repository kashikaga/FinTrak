import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js'
import axios from 'axios'
import './Chart.scss'

// Register Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend)

const Chart = ({ title, height }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Total Transactions',
        data: [],
        borderColor: '#8884d8',
        backgroundColor: 'rgba(136, 132, 216, 0.5)',
        fill: true,
      },
    ],
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/transactions', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, // Include auth if required
        })
        const transactions = response.data

        // Process transactions into monthly totals
        const monthlyTotals = {}
        transactions.forEach(({ amount, date }) => {
          const month = new Date(date).toLocaleString('en-US', { month: 'short' })
          monthlyTotals[month] = (monthlyTotals[month] || 0) + amount
        })

        const labels = Object.keys(monthlyTotals).sort()
        const data = labels.map(month => monthlyTotals[month])

        setChartData({
          labels,
          datasets: [
            {
              label: 'Total Transactions',
              data,
              borderColor: '#8884d8',
              backgroundColor: 'rgba(136, 132, 216, 0.5)',
              fill: true,
            },
          ],
        })
      } catch (error) {
        console.error('Error fetching transactions:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className='chart'>
      <div className='title'>{title}</div>
      <div style={{ height }}>
        <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
    </div>
  )
}

export default Chart
