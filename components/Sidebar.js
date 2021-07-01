import { Avatar, IconButton } from "@material-ui/core";
import { MoreVert, Chat } from "@material-ui/icons";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <Container>
      <UserAvatar />
      <IconContainer>
        <IconButton>
          <Chat />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </IconContainer>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const UserAvatar = styled(Avatar)``;

const IconContainer = styled.div``;
