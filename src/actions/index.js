import { CREATE_ORDER, DELETE_ORDER} from './types.js'

export const createOrder = (formData) => {
    return {
        type: CREATE_ORDER,
        payload: formData,
    }
};

export const deleteOrder = (id) => {
    return {
        type: DELETE_ORDER,
        payload: id,
    }
}