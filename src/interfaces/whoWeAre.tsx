import { ReactNode } from "react";

export interface Content {
  contentTitle: string;
  contentDescription: string;
  contentDescription2: string;
  contentDescription3: string;
  contentDescription4: string;
  specificLink: string;
}

export interface TextParallaxContentInterface {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}

export interface OverlayCopyInterface {
  subheading: string;
  heading: string;
}
