import { addContact } from "../utils/data";
import ContactInput from "../components/ContactInput";
import { useNavigate } from "react-router-dom";

export default function AddPage() {
  const navigate = useNavigate();
  function onAddContactHandler(contact) {
    addContact(contact);
    navigate("/"); //ketika disubmit ke halaman home
  }
  return (
    <section>
      <h2>Tambah kontak</h2>
      <ContactInput addContact={onAddContactHandler} />
    </section>
  );
}
