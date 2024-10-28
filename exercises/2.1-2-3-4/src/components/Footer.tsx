import React from 'react';

interface FooterProps {
  logoUrl: string;
  children: React.ReactNode;
}

const Footer = (props: FooterProps) => {
  return (
    <footer>
      <img src={props.logoUrl} alt="Logo" style={{ height: '100px' }} />
      <div>{props.children}</div>
    </footer>
  );
};

export default Footer;