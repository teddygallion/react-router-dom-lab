import { Link } from "react-router";

function MailboxList({ mailboxes }) {
  return (
    <div>
      <h2>Mailboxes</h2>
      <div className="mailbox-container">
        {mailboxes.length > 0 ? (
          mailboxes.map((mailbox) => (
            <Link to={`/mailboxes/${mailbox._id}`} key={mailbox._id} className="mail-box">
              <p>Box #{mailbox._id}</p>
            </Link>
          ))
        ) : (
          <p>No mailboxes yet.</p>
        )}
      </div>
    </div>
  );
}

export default MailboxList;

