import styled, { css } from "styled-components";

interface ItemProps {
  done?: boolean;
}
export const Item = styled.li<ItemProps>`
  display: flex;
  justify-content: space-between;
  text-align: left;
  align-items: center;
  border: 1px solid black;
  margin: 1em;
  padding: 0.5em;
  border-radius: 10px;

  p {
    margin-bottom: 0;
  }

  img {
    width: 20px;
    height: 20px;
  }

  ${(props) =>
    props.done
      ? css`
          text-decoration: line-through;
          color: gray;
          background-color: lightgreen;
          border: 1px solid gray;
          cursor: not-allowed;
        `
      : ``}
`;
