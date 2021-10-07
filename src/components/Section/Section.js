import s from './Section.module.css';

const Section = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default Section;
