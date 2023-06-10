import createClasses from '../utils/create-classes';

export default function AddPatientInput({
  placeholder,
  value,
  name,
  isInvalid,
  type,
  onChange,
}) {
  const defaultClassName =
    'block w-full leading-6 rounded-md border px-3 py-3 outline-none text-sm font-normal focus:ring';
  const className = createClasses(
    defaultClassName,
    isInvalid
      ? 'border-red-500 focus:ring-red-300'
      : 'border-blue-900 focus:ring-blue-300 focus:border-blue-500'
  );
  return (
    <input
      type={type}
      className={className}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
