import Image from "next/image";
import { Box, ThemeUICSSObject } from "theme-ui";
import StyledButton from "../../atoms/styled/Button";

export default function LeftPanel() {
  const avatarSize = 220;
  const avatarUrl = `https://gravatar.com/avatar/a1f911dff8e5b2a0d632357cf3542b64?s=${avatarSize}`;

  const buttonStyle: ThemeUICSSObject = {
    mt: 3,
    mx: [1, null, 0],
    display: ["inline-block", null, "flex"],
    width: ["unset", null, "100%"],
  };

  return (
    <Box sx={{ textAlign: "center", flexShrink: 0 }}>
      <Image src={avatarUrl} alt="Avatar" width={avatarSize} height={avatarSize} quality={100} priority />
      <Box>
        <StyledButton sx={buttonStyle} iconName="AiOutlineProfile" href="#">
          Resume
        </StyledButton>
        <StyledButton
          sx={buttonStyle}
          iconName="AiOutlineMail"
          href="mailto:fazrikusumahputra@gmail.com?subject=Hey Fazri!"
        >
          Email
        </StyledButton>
      </Box>
    </Box>
  );
}
