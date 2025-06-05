import React from 'react';
import styles from '../styles';


const Button = ({ name, link, style }) => {
  return (
    <a target='_blank' rel="noopener noreferrer" href={link}><button type='button' className={`${styles.btn} ${style}`}>{name}</button></a>
  )
};

export default Button;