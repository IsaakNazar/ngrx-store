//action constants
export const ADD_TODO = '[todo] Add Todo';
export const REMOVE_TODO = '[todo] Remove Todo';

//action creators
export class AddTodo {
  readonly type = ADD_TODO;
  constructor(private payload: any) {}
}

export class RemoveTodo {
  readonly type = REMOVE_TODO;
  constructor(private payload: any) {}
}
