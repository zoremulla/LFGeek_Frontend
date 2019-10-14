import { instance } from "./instance";
import { decorate, observable } from "mobx";

class ProfileStore {
  // profiles = [];
  profile = "";
  loading = true;
  errors = null;

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

// username = () => {
//   if (this.profile) {
//     return this.profile.username;
//   } else {
//     return "";
//   }
// };
// fetchAllProfiles = async () => {
//   try {
//     const res = await instance.get("profile/");
//     const profiles = res.data;
//     this.profiles = profiles;
//     this.loading = false;
//   } catch (err) {
//     console.error(err);
//   }
// };

  getProfileById(id) {
    return this.profile.find(profile => +profile.id === +id);
  }
}

decorate(ProfileStore, {
  // profiles: observable,
  profile: observable,
  loading: observable,
  errors: observable
});

let profileStore = new ProfileStore();
// profileStore.fetchAllProfiles();
export default ProfileStore;
