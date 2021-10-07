import PropTypes from 'prop-types';
import s from './Transaction.module.css';

const TransactionHistory = ({ transData }) => {
  return (
    <>
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        {transData.map(el => {
          const { id, type, amount, currency } = el;
          return (
            <tbody>
              <tr key={id} className={s.list}>
                <td className={s.item}>{type}</td>
                <td className={s.item}>{amount}</td>
                <td className={s.item}>{currency}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

TransactionHistory.propTypes = {
  transData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
