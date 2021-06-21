import {
    INFO_REQUEST,
    INFO_SUCCESS,
    INFO_FAIL
} from './Constants'


export const InfoReducer = (state = {}, action) => {
    switch (action.type) {
      case INFO_REQUEST:
        return {
          loading: true,
        };
      case INFO_SUCCESS:
        return {
          loading: false,
          Info: action.payload,
        };
      case INFO_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };