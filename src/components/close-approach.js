import { fetchCloseApproach } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import _ from 'lodash'

const CloseApproach = () => {
  const data = useSelector(state => state.closeApproach);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchCloseApproach())
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [fetchCloseApproach]);

const renderCloseApproach = () => {
  if (!_.isEmpty(data.result))
  return (
   
<div className="container">
      <div className="row">
        <div className="col">
          <ul className="list-group list-group-flush text-left">
            <li className="list-group-item">Designation: {data.result.des}</li>
            <li className="list-group-item">Orbit ID: {data.result.orbit_id}</li>
            <li className="list-group-item">Time of Close Approach: {data.result.jd}</li>
            <li className="list-group-item">Formatted Time: {data.result.cd}</li>
            <li className="list-group-item">Nominal Approach Distance: {data.result.dist}</li>
            <li className="list-group-item">Minimum Approach Distance: {data.result.dist_min}</li>
          </ul>
        </div>
        <div className="col">
          <ul className="list-group list-group-flush text-left">
            <li className="list-group-item">Min. Approach Distance: {data.result.dist_max}</li>
            <li className="list-group-item">Vel. Relative to Earth: {data.result.v_rel}</li>
            <li className="list-group-item">Vel. Relative to Massless Body: {data.result.v_inf}</li>
            <li className="list-group-item">Approach Uncertainty: {data.result.t_sigma_f}</li>
            <li className="list-group-item">Diameter: {data.result.h}</li>
        
          </ul>
        </div>
      </div>
    </div>





  )
}

return (
  <div>{renderCloseApproach()}</div>
)
}

export default CloseApproach









