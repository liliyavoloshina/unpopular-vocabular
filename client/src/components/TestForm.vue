<template>
  <form
    action="#"
    @submit.prevent="onSubmit"
  >
    <h1 class="is-size-5 has-text-centered">
      Score: {{ score }} out of {{ words.length }}
    </h1>
    <div
      v-if="!isShowResults"
      class="container mt-4"
    >
      <div class="columns is-centered">
        <div class="column is-half">
          <b-field label="Unpopular:">
            <p class="control">
              <span class="button is-static">
                <b-icon
                  icon="gem"
                  size="is-small"
                  type="is-primary"
                />
              </span>
            </p>
            <b-input
              :value="currentWord.unpopular"
              type="text"
              readonly
              expanded
            />
          </b-field>
          <b-field label="Popular synonym:">
            <p class="control">
              <span class="button is-static">
                <b-icon
                  icon="fire-alt"
                  size="is-small"
                  type="is-danger"
                />
              </span>
            </p>
            <b-input
              v-model="popular"
              placeholder="Popular..."
              type="text"
              required
              expanded
            />
          </b-field>

          <b-button
            v-if="currentWord.description"
            type="is-danger"
            @click.prevent="showTip"
          >
            Show tip
          </b-button>

          <div
            v-if="isShowTip"
            class="mt-3"
          >
            {{ currentWord.description }}
          </div>

          <div class="buttons mt-5">
            <b-button
              type="is-primary"
              expanded
              @click.prevent="onSubmit"
            >
              Submit
            </b-button>
          </div>
        </div>
      </div>
    </div>
    <section
      v-else
      class="section is-medium is-size-5 has-text-centered mt-5"
    >
      <div v-if="incorrectGuesses.length === 0">
        You got everything correct. Well done!
      </div>
      <div
        v-else
        class="is-centered"
      >
        <p><strong>You got the following words wrong:</strong> {{ incorrectGuesses.join(', ') }}</p>
        <p class="mt-3">
          But don't be upset! because most of them you will only meet in this test :)
        </p>
      </div>
      <b-button
        type="is-primary"
        class="mt-5"
        expanded
        @click.prevent="tryAgain"
      >
        Try again?
      </b-button>
    </section>
  </form>
</template>

<script>
export default {
  name: 'TestForm',
  props: {
    words: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      randomWords: [...this.words.sort(() => 0.5 - Math.random())],
      popular: '',
      score: 0,
      incorrectGuesses: [],
      isShowResults: false,
      isShowTip: false,
    };
  },
  computed: {
    currentWord() {
      return this.randomWords.length ? this.randomWords[0] : '';
    },
  },
  methods: {
    onSubmit() {
      if (
        this.capitalizeFirstLetter(this.popular) === this.currentWord.popular
      ) {
        this.$buefy.toast.open({
          message: 'Correct!',
          type: 'is-success',
          duration: 1000,
        });
        this.score += 1;
      } else {
        this.$buefy.toast.open({
          message: 'Incorrect!',
          type: 'is-danger',
          duration: 1000,
        });

        this.incorrectGuesses.push(this.currentWord.unpopular);
      }

      this.isShowTip = false;
      this.popular = '';
      this.randomWords.shift();

      if (this.randomWords.length === 0) {
        this.testOver = true;
        this.isShowResults = true;
      }
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    tryAgain() {
      this.$emit('tryAgain');
    },
    showTip() {
      this.isShowTip = !this.isShowTip;
    },
  },
};
</script>
