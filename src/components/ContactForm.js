import "./ContactFormStyle.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1>Send a message to us!</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="mail" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Feedback" rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
