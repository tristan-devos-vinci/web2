import React from 'react';

interface HeaderProps {
  logoUrl: string;
  children: React.ReactNode;
}

const Header = (props: HeaderProps) => {
  return (
    <header>
      <img src={props.logoUrl} alt="Logo" style={{ height: '50px' }} />
      <div>{props.children}</div>
    </header>
  );
};

export default Header;