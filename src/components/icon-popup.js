import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react'
import {fetchPeople} from '../actions/index'
import Modal from "react-bootstrap/Modal";

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
            <Modal.Title>People In Space</Modal.Title>
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
  const [modalShow, setModalShow] = useState(false);

  useEffect(()=>{
    console.log(people);
    dispatch(fetchPeople())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[fetchPeople])


  return(
    <>
    <div role="button" onClick={() => setModalShow(true)}> <span className="icon-link">People in Space: </span><span className="text-danger">{people.numOfPeople}</span></div>
    <hr></hr>
    <p>ISS Speed: <span className="text-danger" >4.76 miles/s</span></p>
    <PopupModalForPeopleInSpace show={modalShow} onHide={() => setModalShow(false)}/>
    </>
  )
}

export default IconPopup