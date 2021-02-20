//REDUCERS
//import actions (TYPES)
import { CREATE_ORDER, DELETE_ORDER} from '../actions/types'


//create reducers
const initialState = { isLoading: false, data: [] };

export const orders = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_ORDER: {
      const { order } = payload;

      return {
        ...state,
        data: state.data.concat(order),
      };
    }
    case DELETE_ORDER: {
      const { id } = payload;
      return {
        ...state,
        data: state.data.filter((order) => order.id ),
      };
    }
    default:
      return state;
  }
};