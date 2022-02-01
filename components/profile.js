import Image from "next/image";

const Profile = (props) => {
  return (
    <Image
      priority
      src="/images/gatito.jpg"
      className={`rounded-full object-cover`}
      {...props}
    />
  );
};

export default Profile;
