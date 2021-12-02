import React from 'react';
import { getString } from '../lib/richText';
import { colors } from '../style/colors';
import { P, H4 } from '../style/typography';
import PageLink from './PageLink';
import styled from 'styled-components';

const PreviewImg = styled.img`
  width: 400px;
  height: 10em;
  margin: 1em;
`;

const ProjectCardContainer = styled.div`
  background-color: ${colors.ALMOND + '50'};
  min-height: 14em;
  padding: 1em;
  margin-bottom: 4em;
  &:hover {
    cursor: pointer;
  }
`;

const ProjectCardContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProjectCardText = styled.div`
  width: 40%;
`;

const ProjectCardDescription = styled.div`
  min-height: 6.5em;
`;

const ProjectCardTopics = styled.div`
  padding-top: 0.5em;
  display: flex;
  min-height: 2em;
`;

export default function ProjectCard({ projectData }) {
  const { title, uid, description, topics, previewImage } = projectData;
  const { url: codeUrl } = projectData.codeLink;
  const { url: demoUrl } = projectData.demoLink;

  const projectUrl = '/project/' + uid;
  return (
    <ProjectCardContainer>
      {/* <PageLink href={projectUrl}> */}
      <ProjectCardContent>
        <ProjectCardText>
          <H4>{getString(title).toUpperCase()}</H4>
          <ProjectCardDescription>
            <P>{getString(description)}</P>
          </ProjectCardDescription>
          <ProjectCardTopics>
            {topics.map((t, idx) => {
              let dash = idx < topics.length - 1 ? '-' : '';
              return (
                <P style={{ marginTop: '0' }} key={idx}>
                  {getString(t.topic)}&nbsp;
                  {dash}&nbsp;
                </P>
              );
            })}
          </ProjectCardTopics>
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noreferrer">
              <H4>demo link</H4>
            </a>
          )}
          {codeUrl && (
            <a href={codeUrl} target="_blank" rel="noreferrer">
              <H4>repo link</H4>
            </a>
          )}
        </ProjectCardText>
        <PreviewImg src={previewImage.url} />
      </ProjectCardContent>
      {/* </PageLink> */}
    </ProjectCardContainer>
  );
}
