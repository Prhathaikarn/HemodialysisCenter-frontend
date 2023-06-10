import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import RegisterForm from '../components/RegisterForm';

export default function RegisterPage() {
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
              <h1 className="text-5xl font-bold mb-12 text-blue-900">
                HEMODIALYSIS <span className="text-yellow-500"> CENTER</span>
              </h1>
            </div>
            <div className="flex items-center justify-center gap-8">
              <RegisterForm />
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
