const Exponent = ({ num, exponent }) => {
  // Build the multiplication string: e.g. "3 * 3 * 3"
  const multiplicationStr = Array(exponent).fill(num).join(' * ');
  const result = num ** exponent;

  // Build the superscript label: n², n³, n⁴, etc.
  const superscripts = ['²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];
  const supLabel = superscripts[exponent - 2] || `^${exponent}`;

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n{supLabel}</p>
      <p className="exponent-result">
        {multiplicationStr} = <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default Exponent;
