/* import { fetchApod } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'

const ApodView = () => {
  const apodData = useSelector(state => state.apod);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchApod())
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [fetchApod]);

const renderApodView = () => {
  if (apodData.url === false) {
    return <div></div>
  } else {
    return (
      <div className="text-center mt-3">
        <figure className="figure" >
          <img className="figure-img img-fluid rounded"  height="400px" width="800px" alt="nasa APOS" src={apodData.url} ></img>
            <figcaption>NASA Astronomy Photo of The Day</figcaption>
        </figure>
      </div>
    )
  } 
}

return (
  <div>{renderApodView()}</div>
  )
}

export default ApodView;
 */