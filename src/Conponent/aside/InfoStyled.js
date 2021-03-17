import styled from "styled-components";

const Wrapper = styled.div`
  width: 350px;
  padding: 25px;
  background-color: #04668c;
  color: white;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.63;

  .info__title {
    font-weight: 700;
    font-size: 35px;
    line-height: 1.63;
    margin-bottom: 20px;
  }
  .info__title-second {
    font-weight: 700;
    font-size: 25px;
    line-height: 1.63;

    margin-left: 15px;
    margin-bottom: 15px;
  }
  .info__title-second:first-child {
    margin-top: 30px;
  }
  .info__img {
    width: 300px;
    border-radius: 20px;
  }
  .info__contacts {
  }
  .info__list {
  }
  .info__list-item {
    display: flex;
    flex-direction: row;
  }
  .info__list-item:not(:last-child) {
    margin-bottom: 10px;
  }
  .info__list-link {
    color: inherit;
    display: flex;
    flex-direction: row;
    transition: 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .info__list-link:hover,
  .info__list-link:focus {
    color: #ebaca2;
  }
  .info__list-icon {
    margin-right: 15px;
  }
`;

export default Wrapper;
