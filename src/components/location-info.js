import { fetchLocationInfo } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'

const LocationInfo = () => {
  const location = useSelector(state => state.location);
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();
  
  useEffect(() => {
      dispatch(fetchLocationInfo(data.coords.lat, data.coords.lang))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchLocationInfo]);
  
  return <div><h2>The ISS Is Currently Above: {location.result}</h2></div>
}

export default LocationInfo;
