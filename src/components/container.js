import 'leaflet/dist/leaflet.css';
import './index.css';

const container = (props) => {
  return (
    <div>   
      <div>{props.children}</div>
    </div> 
  )
};
export default container;