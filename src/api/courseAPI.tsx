export const getCourses = async (semester: String) => {
  try {
    return fetch(`/api/base/${semester}/courses/`).then((res) => {
      return res.json();
    });
  } catch {
    console.log("Error internal: getCourses API");
  }
};

export const getCourseDetails = async (semester: String, fullCode: String) => {
  try {
    return fetch(`/api/base/${semester}/courses/${fullCode}/`).then((res) => {
      return res.json();
    });
  } catch {
    console.log("Error internal: getCourseDetails API");
  }
};
