import Title from 'components/Title/Title';

const Filter = ({ filterChange }) => {
  return (
    <>
      <Title title="Find contacts by name" />
      <label>
        <input type="text" name="" id="" onChange={e => filterChange(e)} />
      </label>
    </>
  );
};

export default Filter;
