import React, { FC } from 'react';
import { PageType } from '../types/PageType';
import PageTitle from '../components/PageTitle';
import '../components/css/PageDescription.css';

interface Props {
  pageType: PageType;
}

const PageDescription: FC<Props> = (props) => {
  const pageInfos = {
    home: {
      title: 'Explore the world of art',
      description: `Nomen is a website which helps you learn a bit more about diverse 
        cultures of humanity by providing a simple way of browsing pieces 
        of art from all around the world.`,
    },
    collections: {
      title: 'Collections',
      description: `Collections are randomly generated compilations of varied pieces  
        of art from one of the following categories.`,
    },
    random: {
      title: 'Random',
      description: 'A random piece of art.',
    },
    favourites: {
      title: 'Favourites',
      description: 'Pieces of art you found most interesting or exciting',
    },
    attribution: {
      title: 'Attribution',
      description: '',
    },
  };

  const heading = pageInfos[props.pageType].title;
  const description = pageInfos[props.pageType].description;

  return (
    <section id="page-description">
      <PageTitle text={heading} underlined={false} />
      <p className="border-top border-bottom">{description}</p>
    </section>
  );
};

export default PageDescription;
