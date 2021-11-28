import Prismic from 'prismic-javascript';

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME;
export const API_URL = `https://${REPOSITORY}.cdn.prismic.io/api/v2`;
export const API_TOKEN = process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN;

const DOCUMENT_TYPE = 'document.type';

export const client = Prismic.client(API_URL, { accessToken: API_TOKEN });

export async function getHomePage() {
  const { data } = await client.getSingle('home_page', {});
  return data;
}

export async function getAboutPage() {
  const { data } = await client.getSingle('about_page', {});
  return data;
}

export async function getWorkPage() {
  const { data } = await client.getSingle('work_page', {});
  return data;
}

export async function getProjects() {
  const { results } = await client.query(Prismic.Predicates.at(DOCUMENT_TYPE, 'project'));

  return results.map((p) => {
    return {
      uid: p.uid,
      title: p.data.project_title,
    };
  });
}

export async function getProject(uid) {
  const { data } = await client.getByUID('project', uid, {});
  return {
    title: data.project_title,
  };
}

export async function getNavigationLinks(ids) {
  const { results } = await client.getByIDs(ids);
  return results.map((item) => ({
    uid: item.uid,
    title: item.data.link_title,
    subtitle: item.data.link_subtitle,
    link: item.data.link,
  }));
}
export async function getNavigation() {
  const {
    data: { navigation_links },
  } = await client.getSingle('navigation', {});
  const navigationLinkIds = navigation_links.map((item) => item.navigation_link.id);
  const navigationLinksIds = await getNavigationLinks(navigationLinkIds);

  return navigationLinksIds;
}

export async function getFooter() {
  const { data } = await client.getSingle('footer', {});
  return data;
}
