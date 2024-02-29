import { For, Suspense } from "solid-js";
import { A } from "@solidjs/router";
import { createQuery } from "@tanstack/solid-query";
import { fetchUsers } from "../utils/utils";

const Profiles = () => {
  const query = createQuery(() => ({
    queryKey: ["users"],
    queryFn: fetchUsers,
  }));

  console.log(query.data);
  console.log("profiles");

  return (
    <div>
      <Suspense fallback={"Loading..."}>
        <For each={query.data}>
          {(user) => (
            <A
              href={`/profiles/${user.username}`}
              active="underlined"
              inactive="default"
            >
              {user.name}
            </A>
          )}
        </For>
      </Suspense>
    </div>
  );
};

export default Profiles;
