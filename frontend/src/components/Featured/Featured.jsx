import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
  MoreVertRounded,
} from '@mui/icons-material'
import './Featured.scss'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Featured = () => {
  return (
    <div className='featured'>
      <div className='top'>
        <h1 className='title'>Total Revenue</h1>
        <MoreVertRounded fontSize='small' />
      </div>
      <div className='bottom'>
        <div className='featuredChart'>
          <CircularProgressbar value={70} text={'70%'} strokeWidth={4} />
        </div>
        <p className='title'>Total sales made today</p>
        <p className='amount'>Rs.420</p>
        <p className='desc'>
        Sales performance has reached 70% of the daily target, reflecting steady growth in revenue.
        </p>
        <div className='summary'>
          <div className='item'>
            <div className='itemTitle'>Target</div>
            <div className='itemResult positive'>
              <KeyboardArrowUpRounded fontSize='small' />
              <div className='resultAmount'>Rs. 12,400</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Last Week</div>
            <div className='itemResult negative'>
              <KeyboardArrowDownRounded fontSize='small' />
              <div className='resultAmount'>Rs. 11,400</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Last Month</div>
            <div className='itemResult negative'>
              <KeyboardArrowDownRounded fontSize='small' />
              <div className='resultAmount'>Rs. 10,400</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
