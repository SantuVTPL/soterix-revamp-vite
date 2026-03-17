import Switch, { switchClasses, type SwitchProps } from "@mui/joy/Switch";

export interface CustomSwitchProps extends Omit<SwitchProps, "variant"> {}

export default function CustomSwitch({ ...props }: CustomSwitchProps) {
  return (
    <Switch
      variant={props.checked ? "solid" : "outlined"}
      sx={() => ({
        display: "inherit",
        "--Switch-trackWidth": "18px",
        "--Switch-trackHeight": "11px",
        "--Switch-thumbSize": "5px",
        "--Switch-thumbBackground": "var(--text-tertiary)",
        "--Switch-trackBorderColor": "var(--text-tertiary)",
        "--Switch-trackBackground": "transparent",
        "&:hover": {
          "--Switch-trackBorderColor": "var(--text-tertiary)",
          "--Switch-trackBackground": "transparent",
        },
        [`&.${switchClasses.checked}`]: {
          "--Switch-trackBackground": "var(--button-default)",
          "--Switch-trackBorderColor": "var(--button-default)",
          "--Switch-thumbBackground": "var(--button-primary-text)",
          "&:hover": {
            "--Switch-trackBackground": "var(--button-default)",
          },
        },
        [`&.${switchClasses.disabled}`]: {
          "--Switch-thumbBackground": "var(--button-disable)",
          "--Switch-trackBorderColor": "var(--button-disable)",
          "--Switch-trackBackground": "transparent",
        },
        [`&.${switchClasses.disabled}.${switchClasses.checked}`]: {
          "--Switch-trackBackground": "var(--button-disable)",
          "--Switch-thumbBackground": "var(--button-primary-text)",
        },
      })}
      {...props}
    />
  );
}
