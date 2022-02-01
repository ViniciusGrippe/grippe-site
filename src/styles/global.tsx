import styled, { createGlobalStyle, css } from 'styled-components';

interface Props {
  as?: string;
  variant?: string;
  gutter?: string;
  textAlign?: any;
  error?: boolean;
  truncated?: string;
  display?: any;
  order?: any;
  borderRadius?: any;
  width?: any;
  margin?: any;
  background?: string;
  justifyContent?: any;
  alignItems?: any;
  padding?: any;
  wrap?: any;
  direction?: any;
  spacing?: any;
  pride?: boolean;
}

export const GlobalStyle = createGlobalStyle`
    *{
      padding: 0;
      margin: 0;
      font-family: 'Poppins', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-size: 14px;
    }
    a{
      text-decoration: none;
    }
    ::selection {
      background-color: #5C81AC80;
    }
    body{
      font-size: 14px;
      background-color: #E5E9F099;
      overflow-x: hidden;
    }
`;

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const ImageCard = styled.img`
  width: calc(100% + 40px);
  object-fit: cover;
  object-position: center;
  height: 120px;
  margin: -20px -20px 0 -20px;
  border-bottom: 1px solid #d8dee9;
`;

export const Dot = styled.div<Props>`
  padding: 4px;
  background: ${(props) => props.color};
  border-radius: 50%;
`;

export const Card = styled.div<Props>`
  background-color: #fff;
  overflow: hidden;
  border-radius: 10px;
  padding: 20px 20px;
  box-shadow: 0 5px 8px -8px #ccc;
  border: 1px solid #e5e9f0;
  transition: 300ms all ease;

  &:hover {
    border: 1px solid #d8dee9;
    background-color: #f9f9fb;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  /* filter: grayscale(1);
  opacity: 0.4; */
  background-color: #e5e9f0;
  width: 36px;
  height: 36px;
  object-fit: cover;
  object-position: center;
`;

export const Input = styled.input`
  padding: 20px 25px;
  background-color: #ffffff50;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 300;
  color: #fff;
  border: 0;
  outline: 0;
  width: -webkit-fill-available;
  width: -moz-fill-available;
  transition: 300ms all ease;
  position: relative;
  &::placeholder {
    color: #ffffffaa;
  }
  &:hover {
    background-color: #ffffff85;
  }
  &:focus {
    color: #222;
    background-color: #ffffff;
    font-weight: 300;
    box-shadow: 0 5px 40px -15px #4068a090;
  }
`;

export const Button = styled.button<Props>`
  display: inline-flex;
  gap: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 0;
  white-space: nowrap;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1;
  transition: 700ms all ease;
  cursor: pointer;

  background-size: 100%;
  background-position: center;

  padding: 15px 20px;
  border-radius: 10px;
  background: #d8dee9;
  color: #2e3440;

  &:hover {
    background: #c6ccd7;
  }

  &:active {
  }

  ${(props) =>
    props.variant === 'ghost' &&
    css`
      background: #f9f9fb;
      ${props.color === 'green' &&
      css`
        background: #c6f6d5;
        color: #21543d;
        &:hover {
          background: #c6f6d5;
          color: #21543d;
        }
      `}
      ${props.color === 'orange' &&
      css`
        background: #fed7d7;
        color: #822727;
        &:hover {
          background: #fed7d7;
          color: #822727;
        }
      `}
      ${props.color === 'blue' &&
      css`
        background: #d1edfd;
        color: #1d475f;
        &:hover {
          background: #d1edfd;
          color: #1d475f;
        }
      `}
      &:hover {
        opacity: 0.85;
        background: #e5e9f0;
      }
    `}

  ${(props) =>
    props.variant === 'actived' &&
    css`
      background: #e5e9f0;
      &:hover {
        opacity: 0.85;
        background: #f9f9fb;
      }
    `}

  ${(props) =>
    props.variant === 'icon' &&
    css`
      background: transparent;
      padding: 15px;
      border-radius: 50%;
      &:hover {
        background: #e4e9ef;
      }
    `}
    ${(props) =>
    props.pride &&
    css`
      background: transparent;
      padding: 15px 12px;
      &:hover {
        background: #e4e9ef;
        background-image: linear-gradient(
          43deg,
          #4158d020 0%,
          #c850c020 46%,
          #ffcc7020 100%
        );
      }
    `}

  &:active {
    opacity: 0.85;
  }
`;

