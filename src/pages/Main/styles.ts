import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 48px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  button {
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 780px) {
    flex-direction: column;
    button {
      width: 100%;
      margin-right: 0;
      margin-bottom: 16px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export const Button = styled.button`
  background-color: #943ec3;
  color: white;
  padding: 16px 24px;
  border-radius: 24px;
  min-width: 180px;
  transition: 300ms ease;

  &.reset {
    background-color: #00b1ff;
    color: white;
  }

  &:hover {
    opacity: 0.9;
  }
`;

export const Box = styled.section`
  padding: 48px;
  background-color: #1f242b;
  border-radius: 16px;
  margin-bottom: 48px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.25);
  transition: 300ms ease;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 16px;
`;

export const Subtitle = styled.h5`
  font-size: 14px;
  margin-bottom: 8px;
`;

export const Text = styled.article`
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 24px;
  color: rgba(255, 255, 255, 0.7);
`;

export const Code = styled.article`
  font-family: "GilroySemiBold";
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 24px;
  color: rgba(255, 255, 255, 0.5);

  pre {
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 2;
    overflow-x: auto;
  }
`;
