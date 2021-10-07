import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ statData }) => {
  return (
    <>
      <div className={s.statWrap}>
        <h2 className={s.title}>Upload stats</h2>
        <ul className={s.list}>
          {statData.map(el => {
            const { id, label, percentage } = el;
            return (
              <li
                className={s.item}
                style={{
                  backgroundColor: `rgb(${Math.round(
                    Math.random() * 255,
                  )}, ${Math.round(Math.random() * 255)}, ${Math.round(
                    Math.random() * 255,
                  )}`,
                }}
                key={id}
              >
                <span className={s.label}>{label}</span>
                <span className={s.percentage}>{percentage}%</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

Statistics.propTypes = {
  transData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
