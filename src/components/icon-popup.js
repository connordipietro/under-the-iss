// import {useDispatch, useSelector} from 'react-redux';
// import {useEffect} from 'react';
// import { fetchNumOfPeople } from '../actions'


// const IconPopup = () => {
//   const data = useSelector(state => state.iconPopup);
//   const dispatch = useDispatch();
   
//   useEffect(() => {
//      dispatch(fetchNumOfPeople())
    
//      // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [fetchNumOfPeople])

//   const renderPopup = () => {
//     if(data.numOfPeople !== 0 ){
//         return (
//           <div>{data.numOfPeople}</div>
//         )
//     }
//     else {
//       return (
//         <div></div>
//       )
//     }
//   }

  
   
//   return (
//     <div>{renderPopup()}</div>
   
//   )
// }

// export default IconPopup