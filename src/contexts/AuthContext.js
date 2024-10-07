import { createContext, useReducer, useEffect } from "react";
import apiService from "../app/apiService";
import { API } from "../constants/API.constants";
import isValidToken from "../ultis/jwt";
import { useSelector } from "react-redux";
// import isValidToken from "../utils/jwt";

const initialState = {
  isInitialized: false,
  isAuthenticated: false,
  user: null,
};

const INITIALIZE = "AUTH.INITIALIZE";
const LOGIN_SUCCESS = "AUTH.LOGIN_SUCCESS";
const REGISTER_SUCCESS = "AUTH.REGISTER_SUCCESS";
const LOGOUT = "AUTH.LOGOUT";
const UPDATE_SUCCESS = "AUTH.UPDATE_SUCCESS";

const reducer = (state, action) => {
  switch (action.type) {
    case INITIALIZE:
      const { isAuthenticated, user } = action.payload;
      return {
        ...state,
        isInitialized: true,
        isAuthenticated,
        user,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

const AuthContext = createContext({ ...initialState });

const setSession = (accessToken, remember) => {
  if (accessToken && !!remember) {
    window.localStorage.setItem("accessToken", accessToken);
    apiService.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else if (accessToken && !remember) {
    window.localStorage.removeItem("accessToken");
    window.sessionStorage.setItem("accessToken", accessToken);
    apiService.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    window.localStorage.removeItem("accessToken");
    window.sessionStorage.removeItem("accessToken");
    delete apiService.defaults.headers.common.Authorization;
  }
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { updateUserInfo } = useSelector((state) => state.user);

  const login = async ({ email, password, remember }, callback) => {
    const response = await apiService.post(API.LOGIN, { email, password });
    const { user, accessToken } = response.data;

    setSession(accessToken, remember);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user },
    });

    callback();
  };

  const register = async (
    { firstName, lastName, email, password },
    callback
  ) => {
    const response = await apiService.post(API.REGISTER, {
      firstName,
      lastName,
      email,
      password,
    });
    const { user, accessToken } = response.data;

    setSession(accessToken);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: { user },
    });

    callback();
  };

  const logout = (callback) => {
    setSession(null);
    dispatch({ type: LOGOUT });
    callback();
  };

  useEffect(() => {
    const initialize = async () => {
      try {
        const storageToken = window.localStorage.getItem("accessToken");
        const sessionToken = window.sessionStorage.getItem("accessToken");
        const accessToken = storageToken || sessionToken;
        const remember = !!storageToken;

        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken, remember);

          const response = await apiService.get(API.GET_USER_INFO);
          const user = response.data;

          dispatch({
            type: INITIALIZE,
            payload: { isAuthenticated: true, user },
          });
        } else {
          setSession(null);

          dispatch({
            type: INITIALIZE,
            payload: { isAuthenticated: false, user: null },
          });
        }
      } catch (error) {
        setSession(null);
        dispatch({
          Type: INITIALIZE,
          payload: { isAuthenticated: false, user: null },
        });
      }
    };
    initialize();
  }, []);

  useEffect(() => {
    if (updateUserInfo) {
      dispatch({
        type: UPDATE_SUCCESS,
        payload: { user: updateUserInfo },
      });
    }
  }, [updateUserInfo]);

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
