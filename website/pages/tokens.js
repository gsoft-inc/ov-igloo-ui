export default function Tokens(props) {
  console.log('props', props.data);
  return <div>Tokens page</div>;
}

export async function getStaticProps() {
  const res = await fetch(
    'https://raw.githubusercontent.com/gsoft-inc/ov-igloo-tokens/main/docs/base10/tokens.json'
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
