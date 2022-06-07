<template>
  <div id="InfrastructureManagement">
    <SiteHeader />
    <SiteNavigation />
    <div>
      <div class="infrastructureManagement_background py-[42px] flex justify-center items-center">
        <div class="mb-[100px] site_color_1">
          <h1 class="mb-[26px]">управление<br> инфраструктурой</h1>
          <p class="mb-[26px] text_1">Перечислить наименования известных программ с<br> узкой направленностью, которые заменяет штука<br> Егора<br> а вообще она делает это еще лучше</p>
          <UIButton class="flex justify-center w-[180px]">Хочу!</UIButton>
        </div>
        <img class="h-[554px]" src="@/assets/InfrastructureManagement_image.png" width="597" height="554" alt="InfrastructureManagement_image">
      </div>
      <div class="py-[20px] flex justify-center flex-wrap site_color_1 site_color_2_background">
        <h2 class=" px-[99px] py-[19px] mb-[80px] infrastructureManagement_border site_color_3_background">Управление инфраструктурой</h2>
        <div class="mb-[35px] text_8 flex justify-center gap-[25px] w-[100%]">
          <div class=" w-[137px] h-[180px] py-[13px] infrastructureManagement_border flex justify-center text-center flex-wrap">
            <p>Облачная инфраструктура</p>
            <img src="@/assets/InfrastructureManagement_image/cloudInfrastructure_icon.svg" width="93" height="90">
          </div>
          <div class=" w-[137px] h-[180px] py-[13px] infrastructureManagement_border flex justify-center text-center flex-wrap">
            <p>Системы безопасности</p>
            <img src="@/assets/InfrastructureManagement_image/securitySystems_icon.svg" width="93" height="90">
          </div>
          <div class=" w-[137px] h-[180px] py-[13px] infrastructureManagement_border flex justify-center text-center flex-wrap">
            <p class="w-[100%]">ЦОД</p>
            <img src="@/assets/InfrastructureManagement_image/COD_icon.svg" width="93" height="90">
          </div>
          <div class=" w-[137px] h-[180px] py-[13px] infrastructureManagement_border flex justify-center text-center flex-wrap">
            <p>Телеком</p>
            <img src="@/assets/InfrastructureManagement_image/telecom_icon.svg" width="93" height="90">
          </div>
          <div class=" w-[137px] h-[180px] py-[13px] infrastructureManagement_border flex justify-center text-center flex-wrap">
            <p>Физическая безопастность</p>
            <img src="@/assets/InfrastructureManagement_image/physicalSecurity_icon.svg" width="93" height="90">
          </div>
          <div class=" w-[137px] h-[180px] py-[13px] infrastructureManagement_border flex justify-center text-center flex-wrap">
            <p class="w-[100%]">Сети</p>
            <img src="@/assets/InfrastructureManagement_image/networks_icon.svg" width="93" height="90">
          </div>
          <div class=" w-[137px] h-[180px] py-[13px] infrastructureManagement_border flex justify-center text-center flex-wrap">
            <p>Мультимедиа</p>
            <img src="@/assets/InfrastructureManagement_image/multimedia_icon.svg" width="93" height="90">
          </div>
        </div>
        <div class="flex justify-center w-[100%]">
          <UIButton class="flex justify-center w-[220px]">Связаться с нами</UIButton>
        </div>
      </div>
      <div class="infrastructureManagement_background_bot h-[115px]"></div>
    </div>
    <PoliticsApply />
    <SiteFooter />
  </div>
</template>
<script>
import SiteHeader from './components/SiteHeader.vue'
import SiteNavigation from './components/SiteNavigation.vue'
import PoliticsApply from './components/PoliticsApply.vue'
import SiteFooter from './components/SiteFooter.vue'
import UIButton from './components/UI/UIButton.vue'

export default {
  components: {
    SiteHeader,
    SiteNavigation,
    UIButton,
    PoliticsApply,
    SiteFooter
    }
}
</script>
<style>
.infrastructureManagement_background {
  background-image: url("@/assets/InfrastructureManagement_wave.svg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: bottom;
}
.infrastructureManagement_background_bot {
  background-image: url("@/assets/InfrastructureManagement_wave_bot.svg");
  background-size: 100%;
  background-repeat: no-repeat;
}
.infrastructureManagement_border {
    box-shadow: 0px 4px 8px rgba(0, 99, 210, 0.3);
    border-radius: 15px;
    background-color: white;
}
</style>