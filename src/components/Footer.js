import React from 'react';
import CodeIcon from '@material-ui/icons/Code';
import TwitterIcon from '@material-ui/icons/Twitter';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import GitHubIcon from '@material-ui/icons/GitHub';

import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div>Privacy • Sitemap • Careers • About us </div>
      <div className="footer__logos">
        <CodeIcon />
        &nbsp;by Sandeep in Beautiful Toronto.
        <span>
          <a href="https://twitter.com/letsandeepio" target="_blank">
            <TwitterIcon />
          </a>
        </span>
        <span>
          <a href="https://codepen.io/letsandeepio" target="_blank">
            <BorderColorIcon />
          </a>
        </span>
        <span>
          <a href="https://github.com/letsandeepio/" target="_blank">
            <GitHubIcon />
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
