<template>
  <div class="vacancies_card_mobile site_color_2 text-center text_6">
    <div class="mb-[30px] text_button site_color_4"><slot name="vacancies_title"></slot></div>
    <div class="flex items-center gap-x-[11px]"><img src="@/assets/icon/Experience_card_icon.svg" width="19.01" height="18.99" alt="experience_icon">
    <slot name="experience"></slot></div>
    <div class="my-[16px] flex items-center gap-x-[12px]"><img class="w-[17px]" src="@/assets/icon/Location_card_icon.svg" width="17" height="21.1" alt="location_icon">
    <slot name="location"></slot></div>
    <div class="flex items-center gap-x-[11px]"><img src="@/assets/icon/Employment_card_icon.svg" width="18" height="17" alt="employment_icon">
    <slot name="employment"></slot></div>
  </div>
</template>
<style>
.vacancies_card_mobile {
  max-width: 243px;
  padding: 24px 32px;
  border: 1px solid var(--color-3);
  box-shadow: -2px -2px 4px rgba(236, 244, 255, 0.9), 2px 4px 4px rgba(236, 244, 255, 0.9);
  border-radius: 15px;
}
</style>