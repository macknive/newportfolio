<template>
  <div class="main-container">
    <div class="game-container m-auto">
      <div v-if="!start">
        <div v-if="!intro">
          <span @click="loadGame()" class="blink_me">PRESS START</span>
        </div>
        <div v-if="loading">
          <p class="loading">
            <span>l</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
          </p>
        </div>
      </div>
      <div v-else>
        <div class="text-center">
          <h3>Adventures & Experiences</h3>
          <b-row class="mt-4 pt-4">
            <b-col
              v-for="tb in tabs"
              :key="tb.id"
              class="tabs"
              @click="tab = tb.tabNum"
              :class="
                tab == tb.tabNum ? 'bg-white text-dark' : 'bg-dark text-white'
              "
              >{{ tb.name }}</b-col
            >
          </b-row>
          <b-row>
            <div class="skill-container table-container text-white border">
              <div v-if="tab == 0">
                <div class="m-4 p-4">Attributes</div>

                <b-row v-for="tool in tools" :key="tool.id">
                  <b-col cols="4"> {{ tool.name }} </b-col>
                  <b-col cols="8">
                    <b-progress
                      :value="tool.stats"
                      max="100"
                      class="mb-3 progress-bars"
                    ></b-progress>
                  </b-col>
                </b-row>
              </div>

              <div v-if="tab == 1">1</div>
              <div v-if="tab == 2">2</div>
              <div v-if="tab == 3">3</div>
              <div v-if="tab == 4">4</div>
              <div v-if="tab == 5">5</div>
            </div>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 0,
      start: false,
      loading: false,
      intro: false,
      tabs: [
        {
          name: 'Stats & Skills',
          tabNum: 0,
        },
        {
          name: 'Virtusize',
          tabNum: 1,
        },
        {
          name: 'Arkis',
          tabNum: 2,
        },
        {
          name: 'Best Odds',
          tabNum: 3,
        },
        {
          name: 'Nikomi LLC',
          tabNum: 4,
        },
        {
          name: 'Other Projects',
          tabNum: 5,
        },
      ],
      tools: [
        {
          name: 'JavaScript',
          stats: '90',
        },
        {
          name: 'HTML',
          stats: '99',
        },
        {
          name: 'CSS',
          stats: '95',
        },
        {
          name: 'Vue 2',
          stats: '85',
        },
        {
          name: 'Vue 3',
          stats: '75',
        },
        {
          name: 'React',
          stats: '70',
        },
        {
          name: 'Angular',
          stats: '67',
        },
        {
          name: 'CSS Frameworks',
          stats: '90',
        },
        {
          name: 'Design Tools',
          stats: '70',
        },
        {
          name: 'Git',
          stats: '85',
        },
        {
          name: 'NodeJs',
          stats: '60',
        },
        {
          name: 'DBs',
          stats: '67',
        },
        {
          name: 'REST API',
          stats: '72',
        },
      ],
    }
  },
  methods: {
    loadGame() {
      this.intro = true
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.start = true
      }, 0)
    },
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
.main-container {
  min-height: 1000px;
  background-color: #bbd3f5;
}
.game-container {
  font-family: 'Press Start 2P', cursive;
  max-width: 1500px;
}

.table-container {
  background-color: rgba(0, 0, 0, 0.3);
}

.progress-bars {
  max-width: 700px;
}

.tabs {
  border: 1px solid white;
  padding: 12px;
  cursor: pointer;
}

.blink_me {
  animation: blinker 1s linear infinite;
  cursor: pointer;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}

$t: 3s;
$n: 7;

#app {
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: rgb(102, 62, 148);
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading {
  font-family: 'Press Start 2P', sans-serif;
  font-size: #{100vw * 0.025};
  color: #ffffff;
  text-transform: uppercase;
  padding: 1.2em;
  position: relative;
  &::after {
    content: '';
    display: block;
    height: 2px;
    bottom: 0;
    left: 0;
    right: 0%;
    background-color: #ffffff;
    position: absolute;
    animation: line $t ease-in-out infinite;
  }
  span {
    display: inline-block;
    animation-name: char;
    animation-duration: $t;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
    animation-fill-mode: backwards;
    @for $i from 1 through $n {
      &:nth-child(#{$i}) {
        animation-delay: #{calc($i * $t * 0.25 / $n)};
      }
    }
  }
}

@keyframes line {
  0% {
    right: 100%;
    left: 0%;
    opacity: 0.1;
  }
  50% {
    right: 0%;
    left: 0%;
    opacity: 1;
  }
  100% {
    left: 100%;
    right: 0%;
    opacity: 0.1;
  }
}

@keyframes char {
  0% {
    transform: translateY(1.8em);
    opacity: 0;
  }
  25%,
  50% {
    transform: none;
    opacity: 1;
  }
  75%,
  100% {
    transform: translateY(-1.8em);
    opacity: 0;
  }
}
</style>

<style lang="scss"></style>
