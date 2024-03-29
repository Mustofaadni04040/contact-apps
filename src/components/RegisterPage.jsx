import { Link, useNavigate } from "react-router-dom";
import { register } from "../utils/api";
import RegisterInput from "./RegisterInput";

export default function RegisterPage() {
  const navigate = useNavigate();
  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  }
  return (
    <section className="register-page">
      <h2>Gak perlu serius-serius ya isinya ...</h2>
      <RegisterInput register={onRegisterHandler} />
      <p>
        Kembali ke <Link to="/">Masuk</Link>
      </p>
    </section>
  );
}
