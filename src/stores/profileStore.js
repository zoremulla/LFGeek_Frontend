import { instance } from "./instance";
import { decorate, observable } from "mobx";

class ProfileStore {
  profile = "";
  loading = true;

  fetchProfile = async () => {
    try {
      const res = await instance.get("/profile/");
      const profile = res.data;
      this.profile = profile;
      console.log(this.profile);
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };

  getProfileById(id) {
    return this.profile.find(profile => +profile.id === +id);
  }
}

decorate(ProfileStore, {
  profile: observable,
  loading: observable
});

let profileStore = new ProfileStore();
export default profileStore;
