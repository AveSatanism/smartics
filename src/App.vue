<template>
  <div id="app">
    <SiteHeader />
    <SiteNavigation />
    <PoliticsApply />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'
import SiteNavigation from './components/SiteNavigation.vue'
import PoliticsApply from './components/PoliticsApply.vue'
import SiteFooter from './components/SiteFooter.vue'
export default {
  components: {
    SiteHeader,
    SiteNavigation,
    PoliticsApply,
    SiteFooter
  }
}
</script>

<style>
body {
  font-family: 'MontserratVariable';
}

h1 {
  font-weight: 800;
  font-size: 46px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

h2 {
  font-weight: 800;
  font-size: 24px;
  line-height: 1.4;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

h3 {
  font-weight: 600;
  font-size: 24px;
  line-height: 1.1;
}

.text_1 {
  font-weight: 500;
  font-size: 20px;
  line-height: 1.4;
}

.text_2 {
  font-weight: 500;
  font-size: 20px;
  line-height: 1.4;
  text-transform: uppercase;
}

.text_3 {
  font-weight: 700;
  font-size: 20px;
  line-height: 1.4;
}

.text_4 {
  font-weight: 700;
  font-size: 20px;
  line-height: 1.4;
  text-transform: uppercase;
}

.text_5 {
  font-weight: 700;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.text_6 {
  font-weight: 500;
  font-size: 12px;
  line-height: 1.4;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.text_7 {
  font-weight: 600;
  font-size: 12px;
  line-height: 1.4;
  letter-spacing: 0.03em;
}

.text_8 {
  font-weight: 700;
  font-size: 11px;
  line-height: 1.4;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
</style>
