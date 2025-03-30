import { useState } from "react";
import { useNavigate } from "react-router";

function LetterForm({ mailboxes, addLetter }) {
  const [mailboxId, setMailboxId] = useState(mailboxes.length > 0 ? mailboxes[0]._id : "");
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addLetter({ mailboxId: Number(mailboxId), recipient, message });
    navigate(`/mailboxes/${mailboxId}`);
  };

  return (
    <div className = "Letter-Form">
      <form onSubmit={handleSubmit}>

        <label> Mailbox:</label>
        <select value={mailboxId} onChange={(e) => setMailboxId(e.target.value)}>
          {mailboxes.map((box) => (
            <option key={box._id} value={box._id}>
            Box #{box._id}
            </option>
            ))}
          </select>

        <label> Recipient: </label>
        <input type="text" value={recipient} onChange={(e) => setRecipient(e.target.value)} required />
       
        <label>Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        
        <button type="submit">Send Letter</button>
      </form>
    </div>
  );
}

export default LetterForm;
