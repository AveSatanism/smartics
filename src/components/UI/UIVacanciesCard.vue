<template>
  <div class="vacancies_card mr-[300px] site_color_1 text-left">
    <div class="mb-[30px] text_4 site_color_4"><slot name="vacancies_title"></slot></div>
    <div class="mb-[30px] text_7"><slot name="description"></slot></div>
    <section class="vacancies_atribute flex justify-between text_6 site_color_2">
      <div><img src="@/assets/icon/Experience_card_icon.svg" width="19.01" height="18.99" alt="experience_icon">
      <slot name="experience"></slot></div>
      <div><img src="@/assets/icon/Location_card_icon.svg" width="13" height="18.2" alt="location_icon">
      <slot name="location"></slot></div>
      <div><img src="@/assets/icon/Employment_card_icon.svg" width="18" height="17" alt="employment_icon">
      <slot name="employment"></slot></div>
    </section>
  </div>
</template>
<script>
</script>
<style>
.vacancies_card {
  max-width: 793px;
  padding: 36px 32px;
  border: 1px solid #DDECFF;
  filter: drop-shadow(0px 4px 4px rgba(0, 99, 210, 0.3));
  border-radius: 15px;
}
.vacancies_atribute div {
    display: flex;
    align-items: center;
}
.vacancies_atribute div img{
    margin-right: 11px;
}
</style>