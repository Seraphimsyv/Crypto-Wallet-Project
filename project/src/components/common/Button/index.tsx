import React from 'react';
import './index.css';

interface IButtonProps {
  id?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg'
  color: 'info' | 'secondary' | 'warning' | 'error' | 'default';
  variant: 'filled' | 'outlined' | 'text';
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<IButtonProps> = (props) => {
  const { color, variant, onClick, children } = props;

  const id = props.id ? props.id : '';
  const className = props.className ? props.className : '';
  const size = props.size ? props.size : 'md';

  return (
    <>
      <button
        id={id}
        className={`app__common_btn ${color} ${variant} ${size} ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  )
}