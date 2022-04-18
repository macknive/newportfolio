<template>
  <div class="wrapper p-4 mt-4">
    <b-row>
      <b-col ontouchstart="this.classList.toggle('hover');">
        <div class="card-container">
          <div
            class="front"
            style="background-image: url(https://unsplash.it/500/500/)"
          >
            <div class="inner">
              <p>Front End</p>
            </div>
          </div>
          <div class="back">
            <div class="inner">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
                cum repellat velit quae suscipit c.
              </p>
            </div>
          </div>
        </div>
      </b-col>
      <b-col ontouchstart="this.classList.toggle('hover');">
        <div class="card-container">
          <div
            class="front"
            style="background-image: url(https://unsplash.it/508/508/)"
          >
            <div class="inner">
              <p>Back End</p>
            </div>
          </div>
          <div class="back">
            <div class="inner">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
                cum repellat velit quae suscipit c.
              </p>
            </div>
          </div>
        </div>
      </b-col>
      <b-col ontouchstart="this.classList.toggle('hover');">
        <div class="card-container">
          <div
            class="front"
            style="background-image: url(https://unsplash.it/502/502/)"
          >
            <div class="inner">
              <p>Design</p>
            </div>
          </div>
          <div class="back">
            <div class="inner">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
                cum repellat velit quae suscipit c.
              </p>
            </div>
          </div>
        </div>
      </b-col>
      <b-col ontouchstart="this.classList.toggle('hover');">
        <div class="card-container">
          <div
            class="front"
            style="background-image: url(https://unsplash.it/503/503/)"
          >
            <div class="inner">
              <p>Freelancing</p>
            </div>
          </div>
          <div class="back">
            <div class="inner">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
                cum repellat velit quae suscipit c.
              </p>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.col {
  padding: 30px;
}
.wrapper {
  min-height: 700px;
}
h1 {
  font-size: 2.5rem;
  font-family: 'Montserrat';
  font-weight: normal;
  color: #444;
  text-align: center;
  margin: 2rem 0;
}

.card-container {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-perspective: 1000px;
  perspective: 1000px;
}

.front,
.back {
  background-size: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-position: center;
  -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
    -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  text-align: center;
  min-height: 500px;
  min-width: 200px;
  height: auto;
  border-radius: 10px;
  color: #fff;
  font-size: 1.5rem;
}

.back {
  background-color: #325cc8;
}

.front:after {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  content: '';
  display: block;
  opacity: 0.2;
  background-color: #000;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 10px;
}
.card-container:hover .front,
.card-container:hover .back {
  -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
    -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
}

.back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.inner {
  -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
  transform: translateY(-50%) translateZ(60px) scale(0.94);
  top: 50%;
  position: absolute;
  left: 0;
  width: 100%;
  padding: 2rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 1px solid transparent;
  -webkit-perspective: inherit;
  perspective: inherit;
  z-index: 2;
}

.card-container .back {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.card-container .front {
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.card-container:hover .back {
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.card-container:hover .front {
  -webkit-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.front .inner p {
  font-size: 2rem;
  margin-bottom: 2rem;
  position: relative;
}

.front .inner p:after {
  content: '';
  width: 4rem;
  height: 2px;
  position: absolute;
  background: #c6d4df;
  display: block;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -0.75rem;
}

.front .inner span {
  color: rgba(255, 255, 255, 0.7);
  font-family: 'Montserrat';
  font-weight: 300;
}

@media (min-width: 768px) {
  .wrapper {
    padding: 50px;
  }
}
</style>
