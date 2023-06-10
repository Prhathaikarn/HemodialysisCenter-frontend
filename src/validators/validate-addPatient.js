import Joi from 'joi';

const addPatientSchema = Joi.object({
  firstName: Joi.string().trim().required().messages({
    'string.empty': 'First name is required.',
  }),
  lastName: Joi.string().trim().required().messages({
    'string.empty': 'Last name is required.',
  }),
  hnId: Joi.alternatives([Joi.string().pattern(/^[0-9]{10}$/)]).messages({
    'string.empty': 'HN ID is required.',
    'string.pattern.base':
      'Password must be at least 10 characters and contain only alphabet and number.',
  }),
  gender: Joi.string().trim().required().messages({
    'string.empty': 'Gender is required.',
  }),
  thaiNationalId: Joi.string().trim().required().messages({
    'string.empty': 'Thai National ID is required.',
  }),
  birthDate: Joi.string().trim().required().messages({
    'string.empty': 'Birth date is required.',
  }),
  age: Joi.string().trim().required().messages({
    'string.empty': 'Age is required.',
  }),
  mobilePhone: Joi.string().trim().required().messages({
    'string.empty': 'Mobile is required.',
  }),
  doctorFname: Joi.string().trim().required().messages({
    'string.empty': 'First name is required.',
  }),
  doctorLname: Joi.string().trim().required().messages({
    'string.empty': 'Last name is required.',
  }),
});

const validateAddPatient = (input) => {
  console.log('input--------', input);
  const { error } = addPatientSchema.validate(input, { abortEarly: false });
  console.log('error-------', error);
  if (error) {
    return error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
  }
};

export default validateAddPatient;
