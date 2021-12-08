import { NavLink } from 'react-router-dom';

export interface NavLinkProps {
  text: string;
  to: string;
}

const inactive =
  'inline-block px-4 py-2 text-gray-600 no-underline hover:text-gray-900 hover:text-underline';
const active = `${inactive} font-bold text-gray-900`;

export const StyledNavLink = ({ text, to }: NavLinkProps) => (
  <NavLink className={({ isActive }) => (isActive ? active : inactive)} to={to}>
    {text}
  </NavLink>
);
