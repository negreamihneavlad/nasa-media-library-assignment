import styled, { css } from 'styled-components'

export const PaginationItem = styled.div<{ isActive: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  margin: 0 5px;
  font-weight: ${(props) => props.theme.fontWeightLight};
  font-size: 10px;
  color: ${(props) => props.theme.grayDarker};
  cursor: pointer;

  ${(props) =>
    props.isActive &&
    css`
      border-radius: 2px;
      background-color: ${(props) => props.theme.brandPrimary};
      color: white;
    `};
`

export const PaginationControl = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.brandDefault};

  &:first-child {
    margin-right: 10px;
  }

  &:last-child {
    margin-left: 10px;
  }
`

export const Pagination = styled.div<{
  withoutFirstControl: boolean
  withoutLastControl: boolean
}>`
  display: flex;
  margin: 20px auto;
  text-align: center;
  align-items: center;
  user-select: none;

  ${(props) =>
    props.withoutFirstControl &&
    css`
      padding-left: 59px;
    `};

  ${(props) =>
    props.withoutLastControl &&
    css`
      padding-right: 37px;
    `};
`
