import { ref } from "vue";
import { projectFirestore } from "../firebase/config";
const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);
  const load = async () => {
    try {
      // let response = await fetch(`http://localhost:3000/posts/${id}`);

      // if (!response.ok) {
      //   throw Error("Not successful");
      // }
      // post.value = await response.json();
      let res = await projectFirestore.collection("posts").doc(id).get();
      if (!res.exists) {
        throw Error("The post does not exist");
      }
      post.value = { ...res.data(), id: res.id };
      console.log(post.value);
    } catch (err) {
      error.value = err.message;
      console.console.log(error.value);
    }
  };
  return { post, error, load };
};
export default getPost;
