import { TextField, type TextFieldProps } from "@mui/material";
import { styled } from "@mui/material/styles";

// ============================================
// STANDARD INPUT
// Square shaped text input
// States: default, hover, active, disabled
// ============================================

const StyledStandardInput = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "var(--surface)",
    borderRadius: "var(--radius8)",
    fontFamily: "var(--font-primary)",
    fontSize: "var(--font-size-sm)",
    color: "var(--text-tertiary)",
    height: "41px",
    padding: "10px 16px",
    transition: "all 0.2s ease-in-out",

    "& fieldset": {
      borderColor: "var(--border)",
      borderWidth: "1px",
      transition: "border-color 0.2s ease-in-out",
    },

    "&.Mui-focused": {
        backgroundColor: "var(--surface) !important",
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

export interface StandardInputProps extends Omit<TextFieldProps, "variant"> {
  placeholder?: string;
}

export function StandardInput({
  placeholder = "Placeholder",
  disabled = false,
  label,
  ...props
}: StandardInputProps) {
  return (
    <div>
        {
            label && (
                <p className="text-sm mb-2">{label}</p>
            )
        }
        <StyledStandardInput
          variant="outlined"
          placeholder={placeholder}
          disabled={disabled}
          autoComplete="off"
          {...props}
        />
    </div>
  );
}

export default StandardInput;
