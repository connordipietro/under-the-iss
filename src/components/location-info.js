import { fetchLocationInfo } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'

const LocationInfo = () => {
  const location = useSelector(state => state.location);
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();
  
  useEffect(() => {
      dispatch(fetchLocationInfo(data.coords.lat, data.coords.lon))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchLocationInfo]);

  const renderLocationName = () => {
    if (location.result == null || undefined) {
      return (
          <h3><u>Location</u></h3>
      )
    } else {
      return (
        <div>
          <h3>The ISS Is Currently Above</h3>
            <div className="row">
              <div className="col">
                <p className="lead">{location.result}</p>
              </div>
            </div>
        </div>
      )
    }
  }
  
  return (
    <div>{renderLocationName()}</div>
    )
}

export default LocationInfo;
