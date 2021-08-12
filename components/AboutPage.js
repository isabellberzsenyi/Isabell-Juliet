import Navigation from './Navigations';
import Footer from './Footer';
import { getString } from '../lib/richText';

export default function AboutPage({ aboutPageData, navigationData, footerData }) {
  const { about_title: title, about_image: image, about_bio: aboutBio } = aboutPageData;
  return (
    <>
      <Navigation navigationData={navigationData} footerData={footerData} />
      <br />
      {getString(title)}
      {getString(image)}
      {getString(aboutBio)}
      <br />
      <Footer footerData={footerData} />
    </>
  );
}
