import { useGlobalState } from "../../state/GlobalState";

const Home = () => {
  const { itemList } = useGlobalState();
  return (
    <>
      <div className="container mt-5">
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">no</th>
              <th scope="col">nama</th>
              <th scope="col">kota</th>
              <th scope="col">lulusan</th>
            </tr>
          </thead>
          <tbody>
            {itemList.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.kota}</td>
                <td>{item.lulusan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
