import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { getAllUsers } from "../../service";
import { Div, Section, P } from "./StyledLogin";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  return (
    <Section>
      <Div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getAllUsers().then((res) => {
              let user = res.data.find(
                (el) =>
                  (el.username === username || el.email === username) &&
                  el.password === password
              );

              if (user) {
                setUser(user);
                history.push("/proizvodi");
              } else console.log("greska");
            });

            setUsername("");
            setPassword("");
          }}
        >
          <input
            type="text"
            name="username"
            placeholder="Korisnicko ime / Email"
            value={username}
            required
            autoComplete="off"
            onChange={(e) => {
              setUsername(e.target.value);
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
          <input type="submit" name="submit" value="Uloguj se" />
        </form>
        <div>
          <P>Niste registrovani?</P>
          <Link to="/register">Registrujte se!</Link>
        </div>
      </Div>
    </Section>
  );
}

export default Login;
