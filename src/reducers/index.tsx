import { AppEvents } from "../events";
import { IAction } from "../actions";

export interface IUserState {
  name: string;
  age: number;
}

const initialState: IUserState = {
  name: '',
  age: 0,
};

const reducer = (state = initialState, action: IAction): IUserState => {
  switch (action.type) {
    case AppEvents.SET_NAME: {
      return {
        ...state,
        name: action.payload,
      }
    }
    case AppEvents.SET_AGE: {
      return {
        ...state,
        age: action.payload,
      };
    }
    default:
      return state;
  }
}

export { reducer };