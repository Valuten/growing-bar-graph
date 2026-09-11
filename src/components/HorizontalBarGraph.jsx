import PropTypes from 'prop-types';
import './HorizontalBarGraph.css';

export default function HorizontalBarGraph({ label, value, maxvalue, barwidthpx }) {
  const percent = Math.min(100, Math.max(0, (value / maxvalue) * 100));

  return (
    <div className="gbg-row" style={{ width: barwidthpx }}>
      {label && <span className="gbg-label">{label}</span>}
      <div className="gbg-track">
        <div className="gbg-fill" style={{ width: `${percent}%` }} />
      </div>
      <span className="gbg-value">{value}/{maxvalue}</span>
    </div>
  );
}

HorizontalBarGraph.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number.isRequired,
  maxvalue: PropTypes.number.isRequired,
  barwidthpx: PropTypes.number,
};

HorizontalBarGraph.defaultProps = {
  label: '',
  barwidthpx: 400,
};
