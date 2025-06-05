import React from 'react';
import '../bennerevent/Benner.css'

function HeaderBanner() {
  return (
    <div className="header-banner">
      <div className="banner-image">
        <img
          src="./images/bennerevent.png"
          alt="Web Development PHP"
        />
      </div>
      <div className="banner-text">
        <h2>Web Development PHP</h2>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          Neque porro quisquam est, qui dolorem.
        </p>
      </div>
    </div>
  );
}

export default HeaderBanner;
