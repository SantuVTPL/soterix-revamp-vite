import { Button as MuiButton, type ButtonProps as MuiButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Close } from "@icon-park/react";
import type { MouseEvent } from "react";

// ============================================
// PRIMARY BUTTON
// Solid background using CSS variables
// ============================================
const PrimaryButton = styled(MuiButton)(() => ({
  backgroundColor: "var(--button-default)",
  color: "var(--button-primary-text)",
  padding: '12px 16px',
  lineHeight: "var(--line-height-auto)",
  fontSize: "var(--font-size-sm)",
  fontWeight: "var(--font-medium)",
  fontFamily: "var(--font-primary)",
  borderRadius: "var(--button-radius30)",

  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "var(--button-hover)",
    color: "var(--button-primary-text)",
  },
  "&:disabled": {
    backgroundColor: "var(--button-disable)",
    color: "var(--button-primary-text)",
  },
}));

// ============================================
// SECONDARY BUTTON
// Transparent/outline style with border
// ============================================
const SecondaryButton = styled(MuiButton)(() => ({
  backgroundColor: "transparent",
  color: "var(--border3)",
  padding: "11px 16px",
  lineHeight: "var(--line-height-auto)",
  fontSize: "var(--font-size-sm)",
  fontWeight: "var(--font-medium)",
  fontFamily: "var(--font-primary)",
  borderRadius: "var(--button-radius30)",
  minWidth: "100px",
  border: "1px solid var(--button-cta)",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "var(--button-secondary-hover)",
    color: "var(--button-default)",
  },
  "&:disabled": {
    backgroundColor: "transparent",
    color: "var(--button-primary-text)",
    borderColor: "var(--button-disable)",
  },
}));

// ============================================
// TERTIARY BUTTON
// Text-only style, no background, fits content
// ============================================
const TertiaryButton = styled(MuiButton)(() => ({
  backgroundColor: "transparent",
  color: "var(--button-default)",
  padding: "0",
  fontSize: "var(--font-size-sm)",
  fontWeight: "var(--font-medium)",
  fontFamily: "var(--font-primary)",
  borderRadius: "0",
  minWidth: "auto",
  minHeight: "auto",
  border: "none",
  lineHeight: "var(--line-height-auto)",
  transition: "color 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "transparent",
    color: "var(--button-hover)",
  },
  "&:disabled": {
    backgroundColor: "transparent",
    color: "var(--button-disable)",
  },
}));

// ============================================
// PILLS BUTTON
// Tag-style button with close icon
// ============================================
const PillsButtonBase = styled(MuiButton)(() => ({
  backgroundColor: "var(--menubar)",
  color: "var(--text-primary)",
  padding: "7px 12px",
  fontSize: "var(--font-size-sm)",
  fontWeight: "var(--font-regular)",
  fontFamily: "var(--font-primary)",
  lineHeight: "var(--line-height-auto)",
  borderRadius: "var(--button-radius30)",
  minWidth: "auto",
  gap: "8px",
  border: "1px solid var(--border)",
  transition: "all 0.2s ease-in-out",
  "& .MuiButton-endIcon": {
    marginLeft: "0",
    marginRight: "0",
  },
  "&:hover": {
    backgroundColor: "var(--surface)",
    borderColor: "var(--border)",
  },
  "&:disabled": {
    backgroundColor: "var(--button-disable)",
    color: "var(--button-primary-text)",
    borderColor: "var(--border)",
  },
}));

interface PillsButtonProps extends Omit<MuiButtonProps, "endIcon"> {
  onClose?: () => void;
  showCloseIcon?: boolean;
}

export function PillsButton({
  children,
  onClose,
  showCloseIcon = true,
  disabled,
  ...props
}: PillsButtonProps) {
  const handleCloseClick = (e: MouseEvent) => {
    e.stopPropagation();
    onClose?.();
  };

  return (
    <PillsButtonBase
      disabled={disabled}
      endIcon={
        showCloseIcon ? (
          <Close
            size={12}
            onClick={!disabled ? handleCloseClick : undefined}
            style={{ 
                cursor: disabled ? "default" : "pointer", 
                color: disabled ? "var(--button-primary-text)" : "var(--text-primary)" 
            }}
          />
        ) : undefined
      }
      {...props}
    >
      {children}
    </PillsButtonBase>
  );
}

// ============================================
// UNIFIED CUSTOM BUTTON COMPONENT
// Supports all variants through a single component
// ============================================
type CustomButtonVariant = "primary" | "secondary" | "tertiary" | "pills";

interface CustomButtonProps extends Omit<MuiButtonProps, "variant"> {
  variant?: CustomButtonVariant;
  onClose?: () => void;
  showCloseIcon?: boolean;
}

export function CustomButton({
  variant = "primary",
  children,
  onClose,
  showCloseIcon = true,
  ...props
}: CustomButtonProps) {
  switch (variant) {
    case "primary":
      return <PrimaryButton {...props}>{children}</PrimaryButton>;
    case "secondary":
      return <SecondaryButton {...props}>{children}</SecondaryButton>;
    case "tertiary":
      return <TertiaryButton {...props}>{children}</TertiaryButton>;
    case "pills":
      return (
        <PillsButton onClose={onClose} showCloseIcon={showCloseIcon} {...props}>
          {children}
        </PillsButton>
      );
    default:
      return <PrimaryButton {...props}>{children}</PrimaryButton>;
  }
}

export default CustomButton;
