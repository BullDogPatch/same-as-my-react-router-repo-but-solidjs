import { createQuery } from "@tanstack/solid-query";
import { useSearchParams } from "@solidjs/router";
import { fetchUserByUsername } from "../utils/utils";

const ProfilePage = () => {
  const query = createQuery(() => ({
    queryKey: ["user", username],
    queryFn: () => fetchUserByUsername(username),
  }));

  const params = useSearchParams();
  console.log(params, query);
  console.log("profiles-page");

  return <div></div>;
};

export default ProfilePage;
