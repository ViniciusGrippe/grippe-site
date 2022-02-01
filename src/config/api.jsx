import fetch from 'isomorphic-unfetch';
const baseUrl = 'https://zukt-faq.host.zukt.cloud';

async function fetcher(...args) {
  const res = await fetch(...args);
  return res.json();
}

export { baseUrl, fetcher };
