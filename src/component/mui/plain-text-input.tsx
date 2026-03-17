import { TextField, type TextFieldProps } from "@mui/material";
import { styled } from "@mui/material/styles";

// ============================================
// PLAIN TEXT INPUT
// Pill-shaped text input
// States: default, hover, active, disabled
// ============================================

const StyledPlainTextInput = styled(TextField)(() => ({
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
        borderColor: "var(--border2)",
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
}));

export interface PlainTextInputProps extends Omit<TextFieldProps, "variant"> {
  placeholder?: string;
}

export function PlainTextInput({
  placeholder = "Placeholder",
  disabled = false,
  ...props
}: PlainTextInputProps) {
  return (
    <StyledPlainTextInput
      variant="outlined"
      placeholder={placeholder}
      disabled={disabled}
      autoComplete="off"
      {...props}
    />
  );
}

export default PlainTextInput;
