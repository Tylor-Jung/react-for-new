import PropTypes from 'prop-types';
import styles from "./Button.module.css";

function Button({ title }) {
    return <button className={styles.btn}>{title}</button>; 
    
}

Button.propTypes ={
    title: PropTypes.string.isRequired,
};

export default Button;