import createClasses from '../utils/create-classes';

export default function LoginInput({
  placeholder,
  value,
  name,
  type,
  onChange,
  isInvalid,
}) {
  const className = createClasses(
    'block w-full border rounded-lg px-4 py-3.5 outline-none focus:ring-1',
    isInvalid
      ? 'border-red-500 focus:ring-red-300'
      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-300'
  );
  return (
    <input
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
