import { StyledButton, StyledInput, StyledLabel } from './searchForm.styled';

const SearchForm = ({ onSubmitHandler }) => {
  return (
    <form action="#" onSubmit={onSubmitHandler}>
      <StyledLabel>
        <StyledInput
          type="text"
          name="query"
          autoFocus
          placeholder="What movie do you wish to find?"
        />
        <StyledButton type="submit">🔎</StyledButton>
      </StyledLabel>
    </form>
  );
};

export default SearchForm;
