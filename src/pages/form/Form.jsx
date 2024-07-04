import { useState } from "react";
import { useGlobalDispatch } from "../../state/GlobalState";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const [item, setItem] = useState({
    name: "",
    kota: "",
    lulusan: "",
  });
  const dispatch = useGlobalDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.name && item.kota && item.lulusan) {
      dispatch({ type: "ADD_ITEM", payload: item });
      toast.success("Data berhasil ditambahkan di daftar formulir!");
      setItem({
        name: "",
        kota: "",
        lulusan: "",
      }); // Reset input setelah menambahkan item
    } else {
      if (!item.name && !item.kota && !item.lulusan) {
        toast.error("Nama, kota, dan lulusan tidak boleh kosong!");
      } else if (!item.name && !item.kota) {
        toast.error("Nama dan kota tidak boleh kosong!");
      } else if (!item.name && !item.lulusan) {
        toast.error("Nama dan lulusan tidak boleh kosong!");
      } else if (!item.kota && !item.lulusan) {
        toast.error("Kota dan lulusan tidak boleh kosong!");
      } else if (!item.name) {
        toast.error("Nama tidak boleh kosong!");
      } else if (!item.kota) {
        toast.error("Kota tidak boleh kosong!");
      } else if (!item.lulusan) {
        toast.error("Lulusan tidak boleh kosong!");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  return (
    <div className="container mt-5">
      <ToastContainer />
      <div className="card p-5 bg-secondary">
        <h1 className="text-light mt-2 mb-5">Form Lamaran Kerja</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-light">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="masukkan nama"
              value={item.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="kota" className="form-label text-light">
              Kota
            </label>
            <input
              type="text"
              className="form-control"
              id="kota"
              name="kota"
              placeholder="masukkan kota"
              value={item.kota}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lulusan" className="form-label text-light">
              Lulusan
            </label>
            <input
              type="text"
              className="form-control"
              id="lulusan"
              name="lulusan"
              placeholder="anda lulusan mana"
              value={item.lulusan}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
