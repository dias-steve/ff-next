import React from "react";
import ContactBloc from "../BlocSectionManager/ContactBloc/ContactBloc";
import ContenuGeneralSection from "../BlocSectionManager/ContenuGeneralSection/ContenuGeneralSection";

import HeroHomeSection from "../BlocSectionManager/HeroHomeSection/HeroHomeSection";
import HeroSection from "../BlocSectionManager/HeroSection/HeroSection";
import HomeConclusionParagraph from "../BlocSectionManager/HomeConclusionParagraph/HomeConclusionParagraph";
import HomeParagraph1Section from "../BlocSectionManager/HomeParagraph1Section/HomeParagraph1Section";
import HomePathSection from "../BlocSectionManager/HomePathSection/HomePathSection";
import HomeReviewSection from "../BlocSectionManager/HomeReviewSection/HomeReviewSection";
import HomeSpeechSection from "../BlocSectionManager/HomeSpeech/HomeSpeechSection";
import PathDetailled from "../BlocSectionManager/PathDetailled/PathDetailled";
import styles from "./BlocSection.module.scss";

// hero : Hero
// speech : Discours
// paragraph-1 : Paragraphe
// review : Avis client
// paragraph-2 : Paragraphe de conculsion
// path : Parcours
export default function BlocSection({ data, gsap, forParcours }) {
  switch (data.bloc_type) {
    case "hero":
      return (
        <HeroHomeSection forParcours={forParcours} content={data} gsap={gsap} />
      );

    case "speech":
      return <HomeSpeechSection content={data} gsap={gsap} />;

    case "paragraph-2":
      return <HomeConclusionParagraph content={data} gsap={gsap} />;

    case "paragraph-1":
      return <HomeParagraph1Section content={data} gsap={gsap} />;

    case "review":
      return <HomeReviewSection content={data} gsap={gsap} />;

    case "path":
      return <HomePathSection content={data} gsap={gsap} />;
    case "path-detailed":
      return <PathDetailled content={data} gsap={gsap} />;
    case "contact-details":
      return <ContactBloc content={data} gsap={gsap} />;

    case "contenu-general":
      return <ContenuGeneralSection content={data} gsap={gsap} />;

    case "hero-simple":
      return <HeroSection content={data} gsap={gsap} />;
    default:
      return <p> components type not found </p>;
  }
}
