<template>
  <v-container>
    <v-layout row wrap >
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetup/new" class="info">Explore Meetups</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel style="cursor:pointer;">
          <v-carousel-item v-for="(item, i) in meetups"
          :src="item.imageUrl" :key="item.id" @click="onLoadMeetup(item.id)">
          <div class="title">{{item.title}}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 sm6 class="text-xs-center">
        <p>Join our awesome meetups!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  computed: {
    meetups(){
      return this.$store.getters.featuredMettups
    }
  },
  methods: {
    onLoadMeetup(id){
      this.$router.push('/meetups/'+id)
    }
  }
}
</script>
<style scoped>
.title{
  position: absolute;
  bottom: 50px;
  background-color: rgba(0,0,0,.5);
  color: white;
  font-size: 2em;
  padding: 20px;
  width: 80%;
  text-align: center;
}
</style>

