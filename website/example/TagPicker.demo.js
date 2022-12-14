import React from 'react';
import TagPicker from '@igloo-ui/tag-picker';

const mockData = [
  {
    id: '1',
    text: 'A team',
    color: '#FF0000',
  },
  {
    id: '2',
    text: 'Just a simple team',
    color: '#7f34d8',
  },
  {
    id: '3',
    text: "Bob O'Bob",
    subtext: 'bob@bob.bob',
    src: 'https://cdn-stg.officevibe-dev.com/assets/avatars/avatar-0.svg',
  },
  {
    id: '4',
    text: 'Bob Warning',
    src: 'https://cdn-stg.officevibe-dev.com/assets/avatars/avatar-1.svg',
  },
  {
    id: '5',
    text: 'Sponge Bob',
    subtext: 'sponge@bob.dot',
  },
  {
    id: '6',
    text: "This user's name is very loooooooooooooooooong",
    src: 'https://cdn-stg.officevibe-dev.com/assets/avatars/avatar-2.svg',
  },
];

const Example = () => {
  const [selected, setSelected] = React.useState([]);
  const [results, setResults] = React.useState([]);

  const onInput = (value) => {
    setResults(
      mockData.filter(
        (d) =>
          d.text.toLowerCase().includes(value.toLowerCase()) &&
          !selected.includes(d)
      )
    );
  };

  const select = (id) => {
    const selectedItem = mockData.find((d) => d.id === id);
    if (selectedItem) {
      setSelected([...selected, selectedItem]);
    } else {
      setSelected([...selected]);
    }
  };

  const remove = (id) => {
    setSelected(selected.filter((s) => s.id !== id));
  };

  return (
    <div
      className="example"
      style={{ paddingLeft: '6em', paddingRight: '6em' }}
    >
      <TagPicker
        results={results}
        selectedResults={selected}
        onInput={onInput}
        onSelection={select}
        onTagRemove={remove}
        noResultsText="No results"
        placeholder="Enter Team or Bob"
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default Example;
