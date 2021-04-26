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
      return <div></div>
    } else {
      return <div><h5>The ISS Is Currently Above: {location.result}</h5></div>
    }
  }
  
  return (
    <div>{renderLocationName()}</div>
    )
}

export default LocationInfo;
