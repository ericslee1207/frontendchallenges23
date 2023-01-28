const initialState: Array<Object> = [];

const coursesCartReducer: any = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
    case "ADDTOCART":
      return [...state, action.newCourse];
    case "REMOVEFROMCART":
      return state.filter((s: any) => s.number != action.number);
    case "CLEARCART":
      return [];
  }
};

export default coursesCartReducer;
