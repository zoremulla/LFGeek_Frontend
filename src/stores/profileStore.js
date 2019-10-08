import { instance } from "./instance";
import { decorate, observable } from "mobx";

class ProfileStore {
  profile = "";
  loading = true;

  fetchProfile = async () => {
    try {
      const res = instance.get("/profile/");
      const profile = res.data;
      this.profile = profile;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };

  getProfileById(id) {
    return this.authors.find(author => +author.id === +id);
  }
}

// username = () => {
//   if (this.profile) {
//     return this.profile.username;
//   } else {
//     return "";
//   }
// };

decorate(ProfileStore, {
  profile: observable,
  loading: observable
});

let profileStore = new ProfileStore();
export default profileStore;
