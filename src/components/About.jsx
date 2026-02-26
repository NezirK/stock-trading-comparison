const About = () => {
  return (
    <div className="container" style={{ marginTop: "60px" }}>
      <h2 style={{ marginBottom: "20px" }}>
        About This Comparison
      </h2>

      <p style={{ color: "#555", lineHeight: "1.7", marginBottom: "15px" }}>
        This project was created to provide a transparent overview of popular
        U.S. stock trading platforms. The goal is to simplify decision-making
        by organizing key features such as fees, minimum deposit requirements,
        and available trading tools in a structured format.
      </p>

      <p style={{ color: "#555", lineHeight: "1.7" }}>
        All information presented is for educational purposes only.
        Users are encouraged to verify details directly with each broker
        before making financial decisions.
      </p>
    </div>
  );
};

export default About;