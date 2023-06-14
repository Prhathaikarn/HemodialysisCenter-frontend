import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Tel } from '../icons';

export default function Navbar() {
  const navigate = useNavigate();
  const { token, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="flex w-full justify-between py-2 px-20 shadow-lg bg-white sticky top-0">
      <div>
        <img src="/src/assets/goodgoodLogo.png" alt="logo" className="h-12" />
      </div>

      {token ? (
        <>
          <div className="flex gap-6 justify-center items-center text-xl text-blue-900 font-semibold">
            <div className="cursor-pointer">
              <Link to="/allpatient">Home</Link>
            </div>
            <div className="cursor-pointer" style={{ display: 'none' }}>
              <Link to="/login">Login</Link>
            </div>
            <div className="cursor-pointer" style={{ display: 'none' }}>
              <Link to="/register">Register</Link>
            </div>
            <div className="cursor-pointer">
              <label htmlFor="my_modal_7" className="cursor-pointer">
                Contact us
              </label>

              <input type="checkbox" id="my_modal_7" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box">
                  <h1 className="text-4xl font-bold text-blue-900 text-center mt-2">
                    CONTACT <span className="text-yellow-500"> US</span>
                  </h1>
                  <div className="p-8 font-normal">
                    Goodgood Hospital 999 South Sathorn Rd., Yannawa Sathorn
                    Bangkok 10120 Thailand.
                    <p className="mt-4">Fax. 0 9999 9998, 0 9999 8888</p>
                    <p>Tel. 0 9999 9999</p>
                    contact@goodgood.or.th
                  </div>
                  <div className="flex justify-center mb-2">
                    <button className="flex justify-center items-center gap-2 text-blue-900 text-xl font-bold px-4 py-2 rounded-lg shadow-lg bg-yellow-300 hover:bg-gray-300 w-44 h-10">
                      <Tel /> Tel.
                    </button>
                  </div>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">
                  Close
                </label>
              </div>
            </div>
            <div className="cursor-pointer" onClick={handleLogout}>
              Log out
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex gap-6 justify-center items-center text-xl text-blue-900 font-semibold">
            <div className="cursor-pointer">
              <Link to="/">Home</Link>
            </div>
            <div className="cursor-pointer">
              <Link to="/login">Login</Link>
            </div>
            <div className="cursor-pointer">
              <Link to="/register">Register</Link>
            </div>
            <div className="cursor-pointer">
              <label htmlFor="my_modal_7" className="cursor-pointer">
                Contact us
              </label>

              <input type="checkbox" id="my_modal_7" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box">
                  <h1 className="text-4xl font-bold text-blue-900 text-center mt-2">
                    CONTACT <span className="text-yellow-500"> US</span>
                  </h1>
                  <div className="p-8 font-normal">
                    Goodgood Hospital 999 South Sathorn Rd., Yannawa Sathorn
                    Bangkok 10120 Thailand.
                    <p className="mt-4">Fax. 0 9999 9998, 0 9999 8888</p>
                    <p>Tel. 0 9999 9999</p>
                    contact@goodgood.or.th
                  </div>
                  <div className="flex justify-center mb-2">
                    <button className="flex justify-center items-center gap-2 text-blue-900 text-xl font-bold px-4 py-2 rounded-lg shadow-lg bg-yellow-300 hover:bg-gray-300 w-44 h-10">
                      <Tel /> Tel.
                    </button>
                  </div>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">
                  Close
                </label>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
