import { Link } from 'react-router-dom';
import AddPatientForm from '../components/AddPatientForm';
import Navbar from '../components/Navbar';

export default function AddPatientPage() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="text-4xl font-bold mb-10 mt-10 p-4 text-blue-900 w-full text-center">
          Add New Patient
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <AddPatientForm />
      </div>
    </div>
  );
}
