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
    <div className="align-bottom mt-4">
      <h3><u>Map Overlay</u></h3>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary btn-secondary" onClick={() => handleLayerClick(cloud)}>Clouds</button>
        <button type="button" className="btn btn-primary btn-secondary" onClick={() => handleLayerClick(rain)}>Precipitation</button>
        <button type="button" className="btn btn-primary btn-secondary" onClick={() => handleLayerClick(wind)}>Wind</button>
        <button type="button" className="btn btn-primary btn-secondary" onClick={() => handleLayerClick(pressure)}>Pressure</button>
        <button type="button" className="btn btn-primary btn-secondary" onClick={() => handleLayerClick(temp)}>Temperature</button>
        <button type="button" className="btn btn-primary btn-secondary" onClick={() => handleLayerClick(null)}>No Overlay</button>
        </div>
      </div>






  )
}

export default LayerButtons
