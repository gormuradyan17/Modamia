const FooterEmail = () => {
  return (
    <section  className="footerEmail">
    <div className="footerEmail_content">
      <div className="subscribe-heading">
        <h2>Stay updated with ModaMia!</h2>
        <p>
          Sign up for our newsletter and get exclusive offers, latest fashion
          updates & trending fashion articles
        </p>
      </div>
      <form action="">
        <div className="inpGroup">
          <input
            type="text"
            className="email_inp"
            name="EMAIL"
            placeholder="Enter your email"
            required
          />
            <button className="btn_subscribe" type="submit">
              subscribe
            </button>
        </div>
      </form>
    </div>
    </section>
  );
};

export default FooterEmail;
