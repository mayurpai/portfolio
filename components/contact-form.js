import { useForm, ValidationError } from "@formspree/react";
import styles from "../styles/Home.module.css";
export default function ContactForm() {
  const [state, handleSubmit] = useForm("mknyledw");

  if (state.succeeded) {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    alert("Thanks For The Submission!");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.flex_box}>
        <div className={styles.inputBox}>
          <input
            id="name"
            type="name"
            name="name"
            placeholder="Name"
            autoComplete="new-password"
          />
        </div>
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <div className={styles.inputBox}>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="new-password"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>
      <div className={styles.inputBox}>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          autoComplete="new-password"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <div className={styles.inputBox}>
        <button type="submit" disabled={state.submitting}>
          Send Message
        </button>
      </div>
      {/* <ValidationError errors={state.errors} /> */}
    </form>
  );
}
