import { useParams } from "react-router";

function MailboxDetails({ mailboxes, letters }) {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));
  const selectedLetters = letters.filter((letter) => letter.mailboxId === Number(mailboxId));

  if (!selectedBox) {
    return <h2>Mailbox Not Found!</h2>;
  }

  return (
    <div>
      <h2>Mailbox Details</h2>
      <h3>Box Number: {selectedBox._id}</h3>
      <h4>Owner: {selectedBox.boxOwner}</h4>
      <h5>Size: {selectedBox.boxSize}</h5>

      <h3>Letters</h3>
      {selectedLetters.length > 0 ? (
        <ul>
          {selectedLetters.map((letter, index) => (
            <li key={index}>
              <p><>To:</> {letter.recipient}</p>
              <p>{letter.message}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No letters yet.</p>
      )}
    </div>
  );
}

export default MailboxDetails;
