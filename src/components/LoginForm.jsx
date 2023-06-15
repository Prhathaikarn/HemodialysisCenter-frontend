import LoginInput from './LoginInput';
import validateLogin from '../validators/validate-login';
import InputErrorMessage from './InputErrorMessage';
import { useState } from 'react';
import { User } from '../icons';
import { login } from '../api/auth-api';
import { useAuth } from '../contexts/AuthContext';
import { setAccessToken } from '../utils/localstorage';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const initialInput = {
  nurseId: '',
  password: '',
};

export default function LoginForm() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  const { token, setToken } = useAuth();
  const navigate = useNavigate();
  // console.log('token', token);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (onSubmit) => async (e) => {
    e.preventDefault();

    const result = validateLogin(input);
    // console.log(result);
    if (result) {
      return setError(result);
    }
    setError({});
    await onSubmit(input);
    setInput(initialInput);
  };

  const onSubmit = async (value) => {
    try {
      const result = await login(value);
      setAccessToken(result.accessToken);
      setToken(result.accessToken);
      if (result.accessToken) {
        navigate('/allpatient');
        toast.success('Login success!!')
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmitForm(onSubmit)}>
      <div className="grid gap-4">
        <div>
          <LoginInput
            placeholder="Nurse ID"
            name="nurseId"
            value={input.nurseId}
            onChange={handleChangeInput}
            isInvalid={error.nurseId}
          />
          <InputErrorMessage message={error.nurseId} />
        </div>
        <div>
          <LoginInput
            placeholder="Password"
            name="password"
            type="password"
            value={input.password}
            onChange={handleChangeInput}
            isInvalid={error.password}
          />
          <InputErrorMessage message={error.password} />
        </div>
        <div className="flex justify-center items-center mt-4">
          <button className="flex justify-center items-center gap-2 text-blue-900 text-xl font-bold px-4 py-2 rounded-lg shadow-lg bg-yellow-300 hover:bg-gray-300 w-44 h-14">
            <User /> Log in
          </button>
        </div>
      </div>
    </form>
  );
}