export const Text = styled.p<Props>`
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.8;
  font-weight: 400;
  color: #2e3440;

  margin-bottom: ${(props) => props.gutter};

  text-align: ${(props) =>
    (Array.isArray(props.textAlign) ? props.textAlign[0] : props.textAlign) ||
    `left`};

  @media only screen and (max-width: 1024px) {
    ${(props) => css`
      text-align: ${Array.isArray(props.textAlign)
        ? props.textAlign[1]
        : props.textAlign};
    `}
  }

  @media only screen and (max-width: 768px) {
    ${(props) => css`
      text-align: ${Array.isArray(props.textAlign)
        ? props.textAlign[2]
        : props.textAlign};
    `}
  }

  @media only screen and (max-width: 414px) {
    ${(props) => css`
      text-align: ${Array.isArray(props.textAlign)
        ? props.textAlign[3]
        : props.textAlign};
    `}
  }

  ${(props) =>
    props.truncated &&
    css`
      display: -webkit-box;
      max-width: 100%;
      -webkit-line-clamp: ${props.truncated};
      -webkit-box-orient: vertical;
      overflow: hidden;
    `}

  ${(props) =>
    props.variant === 'title' &&
    css`
      font-weight: 600;
      font-size: 1.2rem;
    `}

  ${(props) =>
    props.variant === 'subtitle' &&
    css`
      font-weight: 500;
      font-size: 1rem;
      color: #5e81ac;
    `}
`;

export const Tag = styled.div`
  padding: 13px 10px;
  font-size: 0.85rem;
  color: #1d475f;
  font-weight: 600;
  background: #d1edfd;
  border-radius: 5px;
  width: fit-content;
`;

export const Box = styled.div<Props>`
  display: ${(props) =>
    Array.isArray(props.display) ? props.display[0] : props.display};
  order: ${(props) =>
    Array.isArray(props.order) ? props.order[0] : props.order};
  margin: ${(props) =>
    Array.isArray(props.margin) ? props.margin[0] : props.margin};
  border-radius: ${(props) => props.borderRadius};
  background: ${(props) => props.background};
  text-align: ${(props) => props.textAlign};
  width: ${(props) =>
    Array.isArray(props.width)
      ? props.width[0]
      : props.width || '-webkit-fill-available'};
  align-items: ${(props) =>
    (Array.isArray(props.alignItems)
      ? props.alignItems[0]
      : props.alignItems) || `center`};

  justify-content: ${(props) =>
    (Array.isArray(props.justifyContent)
      ? props.justifyContent[0]
      : props.justifyContent) || `flex-start`};
  line-height: 0;

  ${(props) =>
    Array.isArray(props.padding)
      ? css`
          padding: ${props.padding[0]};
        `
      : css`
          padding: ${props.padding};
        `}

  @media only screen and (max-width: 1024px) {
    ${(props) => css`
      order: ${Array.isArray(props.order) ? props.order[1] : props.order};

      display: ${Array.isArray(props.display)
        ? props.display[1]
        : props.display};

      margin: ${Array.isArray(props.margin) ? props.margin[1] : props.margin};

      padding: ${Array.isArray(props.padding)
        ? props.padding[1]
        : props.padding};

      width: ${(Array.isArray(props.width) ? props.width[1] : props.width) ||
      `-webkit-fill-available`};

      align-items: ${(Array.isArray(props.alignItems)
        ? props.alignItems[1]
        : props.alignItems) || `center`};

      justify-content: ${(Array.isArray(props.justifyContent)
        ? props.justifyContent[1]
        : props.justifyContent) || `flex-start`};
    `}
  }
  @media only screen and (max-width: 768px) {
    ${(props) => css`
      order: ${Array.isArray(props.order) ? props.order[2] : props.order};

      display: ${Array.isArray(props.display)
        ? props.display[2]
        : props.display};

      margin: ${Array.isArray(props.margin) ? props.margin[2] : props.margin};

      padding: ${Array.isArray(props.padding)
        ? props.padding[2]
        : props.padding};

      width: ${(Array.isArray(props.width) ? props.width[2] : props.width) ||
      `-webkit-fill-available`};

      align-items: ${(Array.isArray(props.alignItems)
        ? props.alignItems[2]
        : props.alignItems) || `center`};

      justify-content: ${(Array.isArray(props.justifyContent)
        ? props.justifyContent[2]
        : props.justifyContent) || `flex-start`};
    `}
  }
  @media only screen and (max-width: 414px) {
    ${(props) => css`
      order: ${Array.isArray(props.order) ? props.order[3] : props.order};

      display: ${Array.isArray(props.display)
        ? props.display[3]
        : props.display};

      margin: ${Array.isArray(props.margin) ? props.margin[3] : props.margin};

      padding: ${Array.isArray(props.padding)
        ? props.padding[3]
        : props.padding};

      width: ${(Array.isArray(props.width) ? props.width[3] : props.width) ||
      `-webkit-fill-available`};

      align-items: ${(Array.isArray(props.alignItems)
        ? props.alignItems[3]
        : props.alignItems) || `center`};

      justify-content: ${(Array.isArray(props.justifyContent)
        ? props.justifyContent[3]
        : props.justifyContent) || `flex-start`};
    `}
  }
`;

