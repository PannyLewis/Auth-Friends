import axios from "axios";

/* we are making a reuseable axios module */

export const axiosWithAuth = () => {
  /* we are doing two things here 
        - Step 1 - get the token from localStorage
        - Step 2 -create a new 'instance of axios with the 
            configuration object built into it

            we need to return out of the funtion

            we move the baseURL into here so we don't have to retype the whole link
  */
  // Step 1
  const token = window.localStorage.getItem("token");

  // Step 2
  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: "http://localhost:5000",
  });
};
