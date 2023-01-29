export const loadCourse = (course: Object) => {
  return {
    type: "LOADCOURSES",
    loadedCourse: course,
  };
};

export const addCourseToCart = (course: any) => {
  return {
    type: "ADDTOCART",
    newCourse: course,
  };
};

export const removeCourseFromCart = (course: any) => {
  return {
    type: "REMOVEFROMCART",
    number: course.number,
  };
};

export const clearCart = () => {
  return {
    type: "CLEARCART",
  };
};
