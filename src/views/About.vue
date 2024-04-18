<template>
  <v-containter>
    <v-row>
      <v-col :cols="mdAndUp ? 5 : 12" class="gap-right"> 
        <img src="../assets/avatar-full.jpg" alt="avatar" /> 
      </v-col>
      <v-col :cols="mdAndUp ? 7 : 12" class="gap-left">
        <div class="content">
          <h1 class="text-left">Jack Ammon</h1> 
          <h2 class="text-left mb-10">Product Focused Software Engineer</h2>

          <p class="text-left mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet luctus libero, nec scelerisque enim mollis ac. Donec sed tristique purus. Donec pretium dignissim ipsum vitae eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam et fermentum velit, nec mollis magna. Sed quis elementum nunc. Donec lacinia finibus elit non dignissim. Aenean dapibus eros ut venenatis lobortis. Suspendisse pellentesque placerat maximus. Praesent tincidunt, augue et consectetur consequat, lorem ex eleifend neque, quis dignissim massa ante eu est. Nulla at bibendum erat, vitae vulputate augue. Suspendisse vitae pellentesque eros. Suspendisse euismod, lectus quis tincidunt ultrices, magna quam malesuada orci, vel ornare tellus ante in nisl. Donec nec lorem malesuada, convallis erat a, ornare justo.</p>

          <p class="text-left mb-10">Maecenas quis justo nec purus pharetra consectetur ac et nibh. Donec posuere justo quis gravida dictum. Fusce neque turpis, molestie a lacinia ac, dictum non augue. Vestibulum viverra at libero a accumsan. Maecenas dui ligula, fringilla ac tempor sed, scelerisque in leo. Integer at ipsum erat. Duis mollis nisi sed dui lacinia mattis. Cras venenatis auctor diam. Praesent sit amet arcu in diam eleifend viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

          <p class="text-left mb-10">Etiam libero eros, tempor et velit nec, sollicitudin laoreet ligula. Vivamus ultrices lacus sit amet hendrerit blandit. Proin euismod neque eros. Proin convallis eu lacus pellentesque sodales. Nulla ut interdum massa, ut viverra odio. Sed vehicula gravida sem, at facilisis urna pulvinar in. Cras feugiat lectus nibh, ultrices maximus lorem maximus a. Donec vulputate rhoncus finibus. Sed auctor dolor quis urna consequat, suscipit rutrum tortor rutrum. Vestibulum dapibus orci lectus, vitae mattis risus posuere quis. Maecenas posuere nisl nec ultrices consectetur. Donec sit amet sodales lectus. Duis pretium cursus quam. Fusce rhoncus tristique lorem nec malesuada. Aliquam rhoncus ut dui sed consequat. Aenean non ultricies est.</p>
        </div> 
      </v-col> 
    </v-row>
  </v-containter>
</template>

<script>
  import { useDisplay } from 'vuetify'

    export default {
    setup () {
        const { mdAndUp } = useDisplay()

        return { mdAndUp }
    }
  }
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
}

h2 {
  font-style: normal;
  font-size: 2.5vw;
  line-height: 110%;
  letter-spacing: .02em;
  text-transform: uppercase;
  font-weight: 500;
}

.content {
  max-width: 1000px;
}

.v-row {
  padding-top: 15px !important;
}

@media (min-width: 960px) {
  .gap-right {
    padding-right: 2vw;
  }
  .gap-left {
    padding-left: 2vw;
  }

  h1 {
    font-size: 6vw !important;
    line-height: 90%;
    letter-spacing: -.02em;
    margin-bottom: 2vw;
  }
}

@media (max-width: 960px) {
  h1 {
    font-size: 8vw !important;
    line-height: 90%;
    letter-spacing: -.02em;
    margin-bottom: 2vw;
  }
}
</style>