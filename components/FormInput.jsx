import style from "../styles/form.module.css";
import { FormLabel, Input, Stack } from "@mui/joy";
import MotionSection from "./MotionSection.jsx";

const FormInput = ({ label, register, required = false, max = 50 }) => {
  return (
    <Stack gap={1} className={style.inputWrapper}>
      <MotionSection>
        <FormLabel sx={{ color: "black", fontSize: "1rem" }}>{label}</FormLabel>
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
          size={"lg"}
          required={required}
          slotProps={{
            input: {
              ...register,
              maxLength: max,
            },
          }}
        />
      </MotionSection>
    </Stack>
  );
};

export default FormInput;
