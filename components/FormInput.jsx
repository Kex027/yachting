import style from "../styles/form.module.css";
import { FormLabel, Input, Stack } from "@mui/joy";
import MotionSection from "./MotionSection.jsx";

const FormInput = ({ label, register, required = false }) => {
  return (
    <Stack gap={1} className={style.inputWrapper}>
      <MotionSection>
        <FormLabel sx={{ color: "black" }}>{label}</FormLabel>
      </MotionSection>
      <MotionSection>
        <Input
          sx={{
            borderRadius: 0,
            backgroundColor: "var(--light-blue)",
            color: "var(--primary)",
            "--Input-radius": "0",
          }}
          className={style.input}
          variant={"soft"}
          color={"primary"}
          required={required}
          slotProps={{
            input: register,
          }}
        />
      </MotionSection>
    </Stack>
  );
};

export default FormInput;
