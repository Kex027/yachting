import { Button, DialogContent, Drawer, Stack } from "@mui/joy";
import { MdClose } from "react-icons/md";
import NavigationLink from "./NavigationLink.jsx";
import ChangeLanguage from "./ChangeLanguage.jsx";

const MobileHeader = ({ links, open, setOpen }) => {
  return (
    <Drawer
      anchor={"right"}
      open={open}
      onClose={() => setOpen(false)}
      variant={"solid"}
      color={"neutral"}
    >
      <Stack alignItems={"flex-end"} gap={2} mt={1}>
        <Button
          variant={"plain"}
          sx={{ color: "#000" }}
          onClick={() => {
            setOpen(false);
          }}
        >
          <MdClose fontSize={"2rem"} />
        </Button>

        <DialogContent>
          <Stack mr={2} alignItems={"flex-end"} gap={2}>
            {links.map(({ link, text }) => (
              <NavigationLink
                key={text}
                link={link}
                translateKey={text}
                setOpen={setOpen}
              />
            ))}

            <ChangeLanguage />
          </Stack>
        </DialogContent>
      </Stack>
    </Drawer>
  );
};

export default MobileHeader;
