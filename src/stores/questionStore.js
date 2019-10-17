import { instance } from "./instance";
import { decorate, observable } from "mobx";

class QuestionStore {
  // questions = [];
  question = "";
  loading = true;
  errors = null;

  fetchQuestion = async () => {
    try {
      const res = await instance.get("question/");
      const question = res.data;
      this.question = question;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };

  getQuestionById(id) {
    return this.question.find(question => +question.id === +id);
  }
}

decorate(questionStore, {
  // questions: observable,
  question: observable,
  loading: observable,
  errors: observable
});

let questionStore = new QuestionStore();
// questionStore.fetchAllquestions();
export default questionStore;
