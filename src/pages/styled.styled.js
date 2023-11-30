import styled from 'styled-components';

//Home page
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1488998427799-e3362cec87c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 58px;
  font-weight: 600;
  color: #333;
  padding: 40px;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 34px;
  color: #555;
  background-color: #f0f0f0;
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
