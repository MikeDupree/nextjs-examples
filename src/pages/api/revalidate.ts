// @ts-ignore
export default async function handler({ query }, res) {
  console.log('query', query);
  if (!query.uri) {
    return res.status(400).json({ message: 'Missing uri param' });
  }

  try {
    await res.unstable_revalidate(query.uri);
    return res.json({ revalidated: true, uri: query.uri });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send({ revalidated: false, uri: query.uri, error: err });
  }
}
