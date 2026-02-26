const ExponentTwo = ({ num }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n²</p>
    <p className="exponent-result">{num} * {num} = <span className="total">{num ** 2}</span></p>
  </div>
);

export default ExponentTwo;
