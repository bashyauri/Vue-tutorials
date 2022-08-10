import { ref } from "vue";
import { projectFirestore } from "../firebase/config";
const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);
  const load = async () => {
    try {
      // let response = await fetch("http://localhost:3000/posts");
      // if (!response.ok) {
      //   throw Error("Not successful");
      // }
      // posts.value = await response.json();
      const res = await projectFirestore.collection("posts").get();
      posts.value = res.docs.map((doc) => {
        //console.log(doc.data());
        return { ...doc.data(), id: doc.id };
      });
    } catch (err) {
      error.value = err.message;
      console.console.log(error.value);
    }
  };
  return { posts, error, load };
};
export default getPosts;
