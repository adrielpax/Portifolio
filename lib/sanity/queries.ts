import { groq } from "next-sanity";

export const postsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id, title, "slug": slug.current, excerpt, coverImage, tags,
    publishedAt, featured
  }
`;

export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)].slug.current
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id, title, "slug": slug.current, excerpt, coverImage, tags,
    publishedAt, body, seoTitle, seoDescription
  }
`;

export const projectsQuery = groq`
  *[_type == "project"] | order(order asc, _createdAt desc) {
    _id, title, username, description, image, link
  }
`;

export const certificationsQuery = groq`
  *[_type == "certification"] | order(order asc, _createdAt desc) {
    _id, title, issuer, logo, credentialUrl, issuedAt
  }
`;

export const championProjectsQuery = groq`
  *[_type == "championProject"] | order(order asc, _createdAt desc) {
    _id, title, image, description, protectionText, link
  }
`;
