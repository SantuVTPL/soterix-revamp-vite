import { TextField, type TextFieldProps, InputAdornment } from "@mui/material";
import { styled } from "@mui/material/styles";
import { IconSearch } from "@tabler/icons-react"

// ============================================
// SEARCH INPUT
// Pill-shaped search input with search icon
// States: default, hover, active, disabled
// ============================================

const StyledSearchInput = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "var(--menubar)",
    borderRadius: "var(--button-radius30)",
    fontFamily: "var(--font-primary)",
    fontSize: "var(--font-size-sm)",
    color: "var(--text-tertiary)",
    height: "41px",
    padding: "12px",
    transition: "all 0.2s ease-in-out",

    "& fieldset": {
      borderColor: "var(--border)",
      borderWidth: "1px",
      transition: "border-color 0.2s ease-in-out",
    },

    "&.Mui-focused": {
        backgroundColor: "var(--menubar) !important",
    },

    "&:hover": {
        backgroundColor: "var(--tree-surface)",
    },

    "&:hover fieldset": {
      borderColor: "var(--border3)",
    },

    "&.Mui-focused fieldset": {
      borderColor: "var(--button-default)",
      borderWidth: "1px",
    },

    "&.Mui-disabled": {
      backgroundColor: "var(--button-disable)",
      "& fieldset": {
        borderColor: "var(--button2)",
      },
      "& input": {
        color: "var(--button-primary-text)",
        WebkitTextFillColor: "var(--button-primary-text)",
      },
    },

    "& input": {
      padding: "8px 0",
      color: "var(--text-primary)",
      "&::placeholder": {
        color: "var(--text-tertiary)",
        opacity: 1,
      },
    },
  },

  "& .MuiInputAdornment-root": {
    color: "var(--text-tertiary)",
    marginRight: "8px",
    strokeWidth: "var(--icon-stroke)"
  },

  "& .Mui-focused .MuiInputAdornment-root": {
    color: "var(--button-default)"
  },

  "& .Mui-disabled .MuiInputAdornment-root": {
    color: "var(--button-primary-text)"
  },
}));

export interface SearchInputProps extends Omit<TextFieldProps, "variant"> {
  placeholder?: string;
}

export function SearchInput({
  placeholder = "Search",
  disabled = false,
  ...props
}: SearchInputProps) {
  return (
    <StyledSearchInput
      variant="outlined"
      placeholder={placeholder}
      disabled={disabled}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <IconSearch
                size={16}
                // style={{
                //   strokeWidth: "var(--icon-stroke)",
                //   color: disabled ? "var(--button-disable)" : "var(--text-tertiary)",
                // }}
              />
            </InputAdornment>
          ),
        },
      }}
      {...props}
    />
  );
}

export default SearchInput;
