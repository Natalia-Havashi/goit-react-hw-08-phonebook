import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//Layout
export const Header = styled.header`
  background-color: #333;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Main = styled.main`
  background-image: url('https://images.unsplash.com/photo-1488998427799-e3362cec87c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//Navigation
export const ContainerNav = styled.div`
  display: flex;
  align-items: center;
`;

export const NavUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const LinkNav = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-right: 15px;

  &:hover {
    text-decoration: underline;
  }
`;

//User Menu
export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  div {
    margin-right: 10px;
  }
  p {
    margin: 0;
    font-weight: bold;
    color: white;
  }
  button {
    width: 150px;
    background-color: #d3d3d3;
    border: none;
    border-radius: 10px;
    color: black;
    padding: 10px;
    cursor: pointer;
  }
`;

//Auth
export const AuthWrapper = styled.div`
  ul {
    list-style: none;
    padding: 0;
    display: flex;

    li {
      margin-right: 15px;

      a {
        text-decoration: none;
        color: white;
        font-weight: bold;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

//Contact
export const ContactItem = styled.li`
  margin-bottom: 10px;
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #f7f7f7;
  }
`;
export const ContactDetails = styled.span`
  margin-right: 5px;
`;
export const DeleteBtn = styled.button`
  background-color: #ff585f;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #e84141;
  }
`;

//Filter
export const FilterContainer = styled.div`
  margin-bottom: 20px;
`;
export const FilterTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 5px;
`;
export const FilterInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ddd;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #5ec576;
  }
`;

//Contact List
export const ContactListContainer = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 400px;
  margin: 0 auto;
`;
export const NoContactsMessage = styled.p`
  font-size: 18px;
  color: #888;
`;

//Form
export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const LabelForm = styled.label`
  margin-bottom: 5px;
  font-size: 16px;
`;
export const InputForm = styled.input`
  padding: 10px;
  font-size: 14px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #5ec576;
  }
`;

export const SubmitBtn = styled.button`
  background-color: #5ec576;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4bbb7d;
  }
`;
