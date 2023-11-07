const baseUrl = "http://localhost:5000";

const AUTH = {
  LOGIN: `${baseUrl}/auth/login`,
  REGISTER: `${baseUrl}/auth/register`,
  ACTIVATE: `${baseUrl}/auth/activate`,
};

const USER = {
  PROFILE: `${baseUrl}/user/me`,
};

export { AUTH, USER };
