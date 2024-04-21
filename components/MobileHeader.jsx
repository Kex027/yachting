import { Button, DialogContent, Drawer, Stack } from "@mui/joy";
import { MdClose } from "react-icons/md";
import NavigationLink from "./NavigationLink.jsx";
import ChangeLanguage from "./ChangeLanguage.jsx";

const MobileHeader = ({ open, setOpen }) => {
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
            <NavigationLink
              link={"/yachting/"}
              translateKey={"Home page"}
              setOpen={setOpen}
            />
            <NavigationLink
              link={"/yachting/contact"}
              translateKey={"Reservation"}
              setOpen={setOpen}
            />
            <NavigationLink
              link={"/yachting/pricing"}
              translateKey={"Pricing"}
              setOpen={setOpen}
            />
            <NavigationLink
              link={"/yachting/"}
              translateKey={"Boat specifications"}
              setOpen={setOpen}
            />
            <NavigationLink
              link={"/yachting/contact"}
              translateKey={"Contact"}
              setOpen={setOpen}
            />

            <ChangeLanguage />
          </Stack>
        </DialogContent>
      </Stack>
    </Drawer>
  );
};

export default MobileHeader;
