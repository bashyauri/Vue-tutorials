import { ref } from "vue";
const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);
  const load = async () => {
    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
      let response = await fetch(`http://localhost:3000/posts/${id}`);

      if (!response.ok) {
        throw Error("Not successful");
      }
      post.value = await response.json();
    } catch (err) {
      error.value = err.message;
      console.console.log(error.value);
    }
  };
  return { post, error, load };
};
export default getPost;
