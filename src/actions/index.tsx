import { ActionCreatorsMapObject } from 'redux';
import { AppEvents } from "../events";

export interface IActionWithPayload<T extends string, P> {
  type: T;
  payload: P;
}
export function createAction<T extends string, P>(type: T, payload: P): IActionWithPayload<T, P> {
  return { type, payload };
}

export const SetName = (name: string) => createAction(AppEvents.SET_NAME, name);
export const SetAge = (age: number) => createAction(AppEvents.SET_AGE, age);

export const Actions = {
  SetAge,
  SetName,
}

export type IActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<
  A[keyof A]
>;

export type IAction = IActionsUnion<typeof Actions>;