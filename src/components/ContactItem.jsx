import PropTypes from "prop-types";
import ContactItemImage from "./ContactItemImage";
import ContactItemBody from "./ContactItemBody";
import DeleteButton from "./DeleteButton";

export default function ContactItem({ imageUrl, name, tag, id, onDelete }) {
  return (
    <div className="contact-item">
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

ContactItem.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  id: PropTypes.number,
  onDelete: PropTypes.func,
};
