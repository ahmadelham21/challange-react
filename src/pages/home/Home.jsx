import { useGlobalState } from "../../state/GlobalState";
import '../../index.css'

const Home = () => {
  const { itemList } = useGlobalState();
  return (
    <>
      <div className="container mt-5">
        <div className="card p-5 bg-light shadow-sm">
          <h2 className="text-center mb-4">Daftar Lamaran Kerja</h2>
          <table className="table table-hover table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Nama</th>
                <th scope="col">Kota</th>
                <th scope="col">Lulusan</th>
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
      </div>
    </>
  );
};

export default Home;
