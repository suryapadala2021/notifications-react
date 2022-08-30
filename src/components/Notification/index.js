import './index.css'
import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props
  return (
    <div className="noti">
      {children[0]}
      <div className="text-box">
        {children[1]}
        {children[2]}
      </div>
      <GrFormClose className="cross-mark" />
    </div>
  )
}
export default Notification
