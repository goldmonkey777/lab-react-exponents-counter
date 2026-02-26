const ExponentSix = ({ num }) => (
  <div className="exponent-counter-container">
    <p className="exponent-label">n⁶</p>
    <p className="exponent-result">{num} * {num} * {num} * {num} * {num} * {num} = <span className="total">{num ** 6}</span></p>
  </div>
);

export default ExponentSix;
