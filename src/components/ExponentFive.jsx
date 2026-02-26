const ExponentFive = ({ num }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁵</p>
    <p className="exponent-result">{num} * {num} * {num} * {num} * {num} = <span className="total">{num ** 5}</span></p>
  </div>
);

export default ExponentFive;
