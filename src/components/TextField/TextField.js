import React from 'react'

import styled from 'styled-components'

import TextField from '@material-ui/core/TextField'

const StyledTextField = styled(TextField)`
  label.focused {
    color: ${(props) => props.color};
  }
  .MuiOutlinedInput-root {
    color: ${(props) => props.color};

    fieldset {
      border-color: ${(props) => props.color};
    }
    &:hover fieldset {
      border-color: ${(props) => props.color};
    }
    &.Mui-focused fieldset {
      border-color: ${(props) => props.color};
    }
  }
`

export const MambaTextField = ({ ...props }) => {
  return <StyledTextField {...props} />
}
