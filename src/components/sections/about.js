import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Eleventy',
    'Node.js',
    'WordPress',
    'Next',
    'Vue',
    'Angular',
    'AngularJS',
    'Express',
    'Nest',
    'Python',
    'Django',
    'Go',
    'Ruby on Rails',
    'AWS',
    'GCP',
    'PyTorch',
    'Tensorflow',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hey there! I'm Adam, and I'm passionate about crafting innovative software solutions
              that make a real impact. My journey into the world of software development began over
              a decade ago, and since then, I've honed my skills across various roles and
              industries.
            </p>

            <p>
              Currently, I'm diving deep into the realm of web technologies, especially focusing on
              React and JavaScript to create engaging user experiences. Whether it's optimizing code
              for efficiency or exploring the latest trends in front-end development, I thrive on
              the challenge of pushing boundaries and delivering top-notch solutions.
            </p>

            <p>
              Outside of work, I love staying active with physical fitness activities like running,
              cycling, and swimming. I also enjoy channeling my creativity through art and crafts,
              whether it's sketching or trying out new recipes in the kitchen. Balancing work with
              hobbies keeps me energized and inspired in both my professional and personal pursuits.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>
      </div>
    </StyledAboutSection>
  );
};

export default About;
