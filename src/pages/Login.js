import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/user";
import registerUser from "../strapi/registerUser";
import loginUser from "../strapi/loginUser";
import AppLabel from "../components/UI/AppLabel";
export default function Login() {
  const history = useHistory();
  const { userLogin, showAlert } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("default");
  const [isMember, setIsMember] = useState(true);

  const toggleMember = () => {
    setIsMember((prevMember) => {
      let isMember = !prevMember;
      isMember ? setUsername("default") : setUsername("");
      return isMember;
    });
  };
  const handleSubmit = async (e) => {
    showAlert({ msg: "accessing user data please wait..." });
    e.preventDefault();
    let response;
    if (isMember) {
      response = await loginUser({ email, password });
    } else {
      response = await registerUser({ email, password, username });
    }
    if (response) {
      const {
        jwt: token,
        user: { username },
      } = response.data;
      const newUser = { username, token };
      userLogin(newUser);
      showAlert({ msg: `You are logged in: ${username} shop away my friend` });
      history.push("/products");
    } else {
      showAlert({
        msg: "There was an error please try again...",
        type: "danger",
      });
    }
  };

  return (
    <div className="w-full max-w-lg m-auto ">
      <h2 className="text-2xl tracking-wide font-bold uppercase text-gray-800 text-center mb-4">
        {isMember ? "sign in" : "register"}
      </h2>
      <form
        className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        {!isMember && (
          <div className="mb-4">
            <AppLabel name="username" forInput="username" />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}

        <div className="mb-4">
          <AppLabel name="email" forInput="email" />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <AppLabel name="Password" forInput="password" />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
        <p className="text-center text-lg tracking-tight capitalize mt-8 mb-3">
          {isMember ? "need to register?" : "already a member?"}
          <button
            type="button"
            onClick={toggleMember}
            className="text-teal-600 ml-2 capitalize focus:outline-none"
          >
            click here
          </button>
        </p>
      </form>
    </div>
  );
}
