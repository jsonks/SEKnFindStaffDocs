/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Resources</h5>
            <a href={this.docUrl('documentation')}>
              Documentation
            </a>
            <a href={this.docUrl('usergrouparchives')}>
              User Group Archives
            </a>
            <a href={this.docUrl('customization')}>
              Customization
            </a>
          </div>
          <div>
            <h5>Koha</h5>
            <a href="https://staff.seknfind.org"
			  target="_blank">
			  Staff login
            </a>
            <a href="https://www.seknfind.org"
			  target="_blank">
			  OPAC
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://sekls.org/" target="_blank">SEKLS</a>
            <a href="http://www.libraryaware.com/login" target="_blank">LibraryAware Login</a>
			<a href="https://www.libraryaware.com/1652/Subscribers/Subscribe" target="_blank">Newsletter Subscribe</a>
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
