import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';

// https://www.gatsbyjs.com/docs/add-seo-component/

const Head = ({
  title = `Adam Folsom's personal website`,
  description = `Adam Folsom is an experienced Senior Software Engineer with a strong track record of delivering high-quality projects, leading teams, and staying abreast of industry trends, who also enjoys physical fitness, art and crafts, and cooking in his free time.`,
  image,
}) => {
  const { pathname } = useLocation();

  const seo = {
    title: title,
    description: description,
    image: `${image}`,
    url: `${pathname}`,
  };

  return (
    <Helmet title={title} defaultTitle={seo.title}>
      <html lang="en" />

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta name="google-site-verification" content="DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk" />
    </Helmet>
  );
};

export default Head;

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Head.defaultProps = {
  title: null,
  description: null,
  image: null,
};
