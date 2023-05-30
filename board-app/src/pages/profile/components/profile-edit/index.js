import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useUserInfo } from "../../../../context/user-info";

const ProfileEdit = () => {
  const navigate = useNavigate();
  const [userState, setUserState] = useUserInfo();

  const validate = (e) => {
    e.preventDefault();

    if (e.target.password.value === e.target.passwordConfirm.value) {
      setUserState((prev) => ({
        uid: prev.uid,
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
      }));
      alert("회원 정보가 변경되었습니다.");
      navigate("/profile/");
    } else {
      alert("비밀번호를 다시 확인해 주세요.");
    }
  };
  return (
    <S.ProfileForm onSubmit={validate}>
      <h1>프로필 정보</h1>
      <p>닉네임 수정</p>
      <input
        type="text"
        name="username"
        defaultValue={userState.username}
      ></input>
      <p>이메일 수정</p>
      <input type="email" name="email" defaultValue={userState.email}></input>
      <p>비밀번호 수정</p>
      <input type="password" name="password"></input>
      <p>비밀번호 확인</p>
      <input type="password" name="passwordConfirm"></input>
      <br />
      <button>제출</button>
    </S.ProfileForm>
  );
};
export default ProfileEdit;
/* 나중에 이거 리팩토링 */
const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  width: calc(100% - 300px);
  align-items: center;
`;
const S = { ProfileForm };
