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
      description: p.data.project_description,
    };
  });
}

export async function getProject(uid) {
  const { data } = await client.getByUID('project', uid, {});
  return {
    title: data.project_title,
    description: data.project_description,
  };
}

export async function getNavigation() {
  const { data } = await client.getSingle('navigation', {});
  return data;
}

export async function getFooter() {
  const { data } = await client.getSingle('footer', {});
  return data;
}
