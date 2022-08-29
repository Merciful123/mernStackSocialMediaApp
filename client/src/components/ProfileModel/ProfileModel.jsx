import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModel({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
      size="55%"
    >
      <form className="infoForm">
        <h3>Your Info</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            name="Firstname"
            placeholder="First Name"
          />
          <input
            type="text"
            className="infoInput"
            name="lastname"
            placeholder="Last Name"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="worksAT"
            placeholder="Works At"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="LivesIN"
            placeholder="Lives in"
          />
          <input
            type="text"
            className="infoInput"
            name="Country"
            placeholder="Country"
          />
        </div>
        <div>
          <input type="text" className="infoInput" placeholder="Job status" />
        </div>
        <div>
          Profile Image
          <input type="file" name="profileImg" />
          Cover Image
          <input type="file" name="coverImg" />
        </div>
        <button className="button infoButton">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModel;
