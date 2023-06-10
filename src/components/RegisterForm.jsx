import RegisterInput from './RegisterInput';
import validateRegister from '../validators/validate-register';
import InputErrorMessage from './InputErrorMessage';
import { useState } from 'react';
import { Edit } from '../icons';
import { register } from '../api/auth-api';
import { useNavigate } from 'react-router-dom';

const initialInput = {
  firstName: '',
  lastName: '',
  nurseId: '',
  password: '',
  confirmPassword: '',
};

export default function RegisterForm() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (onSubmit) => async (e) => {
    e.preventDefault();
    const result = validateRegister(input);
    if (result) {
      return setError(result);
    }
    setError({});
    await onSubmit(input);
    setInput(initialInput);
  };

  const onSubmit = async (value) => {
    try {
      const result = await register(value);
      if (result.success) {
        navigate('/login');
      }
    } catch (err) {}
  };

  return (
    <form onSubmit={handleSubmitForm(onSubmit)}>
      <div className="grid grid-cols-2 gap-x-3 gap-y-4">
        <div>
          <RegisterInput
            name="firstName"
            placeholder="First name"
            value={input.firstName}
            onChange={handleChangeInput}
            isInvalid={error.firstName}
          />
          {error.firstName && <InputErrorMessage message={error.firstName} />}
        </div>
        <div>
          <RegisterInput
            name="lastName"
            placeholder="Last name"
            value={input.lastName}
            onChange={handleChangeInput}
            isInvalid={error.lastName}
          />
          {error.lastName && <InputErrorMessage message={error.lastName} />}
        </div>
        <div className="col-span-full">
          <RegisterInput
            name="nurseId"
            placeholder="Nurse ID"
            value={input.nurseId}
            onChange={handleChangeInput}
            isInvalid={error.nurseId}
          />
          {error.nurseId && <InputErrorMessage message={error.nurseId} />}
        </div>
        <div className="col-span-full">
          <RegisterInput
            name="password"
            placeholder="Password"
            type="password"
            value={input.password}
            onChange={handleChangeInput}
            isInvalid={error.password}
          />
          {error.password && <InputErrorMessage message={error.password} />}
        </div>
        <div className="col-span-full">
          <RegisterInput
            name="confirmPassword"
            placeholder="Confirm password"
            type="password"
            value={input.confirmPassword}
            onChange={handleChangeInput}
            isInvalid={error.confirmPassword}
          />
          {error.confirmPassword && (
            <InputErrorMessage message={error.confirmPassword} />
          )}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button className="flex justify-center items-center gap-2 text-blue-900 text-xl font-bold px-4 py-2 rounded-lg shadow-lg bg-blue-200 hover:bg-gray-300 w-44 h-14 ">
          <Edit /> Sign up
        </button>
      </div>
    </form>
  );
}
