import ContactInput from "../components/ContactInput";
import { useNavigate } from "react-router-dom";
import { addContact } from "../utils/api";

export default function AddPage() {
  const navigate = useNavigate();

  async function onAddContactHandler(contact) {
    await addContact(contact);
    navigate("/");
  }

  return (
    <section>
      <h2>Tambah kontak</h2>
      <ContactInput addContact={onAddContactHandler} />
    </section>
  );
}
