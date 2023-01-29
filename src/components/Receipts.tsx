import { useSearchParams } from "react-router-dom";
const Receipts = () => {
  const [searchParams] = useSearchParams();
  const courses = searchParams.getAll("obj").map((c) => JSON.parse(c));

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        padding: "3%",
      }}
    >
      <div
        style={{
          boxShadow: "0.1px 0.1px 10px lightgrey",
          height: "550px",
          width: "30%",
          borderRadius: "25px",
          flexDirection: "column",
          display: "flex",
          flex: 1,
          overflowY: "auto",
        }}
      >
        <div
          style={{
            flex: 1 / 9,
            backgroundColor: "#BEE5DA",
            borderTopLeftRadius: "25px",
            borderTopRightRadius: "25px",
            display: "flex",
            alignItems: "center",
            minHeight: "60px",
          }}
        >
          <h4 style={{ margin: "0px", marginLeft: "20px" }}>Courses Receipt</h4>
        </div>
        <div style={{ flex: 8 / 9, padding: "20px" }}>
          <p>
            <h3 style={{ fontWeight: "bold" }}>Congratulations! </h3>
            {courses.length + " C.U. has been added to your schedule"}
          </p>
          <div>
            {courses.map((c) => (
              <div
                key={c.dept + "-" + c.number}
                style={{
                  flexDirection: "row",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p style={{ width: "70%", fontSize: "14px" }}>
                  {c.title + " " + "(" + c.dept + " " + c.number + ")"}
                </p>

                {/* <h3>{c.dept + " " + c.number}</h3> */}
                <p>(1 C.U.)</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receipts;
