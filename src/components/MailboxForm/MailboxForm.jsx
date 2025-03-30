import { useState } from "react";
import { useNavigate } from "react-router";

function MailboxForm({ addBox }) {
  const [boxOwner, setBoxOwner] = useState("");
  const [boxSize, setBoxSize] = useState("Small");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ boxOwner, boxSize });
    navigate("/mailboxes"); 
  };

  return (
    <div className="Mailbox-form">
      <form onSubmit={handleSubmit}>
      
        <label>Owner Name:</label>
        <input type="text" value={boxOwner} onChange={(e) => setBoxOwner(e.target.value)} required />
        
        <label>Box Size:</label>
        <select value={boxSize} onChange={(e) => setBoxSize(e.target.value)}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <button type="submit">Create Mailbox</button>
      </form>
    </div>
  );
}

export default MailboxForm;
