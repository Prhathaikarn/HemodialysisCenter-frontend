import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';
import { User, Edit } from '../icons/index';
import RegisterForm from '../components/RegisterForm';
// import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div
        className="hero min-h-[calc(100vh-80px)]"
        style={{
          backgroundImage: `url("https://img.fortawesome.com/1ce05b4b/hero-icon-bg.svg")`,
        }}
      >
        <div>
          <div className="text-center bg-white p-10">
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold mb-20 text-blue-900">
                HEMODIALYSIS <span className="text-yellow-500"> CENTER</span>
              </h1>
            </div>
            <div className="flex items-center justify-center gap-8">
              <label
                htmlFor="my-modal-1"
                className="flex justify-center items-center gap-2 text-blue-900 text-xl font-bold px-4 py-2 rounded-lg shadow-lg bg-yellow-300 hover:bg-gray-300 hover:scale-125 duration-200 w-44 h-14"
              >
                <User /> Log in
              </label>
              <label
                htmlFor="my-modal-2"
                className="flex justify-center items-center gap-2 text-blue-900 text-xl font-bold px-4 py-2 rounded-lg shadow-lg bg-blue-200 hover:bg-gray-300 hover:scale-125 duration-200 w-44 h-14"
              >
                <Edit /> Register
              </label>
            </div>
            <input type="checkbox" id="my-modal-1" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <LoginForm />
              </div>
              <label className="modal-backdrop" htmlFor="my-modal-1">
                Close
              </label>
            </div>

            <input type="checkbox" id="my-modal-2" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <RegisterForm />
              </div>
              <label className="modal-backdrop" htmlFor="my-modal-2">
                Close
              </label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
