import { ref } from "vue";
const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);
  const load = async () => {
    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
      let response = await fetch("http://localhost:3000/posts");
      if (!response.ok) {
        throw Error("Not successful");
      }
      posts.value = await response.json();
    } catch (err) {
      error.value = err.message;
      console.console.log(error.value);
    }
  };
  return { posts, error, load };
};
export default getPosts;
