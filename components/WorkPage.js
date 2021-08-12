import { getString } from '../lib/richText';
import Navigation from './Navigations';
import Footer from './Footer';

export default function WorkPage({ workPageData, navigationData, footerData }) {
  const { work_page_title: title, work_page_description: description } = workPageData;
  return (
    <div>
      <Navigation navigationData={navigationData} footerData={footerData} />
      <div>{getString(title)}</div>
      <div>{getString(description)}</div>
      <Footer footerData={footerData} />
    </div>
  );
}
