import { useDispatch } from 'react-redux';
import { changeLayer } from '../actions';


const LayerButtons = () => {
  const dispatch = useDispatch();
 
  const cloud = 'clouds_new'
  const rain = 'precipitation_new'
  const wind = 'wind_new'
  const pressure = 'pressure_new'
  const temp = 'temp_new'

  const handleLayerClick = (layerName) => {
      dispatch(changeLayer(layerName))
  }

  return (
    <div className="align-bottom mt-4 mb-3">
        <h4><u>Map Overlay</u></h4>
        <button type="button" className="btn btn-outline-secondary m-1 mt-3" onClick={() => handleLayerClick(cloud)}>Clouds</button>
        <button type="button" className="btn btn-outline-secondary m-1 mt-3" onClick={() => handleLayerClick(rain)}>Precipitation</button>
        <button type="button" className="btn btn-outline-secondary m-1 mt-3" onClick={() => handleLayerClick(wind)}>Wind</button>
        <button type="button" className="btn btn-outline-secondary m-1 mt-3" onClick={() => handleLayerClick(pressure)}>Pressure</button>
        <button type="button" className="btn btn-outline-secondary m-1 mt-3" onClick={() => handleLayerClick(temp)}>Temperature</button>
        <button type="button" className="btn  btn-outline-secondary m-1 mt-3" onClick={() => handleLayerClick(null)}>No Overlay</button>
      </div>
  )
}

export default LayerButtons
