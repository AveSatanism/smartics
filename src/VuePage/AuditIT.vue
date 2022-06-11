<template>
  <div id="AuditIT">
    <SiteHeader />
    <SiteNavigation />
    <div>
      <div class="py-[42px] flex flex-wrap gap-x-[130px] justify-center items-center">
        <div class="site_color_1">
          <h1 class="mb-[26px]">Один админ - <br>хорошо... <br>А целая команда <br>готова ему помочь!</h1>
          <p class="mb-[26px] text_1">Один человек не может обладать компетенцией <br>
          целой команды профессионалов, но зачастую это и <br>
          не нужно. <br>Часто простая задача решается дорого и не 
          <br>эффективно только из-за того, что сисадмин не <br>знает, как решить ее по-другому.</p>
          <p class="mb-[36px] text_3">SMARTICS - ваш лучший друг и помощник. <br>Мы готовы дополнить вашего админа и помочь ему.</p>
          <UIButton variant="orange2">Хочу!</UIButton>
        </div>
        <img class="h-[614px]" src="@/assets/pageContentImage/AuditIT_image.png" width="406" height="614" alt="AuditIT_image">
      </div>
      <section class="site_color_3 site_color_2_background">
        <h2 class="py-[36px] text-center">Мы - команда таких же айти специалистов, мы готовы оказать любую <br>
        поддержку своим коллегам. Поможем организовать процессы <br>
        администрирования понятным и надёжным способом.</h2>
      </section>
      <div class="py-[60px] flex justify-center site_color_1">
        <div class="w-[835px]">
        <h3 class="ml-[15px] mb-[50px]">Мы готовы оказать поддержку существующему IT отделу по ряду пунктов:</h3>
        <ul class="audit_list text_2">
          <li><p>•</p><p>решение и устранение конкретных проблем</p></li>
          <li><p>•</p><p>проведение комплексного аудита существующей IT инфрастуктуры и составление дорожной карты её модернизации</p></li>
          <li><p>•</p><p>временная подмена вашего специалиста на время отпуска и непредвиденных обстоятельств</p></li>
          <li><p>•</p><p>Консалтинг по информационной безопасности</p></li>
        </ul>
        </div>
      </div>
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
.audit_list li {
    display: flex;
    column-gap: 8px;
    padding: 27px 56px;
    margin-bottom: 20px;
    border: 2px solid #DDECFF;
    filter: drop-shadow(0px 4px 8px rgba(0, 99, 210, 0.3));
    border-radius: 15px;
}
</style>