import './index.css'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification/index'

const AlertNotifications = () => (
  <div className="noti-container">
    <h1 className="noti-heading">Alert Notifications</h1>
    <Notification>
      <AiFillCheckCircle className="success-icon" />
      <h1 className="heading-success">Success </h1>
      <p className="para-success">You can access all the files in the folder</p>
    </Notification>
    <Notification>
      <RiErrorWarningFill className="failure-icon" />
      <h1 className="heading-failure">Error</h1>
      <p className="para-success">
        Sorry, you are not authorized to have access to delete the file
      </p>
    </Notification>
    <Notification>
      <MdWarning className="warning-icon" />
      <h1 className="heading-warning">Warning</h1>
      <p className="para-success">
        Viewers of this file can see comments and suggestions
      </p>
    </Notification>
    <Notification>
      <MdInfo className="info-icon" />
      <h1 className="heading-info">Info</h1>
      <p className="para-success">
        Anyone on the internet can view these files
      </p>
    </Notification>
  </div>
)
export default AlertNotifications
