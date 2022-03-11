import { Link } from "react-router-dom";
import styled from "styled-components";

import { mixin } from "styles";

const Navigation = () => {
  return (
    /* to-do: 스크롤 시 아이콘 색깔 변화 작업 해야됨 */
    <Container>
      <div className="main">
        <Link to="/">
          <img
            className="logo"
            src={require("../assets/images/logo_white.png")}
            alt="로고"
          />
        </Link>
        <Link to="/community">
          <img
            className="ic-person"
            src={require("../assets/images/ic_person_white.png")}
            alt="프로필"
          />
        </Link>
      </div>
    </Container>
  );
};

export default Navigation;

const Container = styled.nav`
  z-index: 100;
  position: fixed;
  width: 100%;

  .main {
    ${mixin.maxWidth}
    display: flex;
    justify-content: space-between;
    padding: 20px;
    gap: 20px;
  }
  .logo {
    width: 88px;
    height: 24px;
  }
  .ic-person {
    width: 24px;
    height: 24px;
  }
`;
