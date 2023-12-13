import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding:  ${p=>p.theme.spacing(3)};
  font-weight: 700;
  color: ${p=>p.theme.colors.darkblue};

 &:hover {
    color: ${p=>p.theme.colors.red};
  }
`