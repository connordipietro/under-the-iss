import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react'
import {fetchPeople} from '../actions/index'
import Modal from "react-bootstrap/Modal";

const PopupModalForParts = (props) => {
  return (
    <>
      <Modal {...props} 
      size="lg" 
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation	
     >
        <Modal.Header closeButton className="modal-header" >
          <Modal.Title style={{color: 'white'}}>ISS Parts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="img-hover-zoom">
         <img  className="img-fluid img" alt="g1" src="iss_config_exploded_view_page_0.jpg"  width="1180" height="688" />
         </div>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const PopupModalForSizeInfo = (props) => {
  return (
     <>
       <Modal {...props} 
       size="md" 
       centered
       animation	
      >
         <Modal.Header closeButton>
           <Modal.Title style={{color: 'white'}}>Size of ISS</Modal.Title>
         </Modal.Header>
         <Modal.Body>
         <p>At about 357.6 feet (or 109 meters) long, the International Space Station gives astronauts plenty of room to stretch out. Made up of hundreds of major and minor components, the ISS is the largest manned object ever put into space. The ISS has a pressurized volume of 32,333 cubic feet, the same as a Boeing 747.6</p>
         </Modal.Body>
         <Modal.Footer>
         </Modal.Footer>
       </Modal>
     </>
   );
}

const PopupModalForSpeedInfo = (props) => {
   return (
      <>
        <Modal {...props} 
        size="md" 
        centered
        animation	
       >
          <Modal.Header closeButton>
            <Modal.Title style={{color: 'white'}}>Speed of ISS</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <p>The International Space Station travels in orbit around Earth at a speed of roughly 17,150 miles per hour (that's about 5 miles per second!). This means that the Space Station orbits Earth (and sees a sunrise) once every 92 minutes! </p>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </>
    );
}

const PopupModalForPeopleInSpace = (props) => {
  const people = useSelector(state => state.iconpopup)
  let x = 0
    return (
      <>
        <Modal {...props} 
        size="sm" 
        centered
        animation	
       >
          <Modal.Header closeButton>
            <Modal.Title style={{color: 'white'}}>People In Space</Modal.Title>
          </Modal.Header>
          <Modal.Body>{people.peopleInfo.map((i) => {
            return(
              <p className="lead" key={x++}>{i.name}</p>
            )
          })}</Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </>
    );
}

const IconPopup =() => {
  const people = useSelector(state => state.iconpopup)
  const dispatch = useDispatch();
  const [peopleShow, setPeopleShow] = useState(false);
  const [speedShow, setSpeedShow] = useState(false);
  const [sizeShow, setSizeShow] = useState(false);
  const [partsShow, setPartsShow] = useState(false)


  useEffect(()=>{
    console.log(people);
    dispatch(fetchPeople())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[fetchPeople])


  return(
    <>
    <div role="button" onClick={() => setPeopleShow(true)}> <span className="icon-link">People in Space: </span><span className="text-danger">{people.numOfPeople}</span></div>
    <hr></hr>
    <p role="button"  onClick ={() => setSpeedShow(true)}> <span className="icon-link"> ISS Speed: </span><span className="text-danger" >4.76 miles/s</span></p>
    <hr></hr>
    <p role="button" onClick ={() => setSizeShow(true)}><span className="icon-link">ISS Size:</span>  <span className="text-danger" >357.6ft/109m</span></p>
    <hr></hr>
    <p role="button" onClick={() => setPartsShow(true)}><span className="icon-link">ISS Parts</span></p>

    <PopupModalForPeopleInSpace show={peopleShow} onHide={() => setPeopleShow(false)}/>
    <PopupModalForSpeedInfo show={speedShow} onHide={() => setSpeedShow(false)}/>
    <PopupModalForSizeInfo show={sizeShow} onHide={() => setSizeShow(false)}/>
    <PopupModalForParts show={partsShow} onHide={() => setPartsShow(false)}/>
    </>
  )
}

export default IconPopup