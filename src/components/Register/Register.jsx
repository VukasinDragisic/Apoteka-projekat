import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { getAllUsers, postUser } from "../../service";
import { P } from "../Login/StyledLogin";
import { SectionR } from "../Register/StyledRegister";

function Register({ setUser }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  return (
    <SectionR>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let user = {
            username: username,
            email: email,
            password: password,
          };

          getAllUsers().then((res) => {
            if (
              !res.data.some(
                (user) => user.username === username || user.email === email
              )
            ) {
              postUser(user).then((res) => {
                setUser(res.data);
                history.push("/login");
              });
            }
          });

          setUsername("");
          setEmail("");
          setPassword("");
        }}
      >
        <input
          type="text"
          name="username"
          placeholder="Korisnicko ime"
          value={username}
          required
          autoComplete="off"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          required
          autoComplete="off"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Sifra"
          value={password}
          required
          autoComplete="off"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" name="submit" value="Registruj se" />

        <P>Registrovani ste?</P>
        <Link to="/login">Ulogujte se!</Link>
      </form>
    </SectionR>
  );
}

export default Register;
