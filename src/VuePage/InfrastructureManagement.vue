<template>
  <div id="InfrastructureManagement">
    <SiteHeader />
    <SiteNavigation />
    <div>
      <div class="infrastructureManagement_background py-[42px] flex flex-wrap justify-center items-center site_color_1">
        <div>
          <h1 class="mb-[26px]">управление<br> инфраструктурой</h1>
          <p class="mb-[26px] text_1">Перечислить наименования известных программ с<br> узкой направленностью, которые заменяет штука<br> Егора<br> а вообще она делает это еще лучше</p>
          <UIButton variant="orange2">Хочу!</UIButton>
        </div>
        <img class="h-[554px]" src="@/assets/pageContentImage/InfrastructureManagement_image.png" width="597" height="554" alt="InfrastructureManagement_image">
      </div>
      <div class="py-[20px] px-[30px] flex flex-col items-center site_color_2_background">
        <h2 class="mb-[76px] max-w-[1161px] w-full py-[19px] text-center infrastructureManagement_border site_color_1_background">Управление инфраструктурой</h2>
        <div class="mb-[35px] flex flex-wrap justify-around md:w-[640px] xl:w-[1161px] gap-[25px]">
          <UIPanel>Облачная инфраструктура
            <template #icon><img src="@/assets/InfrastructureManagement_image/cloudInfrastructure_icon.svg"></template>
          </UIPanel>
          <UIPanel>Системы безопасности
            <template #icon><img src="@/assets/InfrastructureManagement_image/securitySystems_icon.svg"></template>
          </UIPanel>
          <UIPanel>ЦОД
            <template #icon><img src="@/assets/InfrastructureManagement_image/COD_icon.svg"></template>
          </UIPanel>
          <UIPanel>Телеком
            <template #icon><img src="@/assets/InfrastructureManagement_image/telecom_icon.svg"></template>
          </UIPanel>
          <UIPanel>Физическая безопастность
            <template #icon><img src="@/assets/InfrastructureManagement_image/physicalSecurity_icon.svg"></template>
          </UIPanel>
          <UIPanel>Сети
            <template #icon><img src="@/assets/InfrastructureManagement_image/networks_icon.svg"></template>
          </UIPanel>
          <UIPanel>Мультимедиа
            <template #icon><img src="@/assets/InfrastructureManagement_image/multimedia_icon.svg"></template>
          </UIPanel>
        </div>
        <UIButton variant="orange1">Связаться с нами</UIButton>
      </div>
      <div class="infrastructureManagement_background_bot h-[115px]"></div>
    </div>
    <PoliticsApply />
    <SiteFooter />
  </div>
</template>
<script>
import SiteHeader from '../components/SiteHeader.vue'
import SiteNavigation from '../components/SiteNavigation.vue'
import PoliticsApply from '../components/PoliticsApply.vue'
import SiteFooter from '../components/SiteFooter.vue'
import UIButton from '../components/UI/UIButton.vue'
import UIPanel from '../components/UI/UIPanel.vue'

export default {
  components: {
    SiteHeader,
    SiteNavigation,
    UIButton,
    UIPanel,
    PoliticsApply,
    SiteFooter
    }
}
</script>
<style>
.infrastructureManagement_background {
  background-image: url("@/assets/pageContentImage/InfrastructureManagement_wave.svg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: bottom;
}
.infrastructureManagement_background_bot {
  background-image: url("@/assets/pageContentImage/InfrastructureManagement_wave_bot.svg");
  background-size: 100%;
  background-repeat: no-repeat;
}
.infrastructureManagement_border {
    box-shadow: 0px 4px 8px var(--color-1-background);
    border-radius: 15px;
    color: var(--color-7);
}
</style>