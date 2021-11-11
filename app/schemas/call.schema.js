import * as yup from "yup";

export const callSchema = yup.object({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  timestamp: yup.string().required(),
  sip: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  phone_number: yup.string().required(),
  priority: yup.number().required().positive().integer(),
});
