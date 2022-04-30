<template>
  <div class="resume-container bg-lite-blue">
    <br />
    <b-container>
      <div class="neo">
        <h1 class="text-center mb-4 mt-4">About Me</h1>

        <div class="details mb-4 p-4">
          <p class="mb-4">
            Hello. My name is Kevin Corpuz. I'm a Front End Engineer based in
            Philippines. I describe myself as a passionate developer who loves
            coding, designing and automation. Aside from my job, I like looking
            at other people's work that helps me to learn a ton of new stuff,
            grow as a developer, copy cool things and support other open source
            projects. I also enjoy gaming and binge watching on Netflix. I used
            to love traveling to different countries before the pandemic, hoping
            to travel again soon to continue my adventures!
          </p>

          <p class="mt-4">
            As for my professional experience, I've been in the tech companies
            and businesses for the last 8 years and doing development work for
            about 3 years. I've worked with a lot of different clients full
            time, freelance and side projects that I love working on. I do
            mostly frontend work using javascript and Vue as my chosen framework
            and used a lot of dependencies from libraries based on the client
            needs. I can also do some backend work using NodeJs and Express. For
            design, I usually copy things from the internet and use Photoshop or
            Figma and tweak it to my taste.
          </p>

          <p class="mt-4">
            I am always looking for new opportunities to learn and grow as a
            developer and open to learning new technologies and tools. I can
            always adapt to changes since technology is always moving forward.
          </p>
        </div>
      </div>
    </b-container>
    <br /><br /><br /><br />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.resume-container {
  min-height: 600px;
  //background-color: #191923;
}

.details {
  text-align: justify;
  text-justify: inter-word;
}

p {
  font-size: 18px;
}

.neo {
  border-radius: 50px;
  background: #bbd3f5;
  box-shadow: 20px 20px 60px #9fb3d0, -20px -20px 60px #d7f3ff;
  height: 100%;
  width: 100%;
  padding: 50px;
}
</style>
