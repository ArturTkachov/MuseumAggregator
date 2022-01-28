import React, { FC } from 'react';
import {PageType} from '../types/PageType';
import '../components/css/PageDescription.css'

interface Props{
  pageType: PageType;
}

const PageDescription:FC<Props> = (props) => {
  const pageInfos = {
    home: {
      heading: "Explore the world of art",
      description:
        "Nomen is a website which helps you learn a bit more about diverse " +
        "cultures of humanity by providing a simple way of browsing pieces " +
        "of art from all around the world."
    },
    collections: {
      heading: "Collections",
      description:
        "Collections are randomly generated compilations of varied pieces " +
        "of art from one of the following categories."
    },
    random: {
      heading: "Random",
      description: "A random piece of art."
    },
    favourites: {
      heading: "Favourites",
      description: "Pieces of art you found most interesting or exciting"
    },
    attribution: {
      heading: "Attribution",
      description: ""
    }
  };

  const heading:string = pageInfos[props.pageType].heading;
  const description:string = pageInfos[props.pageType].description;

  return (
    <section  id="page-description">
      <h1>{heading}</h1>
      <p className="border-top border-bottom">{description}</p>
    </section>
  );
};

export default PageDescription;
