const initialState: Array<Object> = [];

const coursesReducer: any = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
    case "LOADCOURSES":
      return [...state, action.loadedCourse];
    case "CLEARCOURSES":
      return [];
  }
};

export default coursesReducer;
