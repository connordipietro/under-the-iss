import {FETCH_PEOPLE_IN_SPACE} from '../actions';


 const DEFAULT_STATE = {
  numOfPeople: 0,
  peopleInfo: []
};


const IconPopupReducer = (state= DEFAULT_STATE, action) =>{
  switch(action.type){
    case FETCH_PEOPLE_IN_SPACE:
      return {
        peopleInfo: action.payload.data.people,
        numOfPeople: action.payload.data.number
    
      }
      default: 
      return state
  }
}

export default IconPopupReducer