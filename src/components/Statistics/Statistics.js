import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      <div className={s.description}>
        {title && <h2 className={s.title}>{title}</h2>}
        <ul className={s.stats}>
          {stats.map(stat => (
            <li className={s.item} key={stat.id}>
              <span className={s.label}>{stat.label}</span>
              <span className={s.percentage}>{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
