<template>
  <div class="introduction">
    <header class="intro-header">
      <div class="intro-left">
        <img class="profile-pic" src="https://static-a1.steveyi.net/media/yi/life/image06.jpg" alt="Profile" />
        <div class="intro-text">
          <h2>{{ introductionData.Title }}</h2>
          <p>{{ introductionData.Description }}</p>
        </div>
      </div>
      <div class="intro-right">
        <a href="https://github.com/steveyiyo" target="_blank" rel="noopener">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.facebook.com/jackcooku" target="_blank" rel="noopener">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="https://linkedin.com/in/steveyiyo">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="mailto:hi@steveyi.net">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
    </header>
    <section class="about-section">
      <h3>經歷</h3>
      <ul>
        <li v-for="(item, index) in introductionData.PersonalInformation.Experience" :key="index">
          {{ item }}
        </li>
      </ul>
      <h3>Award</h3>
      <ul>
        <li v-for="(item, index) in introductionData.PersonalInformation.Award" :key="index">
          {{ item }}
        </li>
      </ul>
      <h3>演講</h3>
      <ul>
        <li v-for="(item, index) in introductionData.PersonalInformation.Presentation" :key="index">
          {{ item }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import introductionData from '@/assets/constants/introduction.json'

export default {
  name: 'Introduction',
  data() {
    return {
      introductionData
    }
  }
}
</script>

<style scoped>
.profile-pic {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 20px;
}

.introduction {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.intro-header {
  background-color: #f9f9f9;
  padding: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.intro-left {
  display: flex;
  align-items: center;
}

.intro-right {
  display: flex;
  font-size: 1.5rem;
  flex-direction: column;
  align-items: flex-end;
}

.intro-right a {
  color: #333;
  text-decoration: none;
}

.intro-right a:hover {
  color: #000;
}

.intro-text {
  display: flex;
  flex-direction: column;
}

.intro-text h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  margin: 0 0 10px 0;
}

.intro-text p {
  font-size: 1.1rem;
  margin-bottom: 20px;
  margin: 0;
}

.contact-button {
  padding: 10px 20px;
  background-color: #656d73;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
}

.contact-button:hover {
  background-color: #36383a;
}

.about-section {
  margin-top: 40px;
  padding: 0 40px;
}

.about-section h3 {
  font-size: 1.6rem;
  margin-top: 20px;
  margin-bottom: 10px;
}

.about-section p {
  font-size: 1rem;
  line-height: 1.6;
}
</style>