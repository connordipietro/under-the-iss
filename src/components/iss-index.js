import { fetchISSCoords } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

const ISSIndex = () => {
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log('click')
    dispatch(fetchISSCoords())
  }

  function renderCoords () {
    if (!_.isEmpty(posts.coords)) {
      console.log(posts.coords[0]);
      return <div>
        <h1>ISS Coords</h1>
        <h1>Lat: {posts.coords[0].iss_position.latitude}</h1>
        <h1>Lang: {posts.coords[0].iss_position.longitude}</h1>
        <h1>TimeStamp: {posts.coords[0].timestamp}</h1>
        </div>

    }
  }
  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={() => handleClick()}>Locate</button>
      <div>{renderCoords()}</div>
    </div>
  )
}

export default ISSIndex;