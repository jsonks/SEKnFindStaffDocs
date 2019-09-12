/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_collecting_fjjl.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href="/docs/documentation">Documentation</Button>
            <Button href="/docs/usergrouparchives">User Group Archives</Button>
            <Button href="/docs/customization">Customization</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom paddingTop"
        style={{textAlign: 'center'}}>
        <h2>What is SEKnFind?</h2>
        <MarkdownBlock>SEKnFind *(seek-n-find)* is a consortium that unites the collections of 47 libraries in Southeast Kansas — over **700,000** items — for a rich, streamlined sharing experience.</MarkdownBlock>
		<MarkdownBlock> Our mission is to provide the people of southeast Kansas with rapid, direct and open access to an enriched and comprehensive shared collection of library resources.</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="hidden">
        {[
		/*--
		  {
            content:
              'Other Kewl Stuff',
            image: `${baseUrl}img/undraw_to_do_list_a49b.svg`,
            imageAlign: 'left',
            title: 'More Kewl',
          },
		--*/
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark" id="members">
        {[
          {
            content: '<ul class="memberlist"><li>Altamont</li><li>Altoona</li><li>Arma</li><li>Blue Mound</li><li>Bronson</li><li>Caney</li><li>Cedar Vale</li><li>Chanute</li><li>Cherryvale</li><li>Chetopa</li><li>Coffeyville</li><li>Colony</li><li>Columbus</li><li>Edna</li><li>Erie</li><li>Fall River</li><li>Fort Scott</li><li>Fredonia</li><li>Galena</li><li>Garnett</li><li>Grenola</li><li>Hamilton</li><li>Hepler</li><li>Howard</li><li>Humboldt</li><li>Independence</li><li>Independence Community College</li><li>Iola</li><li>Kincaid</li><li>Longton</li><li>Madison</li><li>McCune</li><li>Moran</li><li>Mound City</li><li>Mound Valley</li><li>Oswego</li><li>Parker</li><li>Pleasanton</li><li>Prescott</li><li>Savonburg</li><li>Sedan</li><li>St. Paul</li><li>Thayer</li><li>Toronto</li><li>Walnut</li><li>Weir</li><li>Yates Center</li></ul>',
            image: `${baseUrl}img/membermap.png`,
            imageAlign: 'left',
            title: 'Member Libraries',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
            '<ul style="text-align: left;"><li>Share most materials, regardless of where a borrower is registered.</li><li>Fill holds each day the library is open.</li><li>Maintain patron confidentiality.</li><li>Commit to making the database as clean as possible.</li><li>Abide by prescribed policies and procedures.</li><li>Share information on problems, solutions and best practices</li></ul>',
            image: `${baseUrl}img/undraw_to_do_list_a49b.svg`,
            imageAlign: 'right',
            title: 'Member Responsibilities',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn" background="light">
        {[
          {
            content: '<a href="https://staff.seknfind.org/" target="_blank">Click here to access the SEKnFind staff client</a>',
            image: `${baseUrl}img/undraw_monitor_iqpq.svg`,
            imageAlign: 'top',
            title: '<a href="https://staff.seknfind.org/" target="_blank">Staff Client</a>',
          },
          {
            content: '<a href="https://www.seknfind.org/" target="_blank">Click here to visit the SEKnFind online patron access catalog (OPAC)</a>',
            image: `${baseUrl}img/undraw_Bibliophile_hwqc.svg`,
            imageAlign: 'top',
            title: '<a href="https://www.seknfind.org/" target="_blank">Patron Catalog</a>',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
