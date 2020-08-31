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
  const [username, setUsername] = useState("");
  const [isMember, setIsMember] = useState(true);

  const toggleMember = () => {
    setIsMember(!isMember);
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
      <h2 className="mb-4 text-2xl font-bold tracking-wide text-center text-gray-800 uppercase">
        {isMember ? "sign in" : "register"}
      </h2>
      <form
        className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-xl"
        onSubmit={handleSubmit}
      >
        {!isMember && (
          <div className="mb-4">
            <AppLabel name="username" forInput="username" />
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
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
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
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
            className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="px-4 py-2 font-bold text-white bg-teal-600 rounded hover:bg-teal-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
        <p className="mt-8 mb-3 text-lg tracking-tight text-center capitalize">
          {isMember ? "need to register?" : "already a member?"}
          <button
            type="button"
            onClick={toggleMember}
            className="ml-2 text-teal-600 capitalize focus:outline-none"
          >
            click here
          </button>
        </p>
      </form>
    </div>
  );
}
