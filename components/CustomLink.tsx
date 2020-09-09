import styled from "styled-components";
import Link from "next-translate/Link";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

import { colors } from "styles";
import { Text } from "./Typography";

type Props = {
  children: React.ReactNode;
  color?: string;
  underline?: boolean;
  nav?: boolean;
  to: string;
  className?: string;
};
type LinkProps = {
  color?: string;
  underline?: boolean;
  activeColor?: string;
  active?: boolean;
};

const CustomLink: React.FC<Props> = ({
  nav,
  color,
  underline,
  to,
  children,
  className,
}) => {
  const { pathname } = useRouter();
  const { lang } = useTranslation();

  return (
    <Link noLang href={nav ? `/${lang}${to}` : to} passHref>
      <A
        className={className}
        target={nav ? "" : "_blank"}
        rel="noopener noreferrer"
        active={pathname === `/${lang}${to}` ? true : false}
        underline={underline}
      >
        {children}
      </A>
    </Link>
  );
};

export default CustomLink;

const A = styled.a<LinkProps>`
  cursor: pointer;
  text-decoration: ${(p) => (p.underline ? "underline" : "inherit")};
  ${Text} {
    color: ${(p) => (p.active === true ? colors.primary : colors[p.color])};
  }
`;
