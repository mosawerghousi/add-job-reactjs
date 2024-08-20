import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <div>
      <ClipLoader
        size={40}
        color="#4338ca"
        loading={loading}
        cssOverride={override}
      />
    </div>
  );
};

export default Spinner;
