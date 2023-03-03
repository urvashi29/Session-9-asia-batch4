import axios from "axios";

import { fetchUsers } from "./utils";

jest.mock("axios");

describe("fetchUsers", () => {
  describe("when api is success", () => {
    it("get posts list", async () => {
        
      const posts = [
        {
          userId: 1,
          id: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        },
      ];

      axios.get.mockResolvedValueOnce(posts);

      //   when
      const result = await fetchUsers();
      console.log(result);

      // then
      expect(axios.get).toHaveBeenCalledWith(
        "https://jsonplaceholder.typicode.com/posts/"
      );

      expect(result).toEqual(posts);
    });
  });
});
