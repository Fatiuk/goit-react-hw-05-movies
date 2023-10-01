import styled from 'styled-components';

export const SearchbarWrap = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: inherit;
  background-color: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid #004d40;
`;

export const SearchbarForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #2f2f2f38;
  border-radius: 3px;
  overflow: hidden;
  &:focus-within {
    box-shadow: 0 0 5px 0.1px #004d40;
  }
`;

export const SearchbarButton = styled.button`
  background-color: #5e5e5e38;
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url('https://cdn-icons-png.flaticon.com/512/7764/7764491.png');
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const SearchbarSpan = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchbarInput = styled.input`
  background-color: transparent;
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
