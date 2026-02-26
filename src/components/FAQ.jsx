const FAQ = () => {
  return (
    <div className="container" style={{ marginTop: "60px" }}>
      <h2 style={{ marginBottom: "20px" }}>
        Frequently Asked Questions
      </h2>

      <div style={{ marginBottom: "20px" }}>
        <strong>Is this financial advice?</strong>
        <p style={{ color: "#555", marginTop: "5px" }}>
          No. This website is for educational purposes only and does not provide financial advice.
        </p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <strong>How often is the data updated?</strong>
        <p style={{ color: "#555", marginTop: "5px" }}>
          We aim to review platform data regularly to ensure accuracy.
        </p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <strong>Do these platforms operate in the U.S.?</strong>
        <p style={{ color: "#555", marginTop: "5px" }}>
          Yes, all listed brokers operate within the United States market.
        </p>
      </div>
    </div>
  );
};

export default FAQ;