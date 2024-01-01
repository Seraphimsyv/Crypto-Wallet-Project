import React, { useState } from 'react';

interface ILinkProps {
  value: string;
  url: string;
  links?: { value: string, url: string }[];
}

export const Link: React.FC<ILinkProps> = (props) => {
  const { value, url, links } = props;
  // eslint-disable-next-line
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className={`app__header_navbar_link ${!!links ? 'menu_link' : ''}`}
        onClick={() => {
          
          if (!links) window.location.href = url;
        }}
      >
        <button>
          {value}
        </button>
      </div>
    </>
  )
}