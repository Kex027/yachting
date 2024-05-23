import { Button, FormLabel, Stack, Textarea } from "@mui/joy";
import style from "../styles/form.module.css";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import MotionSection from "./MotionSection.jsx";
import FormInput from "./FormInput.jsx";
import MotionButton from "./MotionButton.jsx";

const Form = ({ firstTitle = "", secondTitle = "" }) => {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();
  //TODO add captcha
  const sendEmail = (data, e) => {
    e.preventDefault();

    console.log(data);
  };

  return (
    <Stack
      className={`${style.container} sectionInsetShadow`}
      alignItems={"center"}
    >
      <Stack className={"content"} gap={2}>
        <Stack>
          <MotionSection>
            <h1>{firstTitle?.toUpperCase()}</h1>
          </MotionSection>
          <MotionSection>
            <h2>{secondTitle?.toUpperCase()}</h2>
          </MotionSection>
        </Stack>

        <form onSubmit={handleSubmit(sendEmail)}>
          <Stack
            gap={{ xs: 2, md: 16 }}
            direction={{ sm: "row" }}
            alignItems={{ xs: "center", md: "flex-start" }}
          >
            <Stack
              alignItems={"center"}
              gap={2}
              justifyContent={{ sm: "space-between" }}
              width={{ xs: "100%", sm: "50%" }}
              maxWidth={{ sm: "100%" }}
            >
              <FormInput
                type={"text"}
                label={t("Name label")}
                register={{ ...register("name") }}
                required
              />
              <FormInput
                label={t("Email label")}
                register={{ ...register("email") }}
                required
              />
              <FormInput
                label={t("Phone label")}
                register={{ ...register("phone") }}
              />
            </Stack>

            <Stack
              gap={1}
              alignSelf={{ xs: "center", sm: "start" }}
              width={{ xs: "100%", sm: "50%" }}
              maxWidth={{ sm: "100%" }}
            >
              <MotionSection>
                <FormLabel sx={{ color: "black", fontSize: "1rem" }}>
                  {t("Message label")}
                </FormLabel>
              </MotionSection>
              <MotionSection>
                <Textarea
                  className={style.input}
                  minRows={4}
                  variant={"soft"}
                  color={"primary"}
                  sx={{
                    borderRadius: 0,
                    backgroundColor: "var(--light-blue)",
                    color: "var(--primary)",
                  }}
                  size={"lg"}
                  slotProps={{
                    textarea: {
                      ...register("message"),
                      maxLength: 4000,
                    },
                  }}
                />
              </MotionSection>

              <Button
                type={"submit"}
                style={{
                  backgroundColor: "var(--primary)",
                  fontSize: "1rem",
                }}
              >
                <MotionButton>{t("Submit button")}</MotionButton>
              </Button>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </Stack>
  );
};

export default Form;
