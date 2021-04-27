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
        <h6> </h6>
      )
    } else {
      return (
        <h6>{location.result}</h6>
      )
    }
  }
  
  return (
    <div>{renderLocationName()}</div>
    )
}

export default LocationInfo;
