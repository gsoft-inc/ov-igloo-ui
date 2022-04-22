export default function Components(props) {
  const { components } = props;
  const componentsList = components.map((component, index) => {
    return (
      <li key={index.toString()}>
        <a href={`/component/${component}`}>{component}</a>
      </li>
    );
  });
  return (
    <>
      <section className="io-section io-section--tight io-container">
        <h1 className="io-h1">Liste des composants</h1>
        <ul>{componentsList}</ul>
      </section>
    </>
  );
}

export const getStaticProps = async () => {
  const components = require('../../data/components.json');
  return {
    props: {
      components,
    },
  };
};
