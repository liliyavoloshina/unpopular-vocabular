<template>
  <section class="section">
    <div
      v-if="!isShowTest"
      class="container"
    >
      <h1 class="is-size-5 has-text-centered">
        Check your knowledge of unpopular words!
      </h1>
      <div class="columns is-centered mt-4">
        <div class="column is-half">
          <b-field label="Choose difficulty:">
            <b-select
              v-model="difficulty"
              expanded
            >
              <option
                value="high"
                selected
              >
                Difficult
              </option>
              <option value="low">
                Easy
              </option>
            </b-select>
          </b-field>
          <b-field label="Сhoose the number of words">
            <b-numberinput
              v-model="number"
              :min="1"
              :max="maxLength"
              class="has-addons-centered"
              controls-position="compact"
              type="is-dark"
              expanded
            />
          </b-field>
          <b-button
            class="is-size-5 mt-5"
            type="is-primary"
            expanded
            @click="startTest"
          >
            Start!
          </b-button>
        </div>
      </div>
    </div>

    <test-form
      v-else
      :words="selectedWords"
      @tryAgain="startTest"
    />

    <b-loading
      v-model="isLoading"
      :is-full-page="true"
      :can-cancel="false"
    >
      !
    </b-loading>
  </section>
</template>

<script>
import { getWords } from '../api/words';
import TestForm from '../components/TestForm';

export default {
  name: 'TestView',
  components: {
    TestForm,
  },
  data() {
    return {
      words: [],
      number: 1,
      difficulty: 'high',
      isShowTest: false,
      isLoading: false,
    };
  },
  computed: {
    maxLength() {
      const selectedDiff = this.words.filter((word) => word.popularity === this.difficulty);
      return selectedDiff.length;
    },
    selectedWords() {
      return this.words
        .filter((word) => word.popularity === this.difficulty)
        .slice(0, this.number);
    },
  },
  async created() {
    this.isLoading = true;
    try {
      this.words = await getWords();
    } catch (e) {
      console.log(e);
    }
    this.isLoading = false;
  },
  methods: {
    startTest() {
      this.isShowTest = !this.isShowTest;
    },
  },
};
</script>
