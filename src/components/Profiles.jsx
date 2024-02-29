import { For, Suspense } from "solid-js";
// import { createResource } from "solid-js";
import { createQuery } from "@tanstack/solid-query";
import { fetchUsers } from "../utils/utils";

const Profiles = () => {
  const query = createQuery(() => ({
    queryKey: ["users"],
    queryFn: fetchUsers,
  }));

  console.log(query.data);
  return (
    <div>
      <Suspense fallback={"Loading..."}>
        <For each={query.data}>{(user) => <div>{user.username}</div>}</For>
      </Suspense>
    </div>
  );
};

export default Profiles;