export const Stack = styled.div<Props>`
  display: inline-flex;
  width: -webkit-fill-available;

  flex-wrap: ${(props) =>
    (Array.isArray(props.wrap) ? props.wrap[0] : props.wrap) || `nowrap`};

  flex: ${(props) =>
    (Array.isArray(props.width) ? props.width[0] : props.width) || `1`};

  flex-direction: ${(props) =>
    (Array.isArray(props.direction) ? props.direction[0] : props.direction) ||
    `column`};

  padding: ${(props) =>
    Array.isArray(props.padding) ? props.padding[0] : props.padding};

  align-items: ${(props) =>
    (Array.isArray(props.alignItems)
      ? props.alignItems[0]
      : props.alignItems) || `flex-start`};

  justify-content: ${(props) =>
    (Array.isArray(props.justifyContent)
      ? props.justifyContent[0]
      : props.justifyContent) || `flex-start`};

  gap: ${(props) =>
    Array.isArray(props.spacing) ? props.spacing[0] : props.spacing};

  @media only screen and (max-width: 1024px) {
    ${(props) => css`
      flex-direction: ${(Array.isArray(props.direction)
        ? props.direction[1]
        : props.direction) || props.direction};

      flex: ${(Array.isArray(props.width) ? props.width[1] : props.width) ||
      `-webkit-fill-available`};

      padding: ${Array.isArray(props.padding)
        ? props.padding[1]
        : props.padding};

      align-items: ${(Array.isArray(props.alignItems)
        ? props.alignItems[1]
        : props.alignItems) || `flex-start`};

      justify-content: ${(Array.isArray(props.justifyContent)
        ? props.justifyContent[1]
        : props.justifyContent) || `flex-start`};

      gap: ${Array.isArray(props.spacing) ? props.spacing[1] : props.spacing};

      flex-wrap: ${(Array.isArray(props.wrap) ? props.wrap[1] : props.wrap) ||
      `nowrap`};
    `}
  }
  @media only screen and (max-width: 768px) {
    ${(props) => css`
      flex-direction: ${(Array.isArray(props.direction)
        ? props.direction[2]
        : props.direction) || props.direction};

      flex: ${(Array.isArray(props.width) ? props.width[2] : props.width) ||
      `-webkit-fill-available`};

      padding: ${Array.isArray(props.padding)
        ? props.padding[2]
        : props.padding};

      align-items: ${(Array.isArray(props.alignItems)
        ? props.alignItems[2]
        : props.alignItems) || `flex-start`};

      justify-content: ${(Array.isArray(props.justifyContent)
        ? props.justifyContent[2]
        : props.justifyContent) || `flex-start`};

      gap: ${Array.isArray(props.spacing) ? props.spacing[2] : props.spacing};

      flex-wrap: ${(Array.isArray(props.wrap) ? props.wrap[2] : props.wrap) ||
      `nowrap`};
    `}
  }

  @media only screen and (max-width: 414px) {
    ${(props) => css`
      flex-direction: ${(Array.isArray(props.direction)
        ? props.direction[3]
        : props.direction) || props.direction};

      flex: ${(Array.isArray(props.width) ? props.width[3] : props.width) ||
      `-webkit-fill-available`};

      padding: ${Array.isArray(props.padding)
        ? props.padding[3]
        : props.padding};

      align-items: ${(Array.isArray(props.alignItems)
        ? props.alignItems[3]
        : props.alignItems) || `flex-start`};

      justify-content: ${(Array.isArray(props.justifyContent)
        ? props.justifyContent[3]
        : props.justifyContent) || `flex-start`};

      gap: ${Array.isArray(props.spacing) ? props.spacing[3] : props.spacing};

      flex-wrap: ${(Array.isArray(props.wrap) ? props.wrap[3] : props.wrap) ||
      `nowrap`};
    `}
  }
`;
